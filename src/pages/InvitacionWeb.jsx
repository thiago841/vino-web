import HeaderWeb from "../components/HeaderWeb";
import mockupWeb from "../assets/img-invitacionWeb/mockup-web.png";
import imgBgGris from "../assets/img-invitacionWeb/img-bgGris.png";
import logoBotella from "../assets/img-invitacionWeb/logo-botella.png";
import { Link } from "wouter";

export default function InvitacionWeb() {
  return (
    <>
      <HeaderWeb
        bgColor="bg-blanco"
        textColor="text-bordo"
        btnColor="bg-bordo"
        borderColor="border-bordo"
      />
      <main className="font-coolvetica text-[#42170d] bg-blanco">
        <section className="flex flex-col gap-10 py-15">
          <h1 className="text-5xl font-regular leading-10 px-5 ">
            INVITACIONES <br />
            WEB
          </h1>
          <img src={mockupWeb} alt="" className="w-full h-auto" />
          <div className="flex flex-col gap-5 text-justify px-10 leading-4">
            <p>
              Una invitación digital{" "}
              <span className="font-bold">CREADA A MEDIDA</span> para transmitir
              la emoción de su gran día, comunicando cada detalle de la
              celebración de forma elegante, práctica e interactiva.
            </p>
            <p>
              Diseñada para que sus invitados sientan desde el primer momento la
              esencia de la boda, reuniendo toda la información en un solo lugar
              con una experiencia visual cuidada y profundamente alineada con el
              estilo y la historia de los novios.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-5 px-10 py-15 text-justify bg-bordo text-blanco">
          <h2 className="text-xl font-bold">Servicios incluidos:</h2>
          <div className="flex flex-col font-light gap-2">
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
            <p>
              • Botones y links interactivos para: Confirmación de asistencia
              (RSVP). Ubicación del evento mediante Google Maps. Hoteles
              sugeridos. Lista de regalos (si aplica). Contacto por WhatsApp (si
              aplica).
            </p>
            <p>• Integración de formulario de confirmación de asistencia.</p>
            <p>• Optimización para una carga rápida y una navegación fluida.</p>
            <p>• Diseño de íconos y recursos gráficos</p>
          </div>
          <Linkk
            href="https://wa.me/message/DMF23YLR6NINL1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-end text-bordo text-lg mt-5 bg-blanco rounded-full px-3 font-regular "
          >
            más info
          </Linkk>
        </section>

        <section className="flex relative items-center justify-center">
          <img
            src={imgBgGris}
            alt=""
            className="w-full h-[70vh] object-cover"
          />
          <p className="absolute text-4xl text-justify font-bold text-bordo px-15">
            CADA BODA ES ÚNICA Y SU WEB TAMBIÉN DEBERÍA SERLO. EN VINO ESTUDIO
            DISEÑAMOS EL ESPACIO DIGITAL DE TU BODA.
          </p>
        </section>

        <section className="flex flex-col gap-8 py-15 px-10 text-justify font-regular justify-center items-center">
          <h2 className="text-3xl font-bold">
            ¿Por qué elegir una invitación web?
          </h2>
          <div className="flex flex-col gap-2">
            <p>• Centraliza toda la información del evento en un solo lugar.</p>
            <p>
              • Evita reimprimir invitaciones ante cambios de último momento.
            </p>
            <p>• Facilita la confirmación de asistencia.</p>
            <p>• Se comparte fácilmente por WhatsApp o correo.</p>
            <p>• Reduce el uso de papel sin resignar diseño.</p>
            <p>
              • Brinda una experiencia moderna, elegante e interactiva desde el
              primer contacto con los invitados.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-3">
            <img src={logoBotella} alt="" className="w-7" />
            <p className="font-manuscrita text-3xl -rotate-5">gracias</p>
          </div>
        </section>

        <footer className="flex items-center font-bold justify-around pb-10">
          <p>VINO ESTUDIO</p>
          <p>ARG 2026</p>
        </footer>
      </main>
    </>
  );
}
