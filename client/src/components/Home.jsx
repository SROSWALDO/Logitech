import Navbar from "./Navbar";
import logitech from "../assets/logitech.png";
import banner from '../assets/promo.jpg'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <header className="bg-[#32176D] w-full h-[530px] relative">
        <nav className="flex px-40 pt-6 justify-between z-[100] relative">
          <div>
            <img className="w-32" src={logitech} alt="" />
          </div>

          <div className="flex">
          <p className="text-white uppercase font-semibold mx-5">Conocer mas</p>
          <p className="text-white uppercase font-semibold mx-5">Descubre</p>
          <p className="text-white uppercase font-semibold mx-5">Empresas</p>
          <p className="text-white uppercase font-semibold mx-5">Asistencia</p>

          </div>

          <div>
            <div>
            <input className="bg-transparent" type="text" placeholder="Buscar" />
            </div>
          </div>

        </nav>

        <div>
          <h2 className="text-3xl text-white font-semibold">NUEVO AÑO, NUEVO EQUIPO</h2>
        </div>

        <img className="absolute w-[890px] h-full top-0 right-0 z-10 object-cover object-left " style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }} src={banner} alt="" />
      </header>
    </div>
  );
}
