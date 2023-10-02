import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { ServiceData } from "./ServiceData";
import { CardService } from "../components/CardService";

export const ServicePage = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)] h-auto flex flex-col gap-8 " >
      <div className="mt-8" >
        <h2 className="text-center text-[2rem] text-indigo-600 font-semibold mt-6 dark:text-purple-600 ">
          Servicios
        </h2>
        <p className="text-center font-light text-sm dark:text-white ">
          Te doy lo mejor en todos los servicios a continuación
        </p>
      </div>
      <section className="grid md:grid-cols-2  items-start gap-5 mt-5 p-5 md:p-0 animate__animated animate__fadeInUp ">
        {ServiceData.map((item) => (
          <CardService {...item} key={item.id}  />
        ))}
      </section>
    </div>
  );
};
