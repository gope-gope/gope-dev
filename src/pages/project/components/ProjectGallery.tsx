import { useState, useCallback, useEffect } from "react";

/** Resolve gallery item: use as-is if full URL/path, else prepend base. */
function gallerySrc(src: string) {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `${import.meta.env.BASE_URL}${src}`;
}

/** Bento: 1 = double width. First and fourth images are featured. */
const BENTO_SPANS = [1, 0, 0, 1, 0, 0, 0, 0, 0, 0] as const;

function ProjectGallery({
  title,
  images,
  projectTitle,
}: {
  title: string;
  images: string[];
  projectTitle: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      if (lightboxIndex == null) return;
      setLightboxIndex((prev) => {
        const next = prev! + delta;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [lightboxIndex, images.length]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex == null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, go]);

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
        {images.map((src, i) => {
          const span = BENTO_SPANS[i] ?? 0;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className={`overflow-hidden rounded-xl border border-border bg-muted/30 text-left transition hover:ring-2 hover:ring-primary/50 focus:outline-none focus:ring-2 focus:ring-primary ${
                span === 1 ? "col-span-2" : ""
              }`}
            >
              <img
                src={gallerySrc(src)}
                alt={`${projectTitle} — screenshot ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img
            src={gallerySrc(images[lightboxIndex])}
            alt={`${projectTitle} — screenshot ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </section>
  );
}

export default ProjectGallery;
