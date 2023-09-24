import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { ServiceData } from "./ServiceData";
// ICONOS DE REACT
import { AiOutlineLaptop } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";

export const ServicePage = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);

  return (
    <>
      <div>
        <h2 className="text-center text-2xl text-indigo-600 font-semibold mt-6 dark:text-purple-600 ">
          Servicios
        </h2>
        <p className="text-center font-light text-sm dark:text-white ">
          Te doy lo mejor en todos los servicios a continuación
        </p>
      </div>
      <section className="flex flex-wrap  gap-5 mt-5 p-5 md:p-0 ">
        {/* {ServiceData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 dark:border-white   dark:border p-3 cursor-pointer  rounded-md shadow-md dark:bg-transparent hover:-translate-y-2 transition-all duration-300 hover:bg-white hover:border-gray-200 hover:border "
            onClick={() => setopen(!open)}
          >
            <div className="flex justify-between ">
              <h3 className="text-lg font-semibold dark:text-white ">
                {item.title}
              </h3>
              <span className="dark:text-white text-2xl ">
                {open ? <IoMdRemove /> : <MdAdd />}
              </span>
            </div>
            {open && (
              <div className="flex mt-3 items-center gap-5">
                <span className="p-2 text-lg rounded-md text-white dark:bg-purple-600  bg-indigo-600 ">
                  {item.icons}
                </span>
                <p className="dark:text-white">{item.content}</p>
              </div>
            )}
          </div>
        ))} */}
        <div
          className="bg-gray-200 dark:border-white   dark:border p-3 cursor-pointer  rounded-md shadow-md dark:bg-transparent hover:-translate-y-2 transition-all w-full animate__animated animate__fadeInUp duration-300 hover:bg-white hover:border-gray-200 hover:border "
          onClick={() => setopen(!open)}
        >
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold dark:text-white ">
              Soporte técnico
            </h3>
            <span className="dark:text-white text-2xl ">
              {open ? <IoMdRemove /> : <MdAdd />}
            </span>
          </div>
          {open && (
            <div className="flex mt-3 items-center gap-5">
              <span className="p-2 text-5xl rounded-md text-white  dark:bg-purple-600  bg-indigo-600 ">
                <AiOutlineLaptop />
              </span>
              <p className="dark:text-white">
                Brindo soluciones en lo que respecta a equipos Informáticos,
                Hardware, Software, Programas, repuestos, formateos, reconstrucciones, etc.
              </p>
            </div>
          )}
        </div>
        <div
          className="bg-gray-200 dark:border-white   dark:border p-3 cursor-pointer animate__animated animate__fadeInUp rounded-md shadow-md dark:bg-transparent hover:-translate-y-2 transition-all w-full duration-300 hover:bg-white hover:border-gray-200 hover:border "
          onClick={() => setopen1(!open1)}
        >
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold dark:text-white ">
              Desarrollador React js
            </h3>
            <span className="dark:text-white text-2xl ">
              {open1 ? <IoMdRemove /> : <MdAdd />}
            </span>
          </div>
          {open1 && (
            <div className="flex mt-3 items-center gap-5">
              <span className="p-2 text-5xl rounded-md text-white dark:bg-purple-600  bg-indigo-600 ">
                <FaReact />
              </span>
              <p className="dark:text-white">
                Brindo soluciones para la creacion de interfaces graficas de
                aplicaciones web, con la libreria de React.
              </p>
            </div>
          )}
        </div>
        <div
          className="bg-gray-200 dark:border-white   dark:border p-3 cursor-pointer  rounded-md shadow-md dark:bg-transparent hover:-translate-y-2 transition-all w-full duration-300 hover:bg-white hover:border-gray-200 hover:border animate__animated animate__fadeInUp"
          onClick={() => setopen2(!open2)}
        >
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold dark:text-white ">
              Tailwind CSS
            </h3>
            <span className="dark:text-white text-2xl ">
              {open2 ? <IoMdRemove /> : <MdAdd />}
            </span>
          </div>
          {open2 && (
            <div className="flex mt-3 items-center gap-5">
              <span className="p-2 text-5xl rounded-md text-white dark:bg-purple-600  bg-indigo-600 ">
                <BiLogoTailwindCss />
              </span>
              <p className="dark:text-white">
                Brindo aplicaciones web responsivas con el uso del Framework
                Tailwind CSS, para un optimo diseño de aplicaciones web.
              </p>
            </div>
          )}
        </div>
        <div
          className="bg-gray-200 dark:border-white  w-full dark:border p-3 cursor-pointer  rounded-md shadow-md dark:bg-transparent animate__animated animate__fadeInUp h-auto hover:-translate-y-2 transition-all duration-300 hover:bg-white hover:border-gray-200 hover:border "
          onClick={() => setopen3(!open3)}
        >
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold dark:text-white ">Redux</h3>
            <span className="dark:text-white text-2xl ">
              {open3 ? <IoMdRemove /> : <MdAdd />}
            </span>
          </div>
          {open3 && (
            <div className="flex mt-3 items-center gap-5">
              <span className="p-2 text-5xl rounded-md text-white dark:bg-purple-600  bg-indigo-600 ">
                <BiLogoRedux />
              </span>
              <p className="dark:text-white">
                Para aplicaciones Grandes nos apoyamos de Redux, para un manejo
                óptimo de estados y asi sea facil la gestión de la aplicación.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
