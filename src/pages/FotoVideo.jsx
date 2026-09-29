import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "react-feather";
import lamb1 from "../assets/img/lamb/lamb-01.webp";
import lamb2 from "../assets/img/lamb/lamb-02.webp";
import lambVideo from "../assets/img/lamb/lamb-03.mp4";
import entreCapas1 from "../assets/img/entre-capas/entre-capas-01.webp";
import entreCapas2 from "../assets/img/entre-capas/entre-capas-02.webp";
import entreCapas3 from "../assets/img/entre-capas/entre-capas-03.webp";
import kiki1 from "../assets/img/kiki/kiki-01.jpg";
import kiki2 from "../assets/img/kiki/kiki-03.jpg";
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
import materia01 from "../assets/img/materia/materia01.webp";
import materia02 from "../assets/img/materia/materia02.webp";
import materia03 from "../assets/img/materia/materia03.webp";
import polibas1 from "../assets/img/polibas/polibas-01.webp";
import polibas2 from "../assets/img/polibas/polibas-02.webp";
import polibas3 from "../assets/img/polibas/polibas-03.webp";
import alPie01 from "../assets/img/AlPie/alpie-01.webp";
import alPie02 from "../assets/img/AlPie/alpie-02.webp";
import alPie03 from "../assets/img/AlPie/alpie-03.webp";
import burgerHaus01 from "../assets/img/burgerHaus/burgerhaus-01.webp";
import burgerHaus02 from "../assets/img/burgerHaus/burgerhaus-02.webp";
import burgerHaus03 from "../assets/img/burgerHaus/burgerhaus-03.webp";
import emilia01 from "../assets/img/emilia/emilia-01.webp";
import emilia02 from "../assets/img/emilia/emilia-02.webp";
import emilia03 from "../assets/img/emilia/emilia-03.webp";
import nereIsa01 from "../assets/img/nere-isa/nere-isa-01.webp";
import nereIsa02 from "../assets/img/nere-isa/nere-isa-02.webp";
import nereIsa03 from "../assets/img/nere-isa/nere-isa-03.webp";
import tizi01 from "../assets/img/tizi/tizi-01.webp";
import tizi02 from "../assets/img/tizi/tizi-02.webp";
import tizi03 from "../assets/img/tizi/tizi-03.webp";
import polos01 from "../assets/img/polos/polos-01.webp";
import polos02 from "../assets/img/polos/polos-02.webp";
import polos03 from "../assets/img/polos/polos-03.webp";
import valenTomi01 from "../assets/img/valen-tomi/vyt-01.webp";
import valenTomi02 from "../assets/img/valen-tomi/vyt-02.webp";
import valenTomi03 from "../assets/img/valen-tomi/vyt-03.webp";
import wedding01 from "../assets/img/wedding/wedding-01.webp";
import wedding02 from "../assets/img/wedding/wedding-02.webp";
import wedding03 from "../assets/img/wedding/wedding-03.webp";

