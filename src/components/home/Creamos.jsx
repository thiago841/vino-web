export default function Creamos() {
  return (
    <section className="relative bg-celeste font-coolvetica font-regular text-bordo flex flex-col">
      <div className="flex py-3 border border-bordo items-center justify-around lg:text-lg">
        <p>VINO ESTUDIO</p>
        <p>ESTD 2023</p>
        <p>ARG</p>
      </div>
      <div className="flex flex-col py-10 justify-center items-center gap-13 lg:py-30 lg:gap-30">
        <div className="relative">
          <h2 className="text-4xl lg:text-8xl w-50 pl-3 leading-8 lg:leading-17 lg:w-130">
            ¿Creamos <br /> algo juntos?
          </h2>
          <p className="font-manuscrita text-2xl lg:text-4xl -rotate-4 absolute left-25 -bottom-8 lg:left-80 lg:-bottom-12">
            escribinos
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-sm lg:text-2xl text-celeste font-coolvetica gap-3 px-1 lg:gap-6">
          <a
            href="https://www.instagram.com/vinoestudio?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordo px-2 rounded-sm w-full text-center hover:bg-celeste hover:text-bordo transition-colors duration-300 border border-bordo"
          >
            @vinoestudio
          </a>
          <a
            href="mailto:holavinoestudio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordo px-2 rounded-sm hover:bg-celeste hover:text-bordo transition-colors duration-300 border border-bordo"
          >
            holavinoestudio@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
