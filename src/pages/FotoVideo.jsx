import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "react-feather";
import lamb1 from "../assets/img/lamb/lamb-01.webp";
import lamb2 from "../assets/img/lamb/lamb-02.jpg";
import lambVideo from "../assets/img/lamb/lamb-03.mp4";
import entreCapas1 from "../assets/img/entre-capas/entre-capas-01.webp";
import entreCapas2 from "../assets/img/entre-capas/entre-capas-02.webp";
import entreCapas3 from "../assets/img/entre-capas/entre-capas-03.webp";
import kiki1 from "../assets/img/kiki/kiki-01.JPG";
import kiki2 from "../assets/img/kiki/kiki-03.JPG";
import kikiVideo from "../assets/img/kiki/kiki-video.mp4";
import neutro1 from "../assets/img/neutro/neutro-01.jpg";
import neutro2 from "../assets/img/neutro/neutro-02.webp";
import neutroVideo from "../assets/img/neutro/neutro_01.mp4";
import bellezaSecreta1 from "../assets/img/belleza-secreta/belleza-secreta-01.webp";
import bellezaSecreta2 from "../assets/img/belleza-secreta/belleza-secreta-02.webp";
import bellezaSecretaVideo from "../assets/img/belleza-secreta/belleza-secreta-video1.mp4";
import melo1 from "../assets/img/melo/melo-01.webp";
import melo2 from "../assets/img/melo/melo-02.webp";
import melo3 from "../assets/img/melo/melo-03.webp";
import hamburga1 from "../assets/img/hamburga/hamburga-01.webp";
import hamburga2 from "../assets/img/hamburga/hamburga-02.webp";
import hamburgaVideo from "../assets/img/hamburga/hamburga-video.mp4";
import materia01 from "../assets/img/materia/materia01.jpg";
import materia02 from "../assets/img/materia/materia02.jpg";
import materia03 from "../assets/img/materia/materia03.jpg";
import polibas1 from "../assets/img/polibas/polibas-01.jpg";
import polibas2 from "../assets/img/polibas/polibas-02.jpg";
import polibas3 from "../assets/img/polibas/polibas-03.jpg";
import HeaderWeb from "../components/HeaderWeb";
import Carousel from "../components/Carousel";

export default function FotoVideo() {
  const secciones = [
    {
      id: 1,
      titulo: "LAMB",
      media: [
        { type: "image", src: lamb1 },
        { type: "image", src: lamb2 },
        { type: "video", src: lambVideo },
      ],
    },
    {
      id: 2,
      titulo: "ENTRE CAPAS",
      media: [
        { type: "image", src: entreCapas1 },
        { type: "image", src: entreCapas2 },
        { type: "image", src: entreCapas3 },
      ],
    },
    {
      id: 3,
      titulo: "KIKI",
      media: [
        { type: "image", src: kiki1 },
        { type: "image", src: kiki2 },
        { type: "video", src: kikiVideo },
      ],
    },
    {
      id: 8,
      titulo: "MATERÍA PREMIUM",
      media: [
        { type: "image", src: materia01 },
        { type: "image", src: materia02 },
        { type: "image", src: materia03 },
      ],
    },
    {
      id: 4,
      titulo: "BELLEZA SECRETA",
      media: [
        { type: "image", src: bellezaSecreta1 },
        { type: "image", src: bellezaSecreta2 },
        { type: "video", src: bellezaSecretaVideo },
      ],
    },
    {
      id: 5,
      titulo: "NEUTRO",
      media: [
        { type: "image", src: neutro1 },
        { type: "image", src: neutro2 },
        { type: "video", src: neutroVideo },
      ],
    },
    {
      id: 6,
      titulo: "MELO",
      media: [
        { type: "image", src: melo1 },
        { type: "image", src: melo2 },
        { type: "image", src: melo3 },
      ],
    },
    {
      id: 7,
      titulo: "HAMBURGA",
      media: [
        { type: "image", src: hamburga1 },
        { type: "image", src: hamburga2 },
        { type: "video", src: hamburgaVideo },
      ],
    },
    {
      id: 9,
      titulo: "POLIBAS",
      media: [
        { type: "image", src: polibas1 },
        { type: "image", src: polibas2 },
        { type: "image", src: polibas3 },
      ],
    },
  ];

  // ── Desktop lightbox state ──
  const [lightbox, setLightbox] = useState({
    open: false,
    sectionIdx: null,
    mediaIdx: null,
  });

  const openLightbox = (sectionIdx, mediaIdx) =>
    setLightbox({ open: true, sectionIdx, mediaIdx });

  const closeLightbox = () => setLightbox((prev) => ({ ...prev, open: false }));

  const lightboxMedia =
    lightbox.sectionIdx !== null && lightbox.mediaIdx !== null
      ? secciones[lightbox.sectionIdx].media[lightbox.mediaIdx]
      : null;

  const lightboxPrev = () =>
    setLightbox((prev) => {
      const total = secciones[prev.sectionIdx].media.length;
      return {
        ...prev,
        mediaIdx: prev.mediaIdx === 0 ? total - 1 : prev.mediaIdx - 1,
      };
    });

  const lightboxNext = () =>
    setLightbox((prev) => {
      const total = secciones[prev.sectionIdx].media.length;
      return {
        ...prev,
        mediaIdx: prev.mediaIdx === total - 1 ? 0 : prev.mediaIdx + 1,
      };
    });

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox.open]);

  return (
    <>
      <HeaderWeb />
      <main className="flex flex-col items-center justify-center py-5 font-coolvetica font-book">
        {secciones.map((seccion, sectionIdx) => (
          <section key={seccion.id} className="w-full md:text-center">
            <h2 className="text-bordo text-3xl pt-5 ml-10">{seccion.titulo}</h2>

            {/* ── Mobile/tablet: Carousel ── */}
            <div className="md:hidden flex justify-center">
              <Carousel>
                {seccion.media.map((media, index) =>
                  media.type === "image" ? (
                    <img
                      key={index}
                      src={media.src}
                      alt=""
                      className="object-cover"
                    />
                  ) : (
                    <video
                      key={index}
                      className="object-cover"
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                  ),
                )}
              </Carousel>
            </div>

            {/* ── Desktop (md+): flex row outside carousel ── */}
            <div className="hidden md:flex justify-center gap-3 px-10 py-4">
              {seccion.media.map((media, mediaIdx) => (
                <div
                  key={mediaIdx}
                  className="flex border border-black cursor-pointer"
                  onClick={() => openLightbox(sectionIdx, mediaIdx)}
                >
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt=""
                      className=" object-cover w-80 h-100"
                    />
                  ) : (
                    <video
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-80 h-100"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* ── Desktop Lightbox ── */}
      {lightbox.open && lightboxMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={closeLightbox}
        >
          <div
            className="flex flex-col items-end gap-2 max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "lightboxIn 0.25s ease" }}
          >
            {/* Close button — above the media */}
            <button
              onClick={closeLightbox}
              className="bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-200 self-end"
              title="Cerrar"
            >
              <X size={28} />
            </button>

            {/* Media */}
            {lightboxMedia.type === "video" ? (
              <video
                src={lightboxMedia.src}
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
                src={lightboxMedia.src}
                alt=""
                className="max-w-[90vw] rounded-lg shadow-2xl object-contain"
                style={{ maxHeight: "calc(90vh - 56px)" }}
              />
            )}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrev();
            }}
            className="absolute left-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
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
