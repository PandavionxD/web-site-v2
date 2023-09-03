import logo from "../assets/img/home.webp";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
    <div className="h-[calc(100vh-7rem)] w-full mx-auto grid place-content-center gap-3 ">
      <picture className="w-60 shadow-md overflow-hidden  mx-auto imagen   ">
        <img src={logo} alt={logo} className=" object-cover mx-auto imagen1 " />
      </picture>
      <h1 className="text-center text-2xl font-bold">Alex Daniel</h1>
      <p className="w-3/5 mx-auto font-light text-gray-600 text-center text-sm ">
        Técnico Informático, estudie en SENATI; me encanta la tecnología,
        soporte de equipos informáticos, programación web, redes, etc.
        <span className="w-full inline-block font-light text-gray-600 text-center text-sm ">
          Programar, ser autodidácta, cantar, viajar, escuchar música son mi
          pasión.
        </span>
      </p>
      <div className="flex gap-5 flex-col absolute bottom-5 z-10">
        <button className="p-2 overflow-hidden bg-gray-200 rounded-md hover:bg-indigo-600 hover:text-white hover:-translate-x-2 transition-all duration-300 " >
          <BsFacebook className="text-sm"  />
        </button>
        <button className="p-2 overflow-hidden bg-gray-200 rounded-md hover:bg-indigo-600 hover:text-white hover:-translate-x-2 transition-all duration-300 " >
          <BsInstagram className="text-sm"  />  
        </button>
        <button className="p-2 overflow-hidden bg-gray-200 rounded-md hover:bg-indigo-600 hover:text-white hover:-translate-x-2 transition-all duration-300 " >
          <BsLinkedin  className="text-sm" />
        </button>
      </div>
      <div className="flex gap-5 justify-center items-center mt-3 animate__animated animate__fadeInUp" >
        <Link to='/contact' className="bg-indigo-600 p-3 rounded-lg text-white hover:-translate-y-2 hover:text-indigo-600 hover:bg-transparent overflow-hidden hover:border-indigo-600 border transition-all duration-300  ">
          Hablemos
        </Link>
        <Link to='/portfolio' className="bg-gray-100 p-3 rounded-lg  hover:-translate-y-2 hover:text-gray-bg-gray-100 hover:bg-transparent overflow-hidden hover:border-gray-bg-gray-100 border transition-all duration-300  ">
          Trabajos
        </Link>
      </div>
    </div>
    </>
  );
};
