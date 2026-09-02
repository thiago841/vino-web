import { Link } from "wouter";
import Header from "../components/home/HeaderHome";
import Footer from "../components/home/FooterHome";
import QuienesSomos from "../components/home/QuienesSomos";
import Servicios from "../components/home/Servicios";
import Vision from "../components/home/Vision";
import UltimosProyectos from "../components/home/UltimosProyectos";
import Creamos from "../components/home/Creamos";

export default function Home() {
  return (
    <>
      <Header isHome={true} />
      <main>
        <QuienesSomos />
        <Servicios />
        <Vision />
        <UltimosProyectos />
        <Creamos />
      </main>
      <Footer />
    </>
  );
}
