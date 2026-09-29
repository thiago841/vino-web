import elem1 from "../../assets/img/elem-1.png";

export default function Vision() {
  return (
    <section className="flex relative items-center justify-center bg-bordo text-blanco font-coolvetica py-50 w-full">
      <img
        src={elem1}
        alt="Elemento decorativo - Vino Estudio"
        className="absolute w-50 left-10 md:w-80 md:left-35 xl:left-100 2xl:left-150"
      />
      <h2 className="w-65 text-3xl md:text-5xl md:w-100 text-justify z-10 font-regular [text-align-last:justify]">
        NO BUSCAMOS HACER ALGO QUE SIMPLEMENTE SE VEA BIEN. BUSCAMOS CREAR ALGO
        QUE SE SIENTA PROPIO.
      </h2>
    </section>
  );
}
