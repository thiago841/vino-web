import { Link } from "wouter";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="flex flex-col w-full text-5xl leading-9 bg-celeste font-coolvetica font-regular text-bordo justify-center items-center"
    >
      <div className="flex flex-col h-[50vh] items-center justify-between border border-bordo w-full">
        <h2 className="pt-30">
          BRANDING <br />
          PARA <br />
          BODAS
        </h2>
        <Link
          href="/branding"
          className="border border-bordo w-full text-lg text-center py-2"
        >
          VER MAS
        </Link>
      </div>
      <div className="flex flex-col h-[50vh] items-center justify-between border border-bordo w-full">
        <h2 className="pt-30">
          CONTENIDO <br /> PARA <br /> MARCAS
        </h2>
        <Link
          href="/foto-video"
          className="border border-bordo w-full text-lg text-center py-2"
        >
          VER MAS
        </Link>
      </div>
      <div className="flex flex-col h-[50vh] items-center justify-between border border-bordo w-full">
        <h2 className="pt-40">
          INVITACIONES <br />
          WEB
        </h2>
        <Link
          href="/invitacion-web"
          className="border border-bordo w-full text-lg text-center py-2"
        >
          VER MAS
        </Link>
      </div>
    </section>
  );
}
