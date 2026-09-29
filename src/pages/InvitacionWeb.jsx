import HeaderWeb from "../components/HeaderWeb";
import { Helmet } from "react-helmet-async";
import mockupWeb from "../assets/img-invitacionWeb/mockup-web.png";
import imgBgGris from "../assets/img-invitacionWeb/img-bgGris.webp";
import logoBotella from "../assets/img-invitacionWeb/logo-botella.png";

export default function InvitacionWeb() {
  return (
    <>
      <Helmet>
        <title>Invitaciones Web para Bodas | Vino Estudio</title>
        <meta
          name="description"
          content="Invitaciones digitales personalizadas con RSVP, Google Maps, galería y más. Diseñadas a medida para tu casamiento. Vino Estudio, Argentina."
        />
        <meta
          property="og:title"
          content="Invitaciones Web para Bodas | Vino Estudio"
        />
        <meta
          property="og:description"
          content="Tu boda merece una invitación digital única. Diseño a medida con RSVP, ubicación y más. Vino Estudio."
        />
        <link
          rel="canonical"
          href="https://vinoestudio.com.ar/invitacion-web"
        />
      </Helmet>
      <HeaderWeb
        bgColor="bg-blanco"
        textColor="text-bordo"
        btnColor="bg-bordo"
        borderColor="border-bordo"
      />
      <main className="font-coolvetica text-[#42170d] bg-blanco overflow-hidden">
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .fade-up { animation: fadeUp 0.7s ease both; }
          .fade-up-delay-1 { animation: fadeUp 0.7s 0.15s ease both; }
          .fade-up-delay-2 { animation: fadeUp 0.7s 0.3s ease both; }
        `}</style>
        <section className="fade-up flex flex-col gap-10 py-15 lg:py-30 lg:flex-row lg:items-center lg:px-20 lg:gap-20">
          <div className="flex flex-col gap-10 lg:w-1/2">
            <h1 className="text-5xl font-regular leading-10 px-5 lg:text-8xl lg:leading-18 lg:px-0">
              INVITACIONES <br />
              WEB
            </h1>
            <div className="flex flex-col gap-5 text-justify px-10 leading-4 lg:px-0 lg:text-2xl lg:leading-7">
              <p>
                Una invitación digital{" "}
                <span className="font-bold">CREADA A MEDIDA</span> para
                transmitir la emoción de su gran día, comunicando cada detalle
                de la celebración de forma elegante, práctica e interactiva.
              </p>
              <p>
                Diseñada para que sus invitados sientan desde el primer momento
                la esencia de la boda, reuniendo toda la información en un solo
                lugar con una experiencia visual cuidada y profundamente
                alineada con el estilo y la historia de los novios.
              </p>
            </div>
          </div>
          <img
            src={mockupWeb}
            alt="Mockup invitación web para bodas - Vino Estudio"
            className="w-full h-auto lg:w-1/2"
          />
        </section>

        <section className="flex flex-col gap-5 px-10 py-15 text-justify bg-bordo text-blanco lg:py-30 lg:px-20 lg:gap-10">
          <h2 className="text-xl font-bold lg:text-4xl">
            Servicios incluidos:
          </h2>
          <div className="flex flex-col font-light gap-2 lg:grid lg:grid-cols-2 lg:gap-x-15 lg:gap-y-4 lg:text-xl">
            <p>
              • Diseño personalizado de la invitación web, adaptado a la
              identidad del evento.
            </p>
            <p>
              • Maquetado completo con diseño responsive (optimizado para
              celulares y computadoras).
            </p>
            <p>
              • Animaciones y transiciones visuales para una experiencia más
              dinámica.
            </p>
            <p>• Configuración y publicación del sitio en GitHub Pages.</p>
            <p>
              • Enlace web listo para compartir por WhatsApp, redes sociales o
              correo electrónico.
            </p>
            <p>• Integración de formulario de confirmación de asistencia.</p>
            <p>• Optimización para una carga rápida y una navegación fluida.</p>
            <p>• Diseño de íconos y recursos gráficos</p>
            <p>
              • Botones y links interactivos para: Confirmación de asistencia
              (RSVP). Ubicación del evento mediante Google Maps. Hoteles
              sugeridos. Lista de regalos (si aplica). Contacto por WhatsApp (si
              aplica).
            </p>
          </div>
          <a
            href="https://wa.me/message/DMF23YLR6NINL1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-end text-bordo text-lg mt-5 bg-blanco rounded-full px-3 font-regular lg:text-xl transition-all duration-300 hover:bg-bordo hover:border hover:border-blanco hover:text-blanco hover:scale-105"
          >
            más info
          </a>
        </section>

        <section className="flex relative items-center justify-center">
          <img
            src={imgBgGris}
            alt="Diseño de invitación web para bodas - Vino Estudio"
            className="w-full h-[70vh] object-cover lg:h-[85vh]"
          />
          <p className="absolute text-4xl text-justify font-bold text-bordo px-15 lg:text-7xl lg:px-40 lg:leading-20">
            CADA BODA ES ÚNICA Y SU WEB TAMBIÉN DEBERÍA SERLO. EN VINO ESTUDIO
            DISEÑAMOS EL ESPACIO DIGITAL DE TU BODA.
          </p>
        </section>

        <section className="fade-up-delay-1 flex flex-col gap-8 py-15 px-10 text-justify font-regular justify-center items-center lg:py-30 lg:px-20 lg:gap-15">
          <h2 className="text-3xl font-bold lg:text-5xl lg:self-start">
            ¿Por qué elegir una invitación web?
          </h2>
          <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-4 lg:text-xl xl:text-2xl lg:w-full">
            <p>• Centraliza toda la información del evento en un solo lugar.</p>
            <p>• Facilita la confirmación de asistencia.</p>
            <p>
              • Evita reimprimir invitaciones ante cambios de último momento.
            </p>
            <p>• Se comparte fácilmente por WhatsApp o correo.</p>
            <p>
              • Brinda una experiencia moderna, elegante e interactiva desde el
              primer contacto con los invitados.
            </p>
            <p>• Reduce el uso de papel sin resignar diseño.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-3 lg:mt-10">
            <img
              src={logoBotella}
              alt="Logo botella Vino Estudio"
              className="w-7 lg:w-12"
            />
            <p className="font-manuscrita text-3xl -rotate-5 lg:text-5xl">
              gracias
            </p>
          </div>
        </section>

        <footer className="flex items-center font-bold justify-around pb-10 lg:text-xl lg:pb-15">
          <p>VINO ESTUDIO</p>
          <p>ARG 2026</p>
        </footer>
      </main>
    </>
  );
}
