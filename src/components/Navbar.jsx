import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/navbar.webp";
import { MdDarkMode } from "react-icons/md";
import { useRef } from "react";

export const Navbar = () => {
  const icon = useRef();

  return (
    <nav className=" h-20  bg-indigo-600  w-full  ">
      <div className="container grid gap-5 grid-cols-6 place-content-center text-white w-full h-full  ">
        <picture className="">
          <Link to="/">
            <img src={logo} alt={logo} className="h-10 w-10 rounded-full " />
          </Link>
        </picture>
        <div className="col-span-4 flex gap-10 justify-center items-center ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Acerca</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/portfolio">Portafolio</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </div>
        <button className="flex justify-end items-center ">
          <MdDarkMode className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};
