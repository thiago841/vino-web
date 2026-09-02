import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const SWIPE_THRESHOLD = 50;

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  // Touch events (mobile)
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = false;
  };
  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      isDragging.current = true;
      delta > 0 ? next() : prev();
    }
    dragStartX.current = null;
  };

  // Mouse drag events (desktop)
  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };
  const handleMouseUp = (e) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      isDragging.current = true;
      delta > 0 ? next() : prev();
    }
    dragStartX.current = null;
  };

  // Open lightbox only if it was a tap/click (not a drag)
  const handleSlideClick = () => {
    if (!isDragging.current) {
      setLightboxOpen(true);
    }
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const currentSlide = slides[curr];

  return (
    <>
      {/* ── Carousel (mobile/tablet only) ── */}
      <div
        className="overflow-hidden relative w-75 h-112 border border-black select-none cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* Slides — clickable to open lightbox */}
        <div
          className="flex transition-transform ease-out duration-500 cursor-pointer"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          onClick={handleSlideClick}
        >
          {slides}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-4 right-0 left-0 pointer-events-none">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
                  transition-all w-3 h-3 bg-white rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="flex flex-col items-end gap-2 max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "lightboxIn 0.25s ease" }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-200 self-end"
              title="Cerrar"
            >
              <X size={28} />
            </button>

            {currentSlide?.props?.src && currentSlide.type === "video" ? (
              <video
                src={currentSlide.props.src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="max-w-[90vw] rounded-lg shadow-2xl object-contain"
                style={{ maxHeight: "calc(90vh - 56px)" }}
              />
            ) : (
              <img
                src={currentSlide?.props?.src}
                alt=""
                className="max-w-[90vw] rounded-lg shadow-2xl object-contain"
                style={{ maxHeight: "calc(90vh - 56px)" }}
              />
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <style>{`
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
