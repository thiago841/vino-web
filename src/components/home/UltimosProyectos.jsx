import webVino06 from "../../assets/img/web-vino-06.webp";
import webVino07 from "../../assets/img/web-vino-07.webp";
import webVino08 from "../../assets/img/web-vino-08.webp";
import gifBaufel from "../../assets/img/gif-baufel.gif";
import UP01 from "../../assets/img/UP-01.webp";
import gifRafart from "../../assets/img/gif-rafart.gif";
import UP03 from "../../assets/img/UP-03.webp";
import UP09 from "../../assets/img/UP-09.webp";
import UP8 from "../../assets/img/UP-8.gif";
import UP10 from "../../assets/img/UP-10.webp";
import UP11 from "../../assets/img/UP-11.webp";
import UP14 from "../../assets/img/UP-14.webp";
import elem2 from "../../assets/img/elem-2.png";

export default function UltimosProyectos() {
  const carouselItems = [
    { src: webVino06, width: 270, alt: "Proyecto Vino Estudio - diseño para marcas" },
    { src: webVino07, width: 270, alt: "Proyecto Vino Estudio - contenido visual" },
    { src: webVino08, width: 270, alt: "Proyecto Vino Estudio - branding" },
    { src: gifBaufel, width: 270, alt: "Proyecto Baufel - contenido audiovisual Vino Estudio" },
    { src: UP01, width: 270, alt: "Proyecto UP01 - foto y video Vino Estudio" },
    { src: gifRafart, width: 270, alt: "Proyecto Rafart - contenido para marcas Vino Estudio" },
    { src: UP03, width: 270, alt: "Proyecto UP03 - diseño visual Vino Estudio" },
    { src: UP09, width: 270, alt: "Proyecto UP09 - foto para marcas Vino Estudio" },
    { src: UP8, width: 270, alt: "Proyecto UP - video para marcas Vino Estudio" },
    { src: UP10, width: 270, alt: "Proyecto UP10 - contenido visual Vino Estudio" },
    { src: UP11, width: 270, alt: "Proyecto UP11 - branding para marcas Vino Estudio" },
    { src: UP14, width: 270, alt: "Proyecto UP14 - diseño Vino Estudio" },
  ];
  return (
    <section
      id="proyectos"
      className="relative bg-blanco flex flex-col items-center w-full gap-20 lg:gap-35 py-20 lg:py-45"
    >
      <h2 className="z-10 text-6xl lg:text-8xl font-coolvetica font-regular text-bordo leading-12 md:leading-19">
        ÚLTIMOS <br /> PROYECTOS
      </h2>
      <img
        src={elem2}
        alt="Elemento decorativo - Vino Estudio"
        className="absolute -top-10 right-7 w-35 md:w-55 lg:w-70 md:-top-20 md:right-30 lg:right-150"
      />
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-5 md:gap-15 logos-slide"
          id="slider"
          style={{ width: "max-content" }}
        >
          {carouselItems.map((item, idx) => (
            <img
              key={`slide1-${idx}`}
              src={item.src}
              alt={item.alt}
              width={item.width}
              className="object-cover flex-shrink-0 lg:w-100"
            />
          ))}
          {/* Duplicado para loop infinito sin salto */}
          {carouselItems.map((item, idx) => (
            <img
              key={`slide2-${idx}`}
              src={item.src}
              alt={item.alt}
              width={item.width}
              className="object-cover flex-shrink-0 lg:w-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
