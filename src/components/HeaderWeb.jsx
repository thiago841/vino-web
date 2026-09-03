import { useState } from "react";
import { Link } from "wouter";

export default function HeaderWeb({
  bgColor = "bg-white",
  textColor = "text-black",
  btnColor = "bg-black",
  borderColor = "border-black",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  // Extraemos el color del prop (ej: "bg-bordo" → "bordo", "bg-black" → "black")
  const hoverBgColor = btnColor.replace(/^bg-/, "");
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
            className={`flex items-center gap-[18px] border-b ${borderColor} px-6 py-5 text-[15px] ${textColor}`}
          >
            Invitación Web
          </Link>
          <a
            href="wa.me/message/DMF23YLR6NINL1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={`flex items-center gap-[18px] px-6 py-5 text-[15px] ${textColor}`}
          >
            Contactanos
          </a>
        </nav>

        {/* =========================
          DESKTOP
      ========================== */}

        <div
          className={`font-coolvetica mx-auto hidden min-h-[76px] items-center border ${borderColor} ${bgColor} px-15 lg:flex`}
        >
          {/* Logo */}

          <Link
            href="/"
            className={` flex min-w-[230px] items-center gap-[15px] text-[17px] font-bold ${textColor} hover:scale-102 hover:-rotate-1 transition-all duration-300`}
          >
            @VINO ESTUDIO
          </Link>

          {/* Links */}

          <nav className="flex flex-1 items-center justify-center gap-[38px]">
            <Link
              href="/"
              className={`relative py-2 text-md ${textColor} after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Inicio
            </Link>

            <Link
              href="/branding"
              className={`relative py-2 text-md ${textColor} after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Branding para bodas
            </Link>

            <Link
              href="/foto-video"
              className={`relative py-2 text-md ${textColor} after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Fotos y Videos
            </Link>

            <Link
              href="/invitacion-web"
              className={`relative py-2 text-md ${textColor} after:absolute after:bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Invitación Web
            </Link>
          </nav>

          {/* Botón */}

          <a
            href="wa.me/message/DMF23YLR6NINL1"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={
              btnHovered
                ? {
                    backgroundColor: `var(--color-${hoverBgColor}, ${hoverBgColor})`,
                    color: "white",
                    borderColor: "transparent",
                  }
                : {}
            }
            className={`flex min-w-[175px] text-md items-center justify-center gap-3 rounded-full border ${borderColor} px-[18px] py-3 ${textColor} transition-colors duration-300`}
          >
            Contactanos
            <span className="text-lg leading-none">→</span>
          </a>
        </div>
      </header>
    </>
  );
}
