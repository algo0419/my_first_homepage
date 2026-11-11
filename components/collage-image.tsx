type CollageImageProps = {
  name: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  room?: boolean;
  eager?: boolean;
};

export function CollageImage({
  name,
  alt,
  width,
  height,
  sizes,
  room = false,
  eager = false,
}: CollageImageProps) {
  const widths = room ? [640, 1280] : [480, 960];
  return (
    <img
      src={`/media/${name}-${widths[0]}.webp`}
      srcSet={widths
        .map((size) => `/media/${name}-${size}.webp ${size}w`)
        .join(", ")}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      fetchPriority={room ? "high" : "auto"}
    />
  );
}