import HeaderWeb from "../components/HeaderWeb";
import Carousel from "../components/Carousel";
import { Helmet } from "react-helmet-async";

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
      titulo: "AL PIE",
      media: [
        { type: "image", src: alPie01 },
        { type: "image", src: alPie02 },
        { type: "image", src: alPie03 },
      ],
    },
    {
      id: 4,
      titulo: "KIKI",
      media: [
        { type: "image", src: kiki1 },
        { type: "image", src: kiki2 },
        { type: "video", src: kikiVideo },
      ],
    },
    {
      id: 5,
      titulo: "MATERÍA PREMIUM",
      media: [
        { type: "image", src: materia01 },
        { type: "image", src: materia02 },
        { type: "image", src: materia03 },
      ],
    },
    {
      id: 6,
      titulo: "BURGER HAUS",
      media: [
        { type: "image", src: burgerHaus01 },
        { type: "image", src: burgerHaus02 },
        { type: "image", src: burgerHaus03 },
      ],
    },
    {
      id: 7,
      titulo: "EMILIA",
      media: [
        { type: "image", src: emilia01 },
        { type: "image", src: emilia02 },
        { type: "image", src: emilia03 },
      ],
    },
    {
      id: 8,
      titulo: "POLOS OPUESTOS",
      media: [
        { type: "image", src: polos01 },
        { type: "image", src: polos02 },
        { type: "image", src: polos03 },
      ],
    },
    {
      id: 9,
      titulo: "BELLEZA SECRETA",
      media: [
        { type: "image", src: bellezaSecreta1 },
        { type: "image", src: bellezaSecreta2 },
        { type: "video", src: bellezaSecretaVideo },
      ],
    },
    {
      id: 10,
      titulo: "VALEN & TOMI",
      media: [
        { type: "image", src: valenTomi01 },
        { type: "image", src: valenTomi02 },
        { type: "image", src: valenTomi03 },
      ],
    },
    {
      id: 11,
      titulo: "WEDDING",
      media: [
        { type: "image", src: wedding01 },
        { type: "image", src: wedding02 },
        { type: "image", src: wedding03 },
      ],
    },
    {
      id: 12,
      titulo: "NEUTRO",
      media: [
        { type: "image", src: neutro1 },
        { type: "image", src: neutro2 },
        { type: "video", src: neutroVideo },
      ],
    },
    {
      id: 13,
      titulo: "TIZI XV",
      media: [
        { type: "image", src: tizi01 },
        { type: "image", src: tizi02 },
        { type: "image", src: tizi03 },
      ],
    },
    {
      id: 14,
      titulo: "NERE & ISA",
      media: [
        { type: "image", src: nereIsa01 },
        { type: "image", src: nereIsa02 },
        { type: "image", src: nereIsa03 },
      ],
    },
    {
      id: 15,
      titulo: "MELO",
      media: [
        { type: "image", src: melo1 },
        { type: "image", src: melo2 },
        { type: "image", src: melo3 },
      ],
    },
    {
      id: 16,
      titulo: "HAMBURGA",
      media: [
        { type: "image", src: hamburga1 },
        { type: "image", src: hamburga2 },
        { type: "video", src: hamburgaVideo },
      ],
    },
    {
      id: 17,
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
      <Helmet>
        <title>Foto y Video para Marcas | Vino Estudio</title>
        <meta
          name="description"
          content="Contenido audiovisual para marcas y emprendimientos. Fotografía y video profesional con identidad visual propia. Proyectos como Lamb, Kiki, Hamburga y más. Vino Estudio, Argentina."
        />
        <meta
          property="og:title"
          content="Foto y Video para Marcas | Vino Estudio"
        />
        <meta
          property="og:description"
          content="Fotografía y video para marcas que buscan hacer las cosas diferente. Vino Estudio."
        />
        <link rel="canonical" href="https://vinoestudio.com.ar/foto-video" />
      </Helmet>
      <HeaderWeb />
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .media-card { overflow: hidden; position: relative; }
        .media-card img,
        .media-card video { transition: transform 0.4s ease; }
        .media-card:hover img,
        .media-card:hover video { transform: scale(1.04); }
        .media-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .media-card:hover::after { background: rgba(0,0,0,0.12); }
      `}</style>
      <main className="flex flex-col items-center justify-center py-5 font-coolvetica font-book gap-10 md:gap-15">
        {secciones.map((seccion, sectionIdx) => (
          <section
            key={seccion.id}
            className="flex flex-col w-full text-center gap-5"
          >
            <h2 className="fade-up text-black text-3xl pt-5">
              {seccion.titulo}
            </h2>

            {/* ── Mobile/tablet: Carousel ── */}
            <div className="md:hidden flex justify-center">
              <Carousel>
                {seccion.media.map((media, index) =>
                  media.type === "image" ? (
                    <img
                      key={index}
                      src={media.src}
                      alt={`${seccion.titulo} - foto ${index + 1} - Vino Estudio`}
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
            <div className="hidden md:flex justify-center gap-3 px-10">
              {seccion.media.map((media, mediaIdx) => (
                <div
                  key={mediaIdx}
                  className="media-card flex border border-black cursor-pointer"
                  onClick={() => openLightbox(sectionIdx, mediaIdx)}
                >
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt={`${seccion.titulo} - foto ${mediaIdx + 1} - Vino Estudio`}
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
      <footer className="flex w-full items-center justify-around font-coolvetica font-bold border-t border-black mt-5 lg:text-xl py-5 lg:py-10 lg:mt-10">
        <p>VINO ESTUDIO</p>
        <p>ARG 2026</p>
      </footer>

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
                alt={`${secciones[lightbox.sectionIdx].titulo} - foto ampliada ${lightbox.mediaIdx + 1} - Vino Estudio`}
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
