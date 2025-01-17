import Navbar from "./Navbar";
import logitech from "../assets/logitech.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <header className="bg-[#32176D] w-full h-[530px]">
        <nav className="flex px-40 pt-6 justify-between">
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
            <input className="bg-transparent" type="text" placeholder="Buscar" />
          </div>

        </nav>
      </header>
    </div>
  );
}
