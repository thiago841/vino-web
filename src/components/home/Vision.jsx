import elem1 from "../../assets/img/elem-1.png";

export default function Vision() {
  return (
    <section className="flex relative items-center justify-center bg-bordo text-blanco font-coolvetica py-50 w-full">
      <img src={elem1} alt="" className="absolute w-50 left-10" />
      <h2 className="w-65 text-3xl text-justify z-10 font-regular">
        NO BUSCAMOS HACER ALGO QUE SIMPLEMENTE SE VEA BIEN. BUSCAMOS CREAR ALGO
        QUE SE SIENTA PROPIO.
      </h2>
    </section>
  );
}
