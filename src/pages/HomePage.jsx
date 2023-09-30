import logo from "../assets/img/home.webp";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-7rem)] w-full mx-auto grid place-content-center gap-3 p-5 ">
        <picture className="w-60 shadow-md   mx-auto imagen dark:bg-gradient-to-r from-indigo-600 via-purple-900 to-fuchsia-600  ">
          <img
            src={logo}
            alt={logo}
            className=" object-cover mx-auto imagen1 "
          />
        </picture>
        <h1 className="text-center  text-indigo-600 text-[2.5rem] font-bold dark:text-purple-600 ">
          Alex Daniel
        </h1>
        <p className="w-4/5 mx-auto dark:text-gray-300 font-light text-gray-600 text-center text-sm ">
          Técnico Informático, estudie en SENATI; me encanta la tecnología,
          soporte de equipos informáticos, programación web, redes, etc.
          <span className="w-full inline-block dark:text-gray-300 font-light text-gray-600 text-center text-sm ">
            Programar, ser autodidácta, cantar, viajar, escuchar música son mi
            pasión.
          </span>
        </p>
        <div className="flex gap-5 flex-col absolute bottom-5 z-10 left-3 md:left-10 ">
          <a
            href="https://www.facebook.com/alexdaniel.ar2/"
            target="_blank"
            className="p-2 overflow-hidden bg-gray-200 rounded-md dark:hover:bg-purple-600 hover:bg-indigo-600 hover:text-white hover:-translate-x-2 transition-all duration-300 "
          >
            <BsFacebook className="text-sm" />
          </a>
          <a
            href="https://www.instagram.com/alexdaniel.ar/"
            target="_blank"
            className="p-2 overflow-hidden bg-gray-200 rounded-md dark:hover:bg-purple-600 hover:bg-indigo-600 hover:text-white hover:-translate-x-2 transition-all duration-300 "
          >
            <BsInstagram className="text-sm" />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-daniel-artica-rivera-9751b915b"
            target="_blank"
            className="p-2 overflow-hidden bg-gray-200 rounded-md dark:hover:bg-purple-600 hover:bg-indigo-600 hover:text-white hover:-translate-x-2 transition-all duration-300 "
          >
            <BsLinkedin className="text-sm" />
          </a>
        </div>
        <div className="flex gap-5 justify-center items-center mt-3 animate__animated animate__fadeInUp">
          <Link
            to="/contact"
            className="bg-indigo-600 dark:bg-purple-600 p-3 rounded-lg text-white hover:-translate-y-2 hover:text-indigo-600 dark:hover:text-purple-600 hover:bg-transparent overflow-hidden hover:border-indigo-600 dark:border-purple-600 dark:hover:bg-transparent border transition-all duration-300  "
          >
            Hablemos
          </Link>
          <Link
            to="/portfolio"
            className="bg-gray-100 p-3 rounded-lg  hover:-translate-y-2 hover:text-indigo-600 hover:bg-transparent hover:border-indigo-600 overflow-hidden dark:hover:text-purple-600 dark:border-purple-600 hover:border-gray-bg-gray-100 border transition-all duration-300  "
          >
            Trabajos
          </Link>
        </div>
      </div>
    </>
  );
};
