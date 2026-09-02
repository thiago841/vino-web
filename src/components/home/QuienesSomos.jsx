import virNoro from "../../assets/img/vir-noro.png";

export default function QuienesSomos() {
  return (
    <section
      id="quienesSomos"
      className="relative flex flex-col bg-blanco text-bordo font-coolvetica pt-10 pb-25 gap-5"
    >
      <div className="flex whitespace-nowrap overflow-hidden gap-8 h-13 ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <h2 key={idx} className="text-5xl font-regular logos-slide">
            QUIENES SOMOS
          </h2>
        ))}
      </div>
      <img
        src={virNoro}
        alt=""
        className="absolute w-35 -rotate-3 -top-5 left-5"
      />
      <article className="flex flex-col font-regular w-40 text-[10px] text-justify self-end mr-10 gap-2">
        <p>
          Somos Virginia y Lautaro, y Vino Estudio nace de nuestras ganas de
          crear, de trabajar juntos y de convertir ideas en algo que se pueda
          ver, sentir y disfrutar.
        </p>
        <p>
          Nos dedicamos al diseño, el branding y el contenido audiovisual,
          trabajando con marcas, proyectos y personas que buscan hacer las cosas
          de una manera diferente.
        </p>
        <p>
          Nos gusta conocer cada historia, entender qué hay detrás de cada
          proyecto y encontrar la forma de llevarlo a lo visual sin perder su
          esencia.
        </p>
      </article>
    </section>
  );
}
