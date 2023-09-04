import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/navbar.webp";
import { MdDarkMode } from "react-icons/md";
import { data } from "./data";
import { useUserContext } from "../context/userContext";
import { BsSun } from "react-icons/bs";

export const Navbar = () => {
  const { setDarkToggle, darkToggle } = useUserContext();

  const toogleDark = () => {
    setDarkToggle(!darkToggle);
  };

  return (
    <nav className=" h-20  bg-indigo-600 w-full dark:bg-purple-800 ">
      <div className="container grid grid-cols-6 h-full items-center pl-3 md:pl-0 text-white">
        <picture className="col-span-1">
          <Link to="/">
            <img src={logo} alt={logo} className="h-10 w-10 rounded-full " />
          </Link>
        </picture>
        <div className="hidden md:flex col-start-2 col-end-6 justify-center gap-5 ">
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
        <button
          className="col-start-6 col-end-7 flex justify-end "
          onClick={toogleDark}
        >
          {darkToggle ? (
            <BsSun className="text-2xl mr-3 block md:mr-0" />
          ) : (
            <MdDarkMode className="text-2xl mr-3 block md:mr-0" />
          )}
        </button>
      </div>
    </nav>
  );
};
