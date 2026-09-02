import imgBrandingHero from "../assets/img-branding/imgBrandingHero.png";
import branding08 from "../assets/img-branding/branding-08.png";
import branding09 from "../assets/img-branding/branding-09.png";
import branding10 from "../assets/img-branding/branding-10.png";
import elemBranding01 from "../assets/img-branding/elemBranding01.png";
import elemBranding02 from "../assets/img-branding/elemBranding02.png";
import elemBranding03 from "../assets/img-branding/elemBranding03.png";
import elemBranding04 from "../assets/img-branding/elemBranding04.png";
import HeaderWeb from "../components/HeaderWeb";
import { Link } from "wouter";

export default function Branding() {
  return (
    <>
      <HeaderWeb />
      <main className="bg-gris font-coolvetica">
        <section className="relative h-[75vh]">
          <img
            src={imgBrandingHero}
            alt=""
            className="relative h-full object-cover"
          />
          <h1 className="absolute top-15 left-10 font-coolvetica font-extralight text-white text-5xl leading-10">
            BRANDING <br />
            PARA <span className="font-book">BODAS</span>
          </h1>
        </section>
        <section className="flex flex-col py-20">
          <article className="flex flex-col gap-5 text-justify font-regular pb-20 px-15">
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
          <div className="flex h-[45vh]">
            <div className="w-[50vw] relative">
              <img
                src={elemBranding01}
                alt=""
                className="w-20 absolute z-10 top-0 left-7"
              />
              <img
                src={branding08}
                alt=""
                className="w-40 absolute bottom-0 right-0"
              />
            </div>
            <div className="relative w-[50vw]">
              <img src={elemBranding02} alt="" className="w-20 absolute z-10" />
              <img
                src={branding09}
                alt=""
                className="w-40 absolute top-0 right-0"
              />
            </div>
          </div>
          <div className="flex h-[45vh]">
            <div className="flex flex-col items-center justify-center w-[50vw] relative px-5">
              <img
                src={elemBranding04}
                alt=""
                className="w-20 absolute z-10 -top-7 right-7"
              />
              <p className="text-justify">
                Acompañamos todo el proceso con un enfoque profesional y
                cercano, para que la pareja pueda disfrutar de los preparativos
                sabiendo que cada detalle visual está resuelto.
              </p>
            </div>
            <div className="flex flex-col justify-center relative w-[50vw]">
              <img
                src={elemBranding03}
                alt=""
                className="w-20 absolute top-0 right-3 z-10"
              />
              <img src={branding10} alt="" className="w-45 absolute" />
            </div>
          </div>
        </section>
        <section className="flex flex-col pb-20 gap-3">
          <div className="flex flex-col items-center justify-center gap-10 bg-white h-[75vh] rounded-tr-[13rem] py-15 px-10">
            <h3 className=" text-4xl self-start font-regular leading-8">
              SAVE THE DATE <br /> + INVITACION
            </h3>
            <p className="text-lg text-justify">
              Save the date animado para dar el primer anuncio, y una invitación
              web a medida con toda la info para tus invitados: fecha,
              ubicación, dress code, confirmación de asistencia (RSVP) y lista
              de regalos. Pensado para parejas que ya tienen su estética
              definida y necesitan la parte digital resuelta.
            </p>
            <Link
              href="https://wa.me/message/DMF23YLR6NINL1"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-white bg-black rounded-full px-3 "
            >
              más info
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 bg-white h-[75vh] rounded-tr-[13rem] py-15 px-10">
            <h3 className=" text-4xl self-start font-regular leading-8">
              BRANDING KIT <br /> Y DISENO INTEGRAL
            </h3>
            <p className="text-lg text-justify">
              Desarrollo completo de la identidad visual de tu casamiento:
              paleta de colores, tipografías, logo o monograma, y su aplicación
              en todas las piezas gráficas del evento (papelería, señalética,
              menú, cartelería y ambientación). Todo con una misma estética,
              coherente de punta a punta.
            </p>
            <Link
              href="https://wa.me/message/DMF23YLR6NINL1"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-white bg-black rounded-full px-3 "
            >
              más info
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
