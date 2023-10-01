import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

export const data = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icons: <AiOutlineHome/>
  },
  {
    id: 2,
    title: "Acerca",
    path: "/about",
    icons: <BsFillPersonFill/>
  },
  {
    id: 3,
    title: "Servicios",
    path: "/services",
    icons: <MdOutlineDesignServices/>
  },
  {
    id: 4,
    title: "Portafolio",
    path: "/portfolio",
    icons: <BsBook/>
  },
  {
    id: 5,
    title: "Contacto",
    path: "/contact",
    icons: <IoMdContact/>
  },
];

