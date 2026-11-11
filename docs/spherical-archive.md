# A spherical archive

The previous magazine/collage grid has been removed. The entire home page is a
fixed, full-bleed spatial view with no document scroll. A Three.js perspective
camera looks outward from the inside of a sphere. Every photograph, text fragment,
name fragment and object has longitude/latitude coordinates. The opening view is
art-directed; the reverse side uses a golden-angle distribution, not rows/rings.

Photographs render as WebGL billboards. DOM text, links, the room, and artwork are
projected through the same camera. This keeps copy selectable in reading dialogs,
links real, and existing room/object interactions accessible. Junhyung and Cho
are separate, modestly sized objects, not an opening title. The introduction is
split into three independent sentences elsewhere in the sphere.

## Interaction

- Drag or swipe in either direction to rotate the view. OrbitControls supplies
  camera rotation and damping. Pointer capture starts only after a six-pixel drag
  threshold so a stationary click still reaches its original link/button.
- Wheel, pinch, and zoom buttons change field of view within 48-112 degrees.
- Arrow keys/buttons turn the camera. Home/signature returns to the opening view;
  shuffle turns toward another direction. The search dialog focuses an item in
  space, including items behind the current view.
- Text/photo buttons open native modal dialogs. Escape closes them and focus
  returns to the trigger. External post links retain their original URLs.
- Automatic rotation pauses while interacting/reading. The global motion toggle
  respects the initial reduced-motion preference. Offscreen DOM nodes are inert.
- Room hotspots open large, viewport-fixed portals that fold away on mouse leave.

## Rendering and delivery

Existing precomputed WebP assets and browser caching are retained. Textures are
requested when their nodes become visible and shared across repeated photographs.
The Three.js engine is a separate asynchronous chunk; it never causes an image
optimizer request. Server-rendered CSS perspective uses the same sphere coordinates
to show the opening composition before the engine arrives, rather than a blank
loading screen. A DOM image fallback remains until its WebGL texture is ready,
and is restored on context loss. Scene resources and event listeners are disposed
on unmount. Pixel ratio is capped at 1.5; paused scenes render only when dirty.

In development, an 8x8 framebuffer probe records `data-canvas-check` after image
loads and resize. This verifies actual nonblank WebGL pixels at desktop/mobile
sizes, independently of the DOM images. The probe is stripped from production.

## Verification

Checked desktop 1280x720 and 1440x900, mobile 390x844 and 320x740. The WebGL probes
found 20-23 painted samples out of 64 with distinct colors; visible images loaded
without missing assets. The document stays exactly one viewport high/wide.
Drag rotation, click/drag separation, automatic rotation/pause, zoom buttons,
search-to-focus, reading dialogs, room portals, artifact spins, and record changes
were exercised in the browser. Multi-touch pinch needs a physical-device check.
