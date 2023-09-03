import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/navbar.webp";
import { MdDarkMode } from "react-icons/md";
import { data } from "./data";

export const Navbar = () => {
  return (
    <nav className=" h-20  bg-indigo-600  w-full  ">
      <div className="container grid gap-5 grid-cols-6 place-content-center text-white w-full h-full  ">
        <picture className="">
          <Link to="/">
            <img src={logo} alt={logo} className="h-10 w-10 rounded-full " />
          </Link>
        </picture>
        <div className="col-span-4 flex gap-10 justify-center items-center ">
          {data.map((item) => (
            <NavLink
              className="hover:text-indigo-950 font-semibold transition-all duration-300 "
              key={item.id}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <button className="flex justify-end items-center ">
          <MdDarkMode className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};
