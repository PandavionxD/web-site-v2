import React from "react";
import imageAbout from "../assets/img/About.webp";
import {AiOutlineDownload} from 'react-icons/ai'
import cv from '../assets/CV/cv.pdf'
import {FcSupport} from 'react-icons/fc'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import { AboutData } from "./AboutData";



export const AboutPage = () => {
  return (
    <div className="w-full mt-5 min-h-[calc(100vh-7rem)] gap-3 grid grid-cols-12 ">
      <div className="md:col-span-4 w-[80%] md:flex md:items-center hidden ">
        <picture className="p-3 bg-gray-300 dark:bg-white overflow-hidden ">
          <img
            src={imageAbout}
            alt="image_About_me"
            className="object-contain hover:scale-[1.11] transition-all duration-500  "
          />
        </picture>
      </div>
      <div className="md:col-span-8  col-span-12 ">
        <h1 className="text-2xl text-center text-indigo-600 font-semibold dark:text-white ">
          Acerca de mi
        </h1>
        <div className="grid grid-cols-9 mt-3 gap-3 " >
        {
          AboutData.map(item=>(
            <div className="flex col-span-3 flex-col p-3 gap-3 justify-center items-center border rounded-md shadow-sm border-indigo-600 dark:border-purple-600" key={item.id} >
            <span className="dark:text-white" >
            {item.icon}
            </span>
            <h3 className="text-indigo-400 font-semibold dark:text-purple-400" >{item.title}</h3>
            <p className="font-extralight dark:text-white text-sm text-center " >
              {item.description}
            </p>
          </div>
          ))
        }



        </div>
        <div className="my-5 flex flex-col gap-2">
        <p className="parrafo "  >
          Construir Proyectos me encantan, siempre han sido mi pasión, estando
          en la industria de Computación e Informática por más de 2 años y
          atendiendo a clientes en la ciudad de Huancayo - Perú.
        </p>
        <p className="parrafo " >!Siempre estoy motivado para hacer más cosas y ser mejor cada día!</p>
        <p className="parrafo " >
        Póngase en contacto hoy, ¡Comencemos! ¡Mira mi currículum a continuación!
        </p>
        </div>
        <a href={cv} target="_blank" className="boton w-2/6 flex content-center items-center "  >
          Descargar CV 
          <AiOutlineDownload className="text-xl ms-1" />
        </a>
      </div>
    </div>
  );
};
