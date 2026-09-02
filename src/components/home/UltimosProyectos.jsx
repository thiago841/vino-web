import webVino06 from "../../assets/img/web-vino-06.png";
import webVino07 from "../../assets/img/web-vino-07.png";
import webVino08 from "../../assets/img/web-vino-08.png";
import gifBaufel from "../../assets/img/gif-baufel.gif";
import UP01 from "../../assets/img/UP-01.png";
import UP02 from "../../assets/img/UP-02.png";
import gifRafart from "../../assets/img/gif-rafart.gif";
import UP03 from "../../assets/img/UP-03.png";
import UP09 from "../../assets/img/UP-09.png";
import UP8 from "../../assets/img/UP-8.gif";
import UP10 from "../../assets/img/UP-10.png";
import UP11 from "../../assets/img/UP-11.png";
import UP14 from "../../assets/img/UP-14.png";
import elem2 from "../../assets/img/elem-2.png";

export default function UltimosProyectos() {
  const carouselItems = [
    { src: webVino06, width: 270 },
    { src: webVino07, width: 270 },
    { src: webVino08, width: 270 },
    { src: gifBaufel, width: 270 },
    { src: UP01, width: 270 },
    { src: UP02, width: 270 },
    { src: gifRafart, width: 270 },
    { src: UP03, width: 270 },
    { src: UP09, width: 270 },
    { src: UP8, width: 270 },
    { src: UP10, width: 270 },
    { src: UP11, width: 270 },
    { src: UP14, width: 270 },
  ];
  return (
    <section
      id="proyectos"
      className="relative bg-blanco flex flex-col items-center w-full gap-20 py-20"
    >
      <h2 className="z-10 text-6xl font-coolvetica font-regular text-bordo leading-12">
        ÚLTIMOS <br /> PROYECTOS
      </h2>
      <img src={elem2} alt="" className="absolute -top-10 right-7 w-35" />
      <div className="overflow-hidden">
        <div className="flex gap-5 logos-slide h-full" id="slider">
          {carouselItems.map((item, idx) => (
            <img
              key={`slide1-${idx}`}
              src={item.src}
              alt=""
              width={item.width}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
