import { AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

// Redes Sociales
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

// Mensajeria
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'


export const data = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icons: <AiOutlineHome />,
  },
  {
    id: 2,
    title: "Acerca",
    path: "/about",
    icons: <BsFillPersonFill />,
  },
  {
    id: 3,
    title: "Servicios",
    path: "/services",
    icons: <MdOutlineDesignServices />,
  },
  {
    id: 4,
    title: "Portafolio",
    path: "/portfolio",
    icons: <BsBook />,
  },
  {
    id: 5,
    title: "Contacto",
    path: "/contact",
    icons: <IoMdContact />,
  },
];

export const RedesSociales = [
  {
    id: 1,
    icono: <BsGithub />,
    description: "Github",
    url:'https://github.com/PandavionxD'
  },
  {
    id: 2,
    icono: <BsFacebook />,
    description: "Facebook",
    url:'https://www.facebook.com/alexdaniel.ar2/'
  },
  {
    id: 3,
    icono: <BsInstagram />,
    description: "Instagram",
    url:'https://www.instagram.com/alexdaniel.ar/'
  },
  {
    id: 4,
    icono: <BsLinkedin />,
    description: "Linkedin",
    url:'https://www.linkedin.com/in/alex-daniel-artica-rivera-9751b915b'
  },
];

export const Mensajeria = [
  {
    id: 1,
    icono: < AiOutlineMail/>,
    description: "Email",
    url:'mailto:1151372@senati.pe'
  },  {
    id: 2,
    icono: <FaFacebookMessenger />,
    description: "Facebook Messenger",
    url:'https://m.me/alexdaniel.ar2'
  },  {
    id: 3,
    icono: <FaWhatsapp />,
    description: "Whatsapp",
    url:'https://wa.me/+051921770857'
  },  {
    id: 4,
    icono: <FaTelegramPlane />,
    description: "Telegram",
    url:'https://t.me/+051921770857'
  },
]