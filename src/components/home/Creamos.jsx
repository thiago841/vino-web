export default function Creamos() {
  return (
    <section className="relative bg-celeste font-coolvetica font-regular text-bordo flex flex-col gap-3 pb-10">
      <div className="flex py-3 border border-bordo items-center justify-around">
        <p>VINO ESTUDIO</p>
        <p>ESTD 2023</p>
        <p>ARG</p>
      </div>

      <h2 className="text-4xl w-50 ml-5">¿Creamos algo juntos?</h2>
      <p className="font-manuscrita text-2xl -rotate-4 absolute left-35 bottom-3">
        escribinos
      </p>
      <div className="absolute w-30 h-40 bg-white rotate-5 -bottom-15 right-5">
        <div className="flex flex-col items-center justify-center text-sm font-manuscrita h-full">
          <p>@vinoestudio</p>
          <p className="text-[9px]">holavinoestudio@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
