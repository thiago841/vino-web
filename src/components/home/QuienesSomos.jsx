import virNoro from "../../assets/img/vir-noro.png";

export default function QuienesSomos() {
  return (
    <section
      id="quienesSomos"
      className="relative flex flex-col bg-blanco text-bordo font-coolvetica pt-10 pb-25 gap-5 md:gap-15 "
    >
      <div className="flex whitespace-nowrap overflow-hidden gap-8 h-13 md:h-20">
        {Array.from({ length: 4 }).map((_, idx) => (
          <h2
            key={idx}
            className="text-5xl md:text-7xl font-regular titulo-slide"
          >
            QUIENES SOMOS
          </h2>
        ))}
      </div>
      <div className="flex self-end md:self-center md:mb-10">
        <img
          src={virNoro}
          alt="Virginia y Lautaro - Fundadores de Vino Estudio"
          className="absolute w-35 lg:w-45 xl:w-60 -rotate-3 -top-5 left-5 md:top-[-15%] md:left-[10%] 2xl:left-[20%] "
        />
        <article className="flex flex-col font-regular w-40 text-[10px] md:text-base md:w-70 lg:text-lg lg:w-96 text-justify [text-align-last:justify] mr-5 md:mr-10 gap-3 md:gap-5">
          <p>
            Somos Virginia y Lautaro, y Vino Estudio nace de nuestras ganas de
            crear, de trabajar juntos y de convertir ideas en algo que se pueda
            ver, sentir y disfrutar.
          </p>
          <p>
            Nos dedicamos al diseño, el branding y el contenido audiovisual,
            trabajando con marcas, proyectos y personas que buscan hacer las
            cosas de una manera diferente.
          </p>
          <p>
            Nos gusta conocer cada historia, entender qué hay detrás de cada
            proyecto y encontrar la forma de llevarlo a lo visual sin perder su
            esencia.
          </p>
        </article>
      </div>
    </section>
  );
}
