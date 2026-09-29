import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "react-feather";
import { Helmet } from "react-helmet-async";
import vinoHero from "../../assets/img/vino-hero.png";
import { Link } from "wouter";

// Helper: smooth scroll to a section by id and close the menu
const scrollTo = (id, callback) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  callback?.();
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [serviciosDesktopOpen, setServiciosDesktopOpen] = useState(false);
  const closeTimer = useRef(null);

  // Bloquear scroll del body cuando el nav mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setServiciosOpen(false);
    setServiciosDesktopOpen(false);
  };

  const handleDesktopEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServiciosDesktopOpen(true);
  };

  const handleDesktopLeave = () => {
    closeTimer.current = setTimeout(() => setServiciosDesktopOpen(false), 150);
  };

  return (
    <header className="relative h-screen text-blanco font-coolvetica">
      <Helmet>
        <title>
          Vino Estudio | Diseño, Branding, Foto y Video para Bodas y Marcas
        </title>
        <meta
          name="description"
          content="Somos Virginia y Lautaro. Vino Estudio es un estudio de diseño argentino especializado en branding para bodas, contenido audiovisual e invitaciones web a medida. Diseño que se siente propio."
        />
        <meta
          property="og:title"
          content="Vino Estudio | Foto y video, Diseño, Branding e Invitaciones Web"
        />
        <meta
          property="og:description"
          content="Estudio creativo argentino. Branding para bodas, foto y video para marcas e invitaciones web. Diseño que se siente propio."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vinoestudio.com.ar/" />
      </Helmet>
      <img
        src={vinoHero}
        alt="Vino Estudio - Estudio de diseño y branding para bodas y marcas, Argentina"
        className="h-screen object-cover lg:w-screen"
      />

      <div className="absolute top-10 right-10 flex flex-col lg:flex lg:justify-center lg:items-center lg:text-center">
        {/* ── Botón hamburguesa (solo mobile) ── */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl font-bold lg:hidden"
        >
          {open ? "X" : "menú"}
        </button>

        {/* ── Overlay para cerrar al tocar fuera (solo mobile) ── */}
        {open && (
          <div className="fixed inset-0 z-9 lg:hidden" onClick={closeAll} />
        )}

        {/* ── Nav mobile con transición suave ── */}
        <nav
          className={`
            fixed top-0 left-0 h-screen w-[75%] z-10
            flex flex-col justify-center
            text-2xl bg-blanco
            transition-transform duration-300 ease-in-out
            lg:hidden
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <ul className="flex flex-col gap-10 text-bordo font-bold px-10 md:px-50">
            <li>
              <Link
                href="#quienesSomos"
                onClick={scrollTo("quienesSomos", closeAll)}
              >
                SOBRE NOSOTROS
              </Link>
            </li>

            {/* ── SERVICIOS con submenú en flujo (empuja hacia abajo) ── */}
            <li>
              <button
                className="flex items-center gap-2 font-bold"
                onClick={() => setServiciosOpen(!serviciosOpen)}
              >
                SERVICIOS
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${serviciosOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Submenú en flujo normal — empuja PROYECTOS hacia abajo */}
              <ul
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  flex flex-col gap-3 pl-4 text-xl font-regular
                  ${serviciosOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <li>
                  <Link href="/branding" onClick={closeAll}>
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/foto-video" onClick={closeAll}>
                    Foto y Video
                  </Link>
                </li>
                <li>
                  <Link href="/invitacion-web" onClick={closeAll}>
                    Invitaciones Web
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="#proyectos" onClick={scrollTo("proyectos", closeAll)}>
                PROYECTOS
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/message/DMF23YLR6NINL1"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACTANOS
              </a>
            </li>
          </ul>
        </nav>

        {/* ── Nav desktop (md+) ── */}
        <nav className="hidden lg:flex lg:flex-row lg:gap-12 lg:text-blanco lg:text-2xl">
          <Link
            href="#quienesSomos"
            onClick={scrollTo("quienesSomos")}
            className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            SOBRE NOSOTROS
          </Link>

          {/* SERVICIOS con dropdown desktop — abre al hover */}
          <div
            className="relative"
            onMouseEnter={handleDesktopEnter}
            onMouseLeave={handleDesktopLeave}
          >
            <Link
              href="#servicios"
              onClick={scrollTo("servicios")}
              className="relative flex items-center gap-1 font-bold cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              SERVICIOS
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${serviciosDesktopOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Dropdown */}
            <ul
              className={`
                absolute top-full left-1/2 -translate-x-1/2 mt-3
                flex flex-col gap-2 text-bordo bg-blanco text-base font-bold
                px-5 py-4 rounded shadow-lg whitespace-nowrap
                transition-all duration-300 ease-in-out origin-top
                ${serviciosDesktopOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
              `}
            >
              <li>
                <Link href="/branding" onClick={closeAll}>
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/foto-video" onClick={closeAll}>
                  Foto y Video
                </Link>
              </li>
              <li>
                <Link href="/invitacion-web" onClick={closeAll}>
                  Invitaciones Web
                </Link>
              </li>
            </ul>
          </div>

          <Link
            href="#proyectos"
            onClick={scrollTo("proyectos")}
            className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            PROYECTOS
          </Link>
          <a
            href="https://wa.me/message/DMF23YLR6NINL1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            CONTACTANOS
          </a>
        </nav>
      </div>

      <h1
        className="absolute font-bold text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-10 md:leading-15 md:text-7xl"
        style={{ animation: "heroFadeIn 1.2s ease both" }}
      >
        <Link href="/">
          @VINO <br /> ESTUDIO
        </Link>
      </h1>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </header>
  );
}
