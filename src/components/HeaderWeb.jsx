import { useState } from "react";
import { Link } from "wouter";

export default function HeaderWeb({
  bgColor = "bg-white",
  textColor = "text-black",
  btnColor = "bg-black",
  borderColor = "border-black",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className={`${menuOpen ? "fixed" : ""} relative z-50`}>
        <div
          className={`flex h-[72px] items-center justify-between border-b ${borderColor} ${bgColor} px-5 lg:hidden ${menuOpen ? "fixed w-full" : ""}
        `}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`font-coolvetica text-[17px] font-bold tracking-[-0.5px] ${textColor}`}
          >
            @VINO ESTUDIO
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 flex-col justify-center gap-[5px]"
            aria-label="Abrir menú"
          >
            <span
              className={`block h-px w-[22px] ${btnColor} transition-all duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-[22px] ${btnColor} transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-[22px] ${btnColor} transition-all duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* =========================
          MENÚ MOBILE
      ========================== */}

        <nav
          className={`
          absolute left-0 top-[72px] w-full
          border-b ${borderColor}
          font-coolvetica
          ${bgColor}
          transition-all duration-300
          lg:hidden
          ${
            menuOpen
              ? "fixed visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0"
          }
        `}
        >
          <Link
            href="/"
            onClick={closeMenu}
            className={`flex items-center gap-[18px] border-b ${borderColor} px-6 py-5 text-[15px] ${textColor}`}
          >
            Inicio
          </Link>

          <Link
            href="/branding"
            onClick={closeMenu}
            className={`flex items-center gap-[18px] border-b ${borderColor} px-6 py-5 text-[15px] ${textColor}`}
          >
            Branding para bodas
          </Link>

          <Link
            href="/foto-video"
            onClick={closeMenu}
            className={`flex items-center gap-[18px] border-b ${borderColor} px-6 py-5 text-[15px] ${textColor}`}
          >
            Fotos y Videos
          </Link>

          <Link
            href="/invitacion-web"
            onClick={closeMenu}
            className={`flex items-center gap-[18px] px-6 py-5 text-[15px] ${textColor}`}
          >
            Invitación Web
          </Link>
        </nav>

        {/* =========================
          DESKTOP
      ========================== */}

        <div
          className={`mx-auto mt-5 hidden min-h-[76px] w-[calc(100%-60px)] items-center rounded-[18px] border ${borderColor} ${bgColor} px-7 lg:flex`}
        >
          {/* Logo */}

          <Link
            href="/"
            className={`flex min-w-[230px] items-center gap-[15px] text-[17px] font-bold ${textColor}`}
          >
            <div className="relative h-8 w-[18px]">
              <span
                className={`absolute left-[6px] top-0 h-2 w-[6px] ${textColor}`}
              />

              <span
                className={`absolute bottom-0 left-px h-6 w-4 rounded-[5px_5px_1px_1px] ${textColor}`}
              />
            </div>
            VINO ESTUDIO
          </Link>

          {/* Links */}

          <nav className="flex flex-1 items-center justify-center gap-[38px]">
            <Link
              href="/"
              className={`relative py-2 text-sm ${textColor} after:absolute after:bottom-[2px] after:left-0 after:h-px after:w-full ${textColor}`}
            >
              Inicio
            </Link>

            <Link
              href="/branding"
              className={`py-2 text-sm ${textColor} transition-opacity hover:opacity-60`}
            >
              Branding para bodas
            </Link>

            <Link
              href="/foto-video"
              className={`py-2 text-sm ${textColor} transition-opacity hover:opacity-60`}
            >
              Fotos y Videos
            </Link>

            <Link
              href="/invitacion-web"
              className={`py-2 text-sm ${textColor} transition-opacity hover:opacity-60`}
            >
              Invitación Web
            </Link>
          </nav>

          {/* Botón */}

          <Link
            href="#contacto"
            className="flex min-w-[175px] items-center justify-center gap-3 rounded-full border border-[#42170d] px-[18px] py-3 text-[13px] text-[#42170d] transition-colors duration-300 hover:bg-[#42170d] hover:text-[#f8f5e9]"
          >
            Cotizá tu invitación
            <span className="text-lg leading-none">→</span>
          </Link>
        </div>
      </header>
    </>
  );
}
