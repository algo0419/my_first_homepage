import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { sphereItems, spherePosition } from "./spherical-content";

export type SphereController = {
  dispose(): void;
  setMotion(enabled: boolean): void;
  setSuspended(suspended: boolean): void;
  turn(x: number, y: number): void;
  zoom(delta: number): void;
  reset(): void;
  shuffle(): void;
  focus(id: string): void;
};

export function createSphericalScene(
  root: HTMLElement,
  canvas: HTMLCanvasElement,
): SphereController {
  const scene = new THREE.Scene();
  // The viewer is inside the sphere. There is no top, bottom or page boundary.
  const camera = new THREE.PerspectiveCamera(80, 1, 0.01, 2000);
  camera.position.set(0, 0, 0.1);
  // Input is handled on the DOM layer; attaching to the inert canvas preserves
  // OrbitControls' camera/damping lifecycle without stealing child clicks.
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.rotateSpeed = 0.42;
  controls.autoRotateSpeed = 0.55;
  controls.minPolarAngle = 0.08;
  controls.maxPolarAngle = Math.PI - 0.08;
  controls.saveState();
  let renderer: THREE.WebGLRenderer | null = null;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    root.dataset.renderer = "webgl";
  } catch {
    root.dataset.renderer = "dom";
  }

  const geometry = new THREE.PlaneGeometry(1, 1);
  const loader = new THREE.TextureLoader();
  const textures = new Map<string, Promise<THREE.Texture>>();
  let disposed = false;
  let contextLost = false;
  let dirty = true;
  let probePixels = true;
  let width = 1;
  let height = 1;
  let motion = false;
  let suspended = false;
  let hover = false;
  let dragging = false;
  let focusedId: string | null = null;
  let frame = 0;
  let lastTime = 0;
  let cameraFov = 80;
  let targetFov = 80;
  let pointerStart = { x: 0, y: 0 };
  let previousPointer = { x: 0, y: 0 };
  const pointers = new Map<number, { x: number; y: number }>();
  let pinchDistance = 0;
  let moved = false;
  const point = new THREE.Vector3();
  const projected = new THREE.Vector3();
  const view = new THREE.Vector3();
  const entries = sphereItems.map((item) => ({
    item,
    element: root.querySelector<HTMLElement>(`[data-node="${item.id}"]`)!,
    position: new THREE.Vector3(),
    mesh: null as THREE.Mesh<
      THREE.PlaneGeometry,
      THREE.MeshBasicMaterial
    > | null,
    requested: false,
  }));

  function setPositions() {
    for (const entry of entries) {
      const [lon, lat] =
        width < 640 && entry.item.mobile
          ? entry.item.mobile
          : [entry.item.lon, entry.item.lat];
      entry.position.set(...spherePosition(lon, lat));
    }
  }

  function requestPhoto(entry: (typeof entries)[number]) {
    if (!renderer || entry.requested || !entry.item.image) return;
    entry.requested = true;
    const url = entry.item.image;
    if (!textures.has(url)) {
      textures.set(
        url,
        loader.loadAsync(url).then((texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = 4;
          if (disposed) texture.dispose();
          return texture;
        }),
      );
    }
    textures
      .get(url)!
      .then((texture) => {
        if (disposed) return;
        entry.mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
          }),
        );
        scene.add(entry.mesh);
        entry.element.dataset.rendered = String(!contextLost);
        probePixels = true;
        dirty = true;
      })
      .catch(() => {
        entry.element.dataset.rendered = "false";
      });
  }

  function render() {
    camera.updateMatrixWorld();
    const focal =
      height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    let visible = 0;
    for (const entry of entries) {
      const { item, element } = entry;
      view.copy(entry.position).applyMatrix4(camera.matrixWorldInverse);
      const depth = -view.z;
      const scale = Math.min(1.7, focal / Math.max(1, depth));
      projected.copy(entry.position).project(camera);
      const x = ((projected.x + 1) * width) / 2;
      const y = ((1 - projected.y) * height) / 2;
      const halfW = item.width * scale * 0.6;
      const halfH = (item.height ?? element.offsetHeight) * scale * 0.6;
      const shown =
        depth > 100 &&
        x > -halfW &&
        x < width + halfW &&
        y > -halfH &&
        y < height + halfH;
      element.style.visibility = shown ? "visible" : "hidden";
      element.setAttribute("aria-hidden", String(!shown));
      element.inert = !shown;
      if (entry.mesh) entry.mesh.visible = shown;
      if (!shown) continue;
      visible++;
      element.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) translate(-50%,-50%) scale(${scale.toFixed(4)}) rotate(${item.tilt}deg)`;
      element.dataset.focused = String(focusedId === item.id);
      element.style.zIndex = String(
        focusedId === item.id
          ? 1000
          : item.kind === "artifact"
            ? 20
            : item.kind === "photo"
              ? 2
              : item.kind === "room"
                ? 5
                : item.kind === "record"
                  ? 40
                  : item.kind === "word"
                    ? 35
                    : 30,
      );
      if (item.kind === "photo") requestPhoto(entry);
      if (entry.mesh) {
        entry.mesh.position.copy(entry.position);
        entry.mesh.quaternion.copy(camera.quaternion);
        entry.mesh.rotateZ(THREE.MathUtils.degToRad(-item.tilt));
        const correction = scale / (focal / depth);
        entry.mesh.scale.set(
          item.width * correction,
          (item.height ?? item.width) * correction,
          1,
        );
      }
    }
    if (!contextLost) renderer?.render(scene, camera);
    // Development QA reads the actual WebGL framebuffer, not the DOM fallback.
    if (
      process.env.NODE_ENV !== "production" &&
      renderer &&
      !contextLost &&
      probePixels
    ) {
      const gl = renderer.getContext();
      const rgba = new Uint8Array(4);
      const colors = new Set<string>();
      let painted = 0;
      for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
          gl.readPixels(
            Math.floor(((x + 0.5) * canvas.width) / 8),
            Math.floor(((y + 0.5) * canvas.height) / 8),
            1,
            1,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            rgba,
          );
          if (rgba[3]) {
            painted++;
            colors.add(`${rgba[0]},${rgba[1]},${rgba[2]}`);
          }
        }
      root.dataset.canvasCheck = JSON.stringify({
        painted,
        samples: 64,
        colors: colors.size,
        width: canvas.width,
        height: canvas.height,
      });
      probePixels = false;
    }
    root.dataset.visibleNodes = String(visible);
    root.dataset.longitude = THREE.MathUtils.radToDeg(
      controls.getAzimuthalAngle(),
    ).toFixed(1);
    root.dataset.latitude = (
      90 - THREE.MathUtils.radToDeg(controls.getPolarAngle())
    ).toFixed(1);
    root.dataset.fov = camera.fov.toFixed(1);
    root.dataset.ready = "true";
  }

  function resize() {
    width = root.clientWidth;
    height = root.clientHeight;
    camera.aspect = width / height;
    cameraFov = targetFov = width < 640 ? 100 : 80;
    camera.fov = cameraFov;
    camera.updateProjectionMatrix();
    renderer?.setSize(width, height, false);
    setPositions();
    probePixels = true;
    dirty = true;
  }
  const observer = new ResizeObserver(resize);
  observer.observe(root);
  resize();

  const tick = (time: number) => {
    if (disposed) return;
    frame = requestAnimationFrame(tick);
    const delta = Math.min((time - lastTime) / 1000, 0.05);
    lastTime = time;
    controls.autoRotate =
      motion && !suspended && !hover && !dragging && !document.hidden;
    controls.enableDamping = motion;
    if (Math.abs(targetFov - cameraFov) > 0.05) {
      cameraFov += (targetFov - cameraFov) * (motion ? 0.16 : 1);
      camera.fov = cameraFov;
      camera.updateProjectionMatrix();
      dirty = true;
    }
    const changed = controls.update(delta);
    if ((changed || dirty) && !document.hidden) {
      render();
      dirty = false;
    }
  };
  frame = requestAnimationFrame(tick);

  const onWheel = (event: WheelEvent) => {
    if (suspended) return;
    event.preventDefault();
    targetFov = THREE.MathUtils.clamp(
      targetFov + event.deltaY * 0.035,
      48,
      112,
    );
    dirty = true;
  };
  const onPointerDown = (event: PointerEvent) => {
    if (suspended || event.button !== 0) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    pointerStart = { x: event.clientX, y: event.clientY };
    previousPointer = pointerStart;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchDistance = Math.hypot(a.x - b.x, a.y - b.y);
    }
    dragging = true;
    moved = false;
    root.dataset.dragging = "true";
  };
  const onPointerMove = (event: PointerEvent) => {
    if (!dragging || suspended || !pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDistance > 0 && distance > 0)
        targetFov = THREE.MathUtils.clamp(
          (targetFov * pinchDistance) / distance,
          48,
          112,
        );
      pinchDistance = distance;
      moved = true;
      dirty = true;
    } else {
      if (
        Math.hypot(
          event.clientX - pointerStart.x,
          event.clientY - pointerStart.y,
        ) > 6
      )
        moved = true;
      if (moved) {
        controls.rotateLeft(
          ((2 * Math.PI * (event.clientX - previousPointer.x)) / height) * 0.42,
        );
        controls.rotateUp(
          ((2 * Math.PI * (event.clientY - previousPointer.y)) / height) * 0.42,
        );
        dirty = true;
      }
    }
    previousPointer = { x: event.clientX, y: event.clientY };
    if (moved) {
      focusedId = null;
      event.preventDefault();
      if (!root.hasPointerCapture(event.pointerId))
        root.setPointerCapture(event.pointerId);
    }
  };
  const onPointerUp = (event: PointerEvent) => {
    pointers.delete(event.pointerId);
    if (root.hasPointerCapture(event.pointerId))
      root.releasePointerCapture(event.pointerId);
    if (pointers.size) {
      previousPointer = pointerStart = [...pointers.values()][0];
    } else {
      dragging = false;
      root.dataset.dragging = "false";
      probePixels = true;
      dirty = true;
    }
  };
  const onClick = (event: MouseEvent) => {
    if (moved && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    }
  };
  const onNativeDrag = (event: DragEvent) => event.preventDefault();
  const onOver = (event: PointerEvent) => {
    hover = !!(event.target as HTMLElement).closest("button,a");
  };
  const onLeave = () => {
    hover = false;
  };
  const onFocus = () => {
    hover = true;
  };
  const onBlur = () => {
    hover = false;
  };
  const onWindowBlur = () => {
    pointers.clear();
    dragging = false;
    root.dataset.dragging = "false";
  };
  const onContextLost = (event: Event) => {
    event.preventDefault();
    contextLost = true;
    root.dataset.renderer = "dom";
    canvas.style.visibility = "hidden";
    for (const entry of entries) entry.element.dataset.rendered = "false";
  };
  const onContextRestored = () => {
    contextLost = false;
    root.dataset.renderer = "webgl";
    canvas.style.visibility = "";
    for (const entry of entries)
      if (entry.mesh) entry.element.dataset.rendered = "true";
    dirty = true;
  };
  const onKey = (event: KeyboardEvent) => {
    if ((event.target as HTMLElement).closest("input,dialog") || suspended)
      return;
    const directions: Record<string, [number, number]> = {
      ArrowLeft: [0.12, 0],
      ArrowRight: [-0.12, 0],
      ArrowUp: [0, 0.12],
      ArrowDown: [0, -0.12],
    };
    if (directions[event.key]) {
      event.preventDefault();
      const [x, y] = directions[event.key];
      controls.rotateLeft(x);
      controls.rotateUp(y);
      dirty = true;
    }
    if (event.key === "Escape") {
      focusedId = null;
      dirty = true;
    }
  };
  root.addEventListener("wheel", onWheel, { passive: false });
  root.addEventListener("pointerdown", onPointerDown, true);
  window.addEventListener("pointermove", onPointerMove, {
    capture: true,
    passive: false,
  });
  window.addEventListener("pointerup", onPointerUp, true);
  window.addEventListener("pointercancel", onPointerUp, true);
  root.addEventListener("dragstart", onNativeDrag);
  root.addEventListener("click", onClick, true);
  root.addEventListener("pointerover", onOver);
  root.addEventListener("pointerleave", onLeave);
  root.addEventListener("focusin", onFocus);
  root.addEventListener("focusout", onBlur);
  root.addEventListener("keydown", onKey);
  window.addEventListener("blur", onWindowBlur);
  canvas.addEventListener("webglcontextlost", onContextLost);
  canvas.addEventListener("webglcontextrestored", onContextRestored);

  return {
    setMotion(value) {
      motion = value;
      dirty = true;
    },
    setSuspended(value) {
      suspended = value;
      controls.enabled = !value;
    },
    turn(x, y) {
      controls.rotateLeft(x);
      controls.rotateUp(y);
      dirty = true;
    },
    zoom(delta) {
      targetFov = THREE.MathUtils.clamp(targetFov + delta, 48, 112);
      dirty = true;
    },
    reset() {
      focusedId = null;
      controls.reset();
      targetFov = width < 640 ? 100 : 80;
      dirty = true;
    },
    shuffle() {
      focusedId = null;
      controls.rotateLeft(0.7 + Math.random() * 0.6);
      controls.rotateUp((Math.random() - 0.5) * 0.6);
      dirty = true;
    },
    focus(id) {
      const entry = entries.find((entry) => entry.item.id === id);
      if (!entry) return;
      focusedId = id;
      controls.reset();
      camera.position.copy(
        point.copy(entry.position).normalize().multiplyScalar(-0.1),
      );
      camera.lookAt(0, 0, 0);
      controls.update();
      dirty = true;
      requestAnimationFrame(() => {
        if (disposed) return;
        render();
        entry.element
          .querySelector<HTMLElement>("button,a")
          ?.focus({ preventScroll: true });
      });
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      root.removeEventListener("wheel", onWheel);
      root.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("pointermove", onPointerMove, true);
      window.removeEventListener("pointerup", onPointerUp, true);
      window.removeEventListener("pointercancel", onPointerUp, true);
      root.removeEventListener("dragstart", onNativeDrag);
      root.removeEventListener("click", onClick, true);
      root.removeEventListener("pointerover", onOver);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("focusin", onFocus);
      root.removeEventListener("focusout", onBlur);
      root.removeEventListener("keydown", onKey);
      window.removeEventListener("blur", onWindowBlur);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      for (const entry of entries) entry.mesh?.material.dispose();
      for (const texture of textures.values())
        texture.then((t) => t.dispose()).catch(() => {});
      geometry.dispose();
      renderer?.dispose();
    },
  };
}
