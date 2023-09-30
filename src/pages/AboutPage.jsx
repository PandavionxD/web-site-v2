import React, { useRef, useState } from "react";
import imageAbout from "../assets/img/About.webp";
import { AiOutlineDownload } from "react-icons/ai";
import cv from "../assets/CV/CV.pdf";
import { AboutData } from "./AboutData";
import { AboutItem } from "../components/AboutItem";

export const AboutPage = () => {
  return (
    <div className="w-full mt-5 min-h-[calc(100vh-7rem)] p-5 md:p-0 gap-3 grid grid-cols-12 ">
      <div className="md:col-span-4 w-[80%] md:flex md:items-center hidden ">
        <picture className="p-3 bg-gray-300 dark:bg-white overflow-hidden ">
          <img
            src={imageAbout}
            alt="image_About_me"
            className="object-contain hover:scale-[1.11] transition-all duration-500  "
          />
        </picture>
      </div>
      <div className="md:col-span-8 mt-12  col-span-12 ">
        <h1 className="text-[2rem] dark:text-purple-600 text-center text-indigo-600 font-semibold  ">
          Acerca de mí
        </h1>
        <div className="animate__animated animate__fadeInUp grid grid-cols-9 mt-3 gap-3 ">
          {AboutData.map((item) => (
              <AboutItem key={item.id} {...item}   />
          ))}
        </div>
        <div className="my-5 flex flex-col gap-2">
          <p className="parrafo ">
            Construir Proyectos me encantan, siempre han sido mi pasión, estando
            en la industria de Computación e Informática por más de 2 años y
            atendiendo a clientes en la ciudad de Huancayo - Perú.
          </p>
          <p className="parrafo ">
            !Siempre estoy motivado para hacer más cosas y ser mejor cada día!
          </p>
          <p className="parrafo ">
            Póngase en contacto hoy, ¡Comencemos! ¡Mira mi currículum a
            continuación!
          </p>
        </div>
        <a
          href={cv}
          target="_blank"
          className="boton w-48 flex content-center items-center "
        >
          Descargar CV
          <AiOutlineDownload className="text-xl ms-1" />
        </a>
      </div>
    </div>
  );
};
