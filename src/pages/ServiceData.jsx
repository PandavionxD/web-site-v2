import {AiOutlineLaptop} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {BiLogoRedux} from 'react-icons/bi'

export const ServiceData = [
    {
        id:1,
        title:'Soporte técnico',
        content:'Brindo soluciones en lo que respecta a equipos Informáticos, Hardware, Software, Programas, repuestos, formateos, etc.',
        icons: <AiOutlineLaptop/>
    },
    {
        id:2,
        title:'Desarrollador React js',
        content:'Brindo soluciones para la creacion de interfaces graficas de aplicaciones web, con la libreria de React.',
        icons: <FaReact/>
    },
    {
        id:3,
        title:'Tailwind CSS',
        content:'Brindo aplicaciones web responsivas con el uso del Framework Tailwind CSS, para un optimo diseño de aplicaciones web.',
        icons: <BiLogoTailwindCss/>
    },
    {
        id:4,
        title:'Redux',
        content:'Para aplicaciones Grandes nos apoyamos de Redux, para un manejo óptimo de estados y asi sea facil la gestión de la aplicación.',
        icons: <BiLogoRedux/>
    }
]