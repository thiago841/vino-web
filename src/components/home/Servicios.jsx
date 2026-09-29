import { Link } from "wouter";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="flex flex-col md:flex-row w-full text-5xl leading-9 bg-celeste font-coolvetica font-regular text-bordo md:border md:border-bordo justify-center items-center"
    >
      <div className="flex flex-col h-[50vh] items-center justify-between border border-bordo md:border-none w-full">
        <div className="h-full flex justify-center items-center">
          <h2>
            BRANDING <br />
            PARA <br />
            BODAS
          </h2>
        </div>
        <Link
          href="/branding"
          className="border-t border-bordo w-full text-lg text-center py-2 hover:bg-bordo hover:text-celeste transition-colors duration-300"
        >
          VER MÁS
        </Link>
      </div>
      <div className="flex flex-col h-[50vh] items-center justify-between border-l border-r border-bordo w-full">
        <div className="h-full flex justify-center items-center">
          <h2>
            CONTENIDO <br />
            PARA <br />
            MARCAS
          </h2>
        </div>
        <Link
          href="/foto-video"
          className="border-t border-bordo w-full text-lg text-center py-2 hover:bg-bordo hover:text-celeste transition-colors duration-300"
        >
          VER MÁS
        </Link>
      </div>
      <div className="flex flex-col h-[50vh] items-center justify-between border border-bordo md:border-none w-full">
        <div className="h-full flex justify-center items-center">
          <h2>
            INVITACIONES <br />
            WEB
          </h2>
        </div>
        <Link
          href="/invitacion-web"
          className="border-t border-bordo w-full text-lg text-center py-2 hover:bg-bordo hover:text-celeste transition-colors duration-300"
        >
          VER MÁS
        </Link>
      </div>
    </section>
  );
}
