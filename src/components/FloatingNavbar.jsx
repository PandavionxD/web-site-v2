import { AiFillUpSquare, AiOutlineHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const FloatingNavbar = () => {

  return (
    <div className="md:hidden p-3 pb-0 opacity-20 hover:opacity-100 fixed rounded-md  bg-indigo-600 w-20 dark:bg-purple-600 flex flex-col gap-3 z-10 bottom-2 justify-center right-1  transition-all duration-700 ">
      <div  >
        <NavLink to='/'className='flex flex-col items-center gap-1 text-xs overflow-hidden hover:translate-x-2 transition-all duration-300  ' >
          <AiOutlineHome className="text-white"  />
          <span  className="text-white" >Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink  to='/about' className='flex flex-col items-center  gap-1 text-xs
        overflow-hidden hover:translate-x-2 transition-all duration-300 '>
          <BsFillPersonFill  className="text-white"/>
          <span className="text-white">About</span>
        </NavLink>
      </div>
      <div>
        <NavLink  to='/services' className='flex flex-col items-center gap-1 text-xs
        overflow-hidden hover:translate-x-2 transition-all duration-300  '>
          <MdOutlineDesignServices className="text-white"/>
          <span className="text-white">Services</span>
        </NavLink>
      </div>
      <div>
        <NavLink  to='/portfolio' className='flex flex-col items-center gap-1 text-xs
        overflow-hidden hover:translate-x-2 transition-all duration-300 '>
          <BsBook className="text-white"/>
          <span className="text-white" >Portafolio</span>
        </NavLink>
      </div>
      <div>
        <NavLink  to='/contact' className='flex flex-col items-center gap-1 text-xs
        overflow-hidden hover:translate-x-2 transition-all duration-300 '>
          <IoMdContact className="text-white" />
          <span className="text-white" >Contacto</span>
        </NavLink>
      </div>
    </div>
  );
};
