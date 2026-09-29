import imgBrandingHero from "../assets/img-branding/imgBrandingHero.webp";
import branding08 from "../assets/img-branding/branding-08.webp";
import branding09 from "../assets/img-branding/branding-09.webp";
import branding10 from "../assets/img-branding/branding-10.webp";
import elemBranding01 from "../assets/img-branding/elemBranding01.png";
import elemBranding02 from "../assets/img-branding/elemBranding02.png";
import elemBranding03 from "../assets/img-branding/elemBranding03.png";
import elemBranding04 from "../assets/img-branding/elemBranding04.png";
import HeaderWeb from "../components/HeaderWeb";
import { Helmet } from "react-helmet-async";

export default function Branding() {
  return (
    <>
      <Helmet>
        <title>Branding para Bodas | Vino Estudio</title>
        <meta
          name="description"
          content="Diseñamos la identidad visual completa de tu boda: paleta de colores, tipografías, papelería, save the date animado e invitación web. Vino Estudio, Argentina."
        />
        <meta property="og:title" content="Branding para Bodas | Vino Estudio" />
        <meta property="og:description" content="Identidad visual integral para tu casamiento. Save the date, invitación web, papelería y más. Vino Estudio." />
        <link rel="canonical" href="https://vinoestudio.com/branding" />
      </Helmet>
      <HeaderWeb />
      <main className="bg-gris font-coolvetica overflow-hidden">
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fadeUp 0.7s ease both; }
          .fade-up-delay-1 { animation: fadeUp 0.7s 0.15s ease both; }
          .fade-up-delay-2 { animation: fadeUp 0.7s 0.3s ease both; }
        `}</style>
        <section className="relative h-[75vh] lg:h-[95vh] overflow-hidden">
          <img
            src={imgBrandingHero}
            alt="Branding para bodas - Vino Estudio Argentina"
            className="relative h-full sm:w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <h1 className="fade-up absolute top-15 lg:top-30 left-10 lg:left-20 font-coolvetica font-extralight text-white text-5xl lg:text-7xl leading-10 lg:leading-15">
            BRANDING <br />
            PARA <span className="font-book">BODAS</span>
          </h1>
        </section>
        <section className="flex flex-col py-20 lg:py-40 items-center justify-center ">
          <article className="flex flex-col gap-5 lg:gap-10 text-justify font-regular pb-20 lg:pb-40 px-15 [text-align-last:justify] lg:text-3xl max-w-4xl">
            <p>
              Diseñar un casamiento es mucho más que elegir colores lindos: es
              construir una identidad que atraviese cada momento del evento. En
              Vino Estudio ofrecemos un servicio de branding integral pensado
              para parejas que quieren que su boda tenga una impronta visual
              clara y coherente.
            </p>
            <p>
              Trabajamos desde la conceptualización de la identidad hasta su
              aplicación práctica en cada pieza: el save the date que da la
              primera impresión, una invitación web funcional y a medida con
              toda la información necesaria para los invitados, papelería para
              el día del evento y lineamientos para la ambientación general.
            </p>
          </article>
          <div className="flex h-[45vh] lg:h-[50vh] w-full">
            <div className="w-1/2  relative lg:h-full ">
              <img
                src={elemBranding01}
                alt="Elemento decorativo - identidad visual boda"
                className="w-20 lg:w-30 absolute z-10 top-0 left-7 lg:left-[60%] lg:top-[-10%]"
              />
              <img
                src={branding08}
                alt="Diseño de papelería para casamiento - Vino Estudio"
                className="w-40 lg:w-70 absolute bottom-0 right-0 lg:right-[7%]"
              />
            </div>
            <div className="relative w-1/2 lg:h-full">
              <img
                src={elemBranding02}
                alt="Elemento decorativo branding boda"
                className="w-20 lg:w-30 absolute z-10"
              />
              <img
                src={branding09}
                alt="Identidad visual para casamiento - Vino Estudio"
                className="w-40 lg:w-60 absolute top-0 right-0 lg:left-[7%]"
              />
            </div>
          </div>
          <div className="flex h-[45vh] lg:h-[50vh]">
            <div className="flex flex-col items-center justify-center lg:h-full w-[50vw] relative px-5">
              <img
                src={elemBranding04}
                alt="Elemento decorativo diseño boda"
                className="w-20 lg:w-30 absolute z-50 -top-7 right-7"
              />
              <p className="text-justify [text-align-last:justify] self-end pt-6 lg:text-2xl max-w-sm">
                Acompañamos todo el proceso con un enfoque profesional y
                cercano, para que la pareja pueda disfrutar de los preparativos
                sabiendo que cada detalle visual está resuelto.
              </p>
            </div>
            <div className="flex flex-col justify-center relative lg:h-full w-[50vw]">
              <img
                src={elemBranding03}
                alt="Elemento gráfico decorativo - branding boda"
                className="w-20 lg:w-30 absolute top-0 right-3 z-10 lg:left-[20%]"
              />
              <img src={branding10} alt="Diseño gráfico boda - Vino Estudio" className="w-45 lg:w-60 absolute" />
            </div>
          </div>
        </section>
        <section className="flex flex-col pb-20 gap-3 md:flex-row md:gap-0 md:px-20">
          <div className="fade-up flex flex-col items-center justify-center gap-10 bg-white h-[75vh] rounded-tr-[13rem] py-15 px-10">
            <h3 className=" text-4xl self-start font-regular leading-8 lg:text-5xl lg:leading-10">
              SAVE THE DATE <br /> + INVITACIÓN
            </h3>
            <p className="text-lg text-justify [text-align-last:justify] lg:text-2xl lg:pr-15">
              Save the date animado para dar el primer anuncio, y una invitación
              web a medida con toda la info para tus invitados: fecha,
              ubicación, dress code, confirmación de asistencia (RSVP) y lista
              de regalos. Pensado para parejas que ya tienen su estética
              definida y necesitan la parte digital resuelta.
            </p>
            <a
              href="https://wa.me/message/DMF23YLR6NINL1"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-white bg-black rounded-full px-3 lg:text-xl transition-all duration-300 hover:bg-white hover:text-black hover:ring-1 hover:ring-black hover:scale-105"
            >
              más info
            </a>
          </div>
          <div className="fade-up-delay-1 flex flex-col items-center justify-center gap-10 bg-white h-[75vh] rounded-tr-[13rem] md:rounded-tr-none md:rounded-bl-[13rem] py-15 px-10">
            <h3 className=" text-4xl self-start font-regular leading-8 lg:text-5xl lg:leading-10">
              BRANDING KIT <br /> Y DISEÑO INTEGRAL
            </h3>
            <p className="text-lg text-justify [text-align-last:justify] lg:text-2xl lg:pr-10">
              Desarrollo completo de la identidad visual de tu casamiento:
              paleta de colores, tipografías, logo o monograma, y su aplicación
              en todas las piezas gráficas del evento (papelería, señalética,
              menú, cartelería y ambientación). Todo con una misma estética,
              coherente de punta a punta.
            </p>
            <a
              href="https://wa.me/message/DMF23YLR6NINL1"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-white bg-black rounded-full px-3 lg:text-xl transition-all duration-300 hover:bg-white hover:text-black hover:ring-1 hover:ring-black hover:scale-105"
            >
              más info
            </a>
          </div>
        </section>
        <section className="bg-black flex flex-col py-20 gap-8 font-coolvetica items-center justify-center text-white">
          <h2 className="fade-up text-5xl font-regular text-justify px-10 lg:text-9xl">
            PACK FULL
          </h2>
          <div className="fade-up-delay-1 flex flex-col items-center justify-center gap-3 lg:gap-20 px-10 lg:flex-row lg:w-1/2">
            <p className="text-justify [text-align-last:justify] lg:text-3xl lg:w-1/2">
              La experiencia integral: diseñamos la identidad visual de tu boda
              y la aplicamos a todo, desde la papelería hasta el save the date y
              la invitación web. Un solo estudio, una sola estética, en cada
              pieza que ven vos y tus invitados.
            </p>
            <a
              href="https://wa.me/message/DMF23YLR6NINL1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-white rounded-full px-3 font-regular mt-5 lg:self-end lg:text-xl transition-all duration-300 hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white hover:scale-105"
            >
              más info
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
