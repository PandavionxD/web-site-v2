import { NavLink } from "react-router-dom";
import { data } from "./data";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'


export const FloatingNavbar = () => {
  const [hidden, sethidden] = useState(false);

  return (
    <>
      <button onMouseOver={() => sethidden(!hidden)} className="md:hidden  flex bg-indigo-600
       p-2 transition-all duration-700 rounded-md z-50 dark:bg-purple-600 text-white items-center absolute bottom-5 right-5  "  >
      <AiOutlineMenu />
      </button>
      {hidden && (
        <div className="md:hidden p-3 pb-0 opacity-20 hover:opacity-100 fixed rounded-md  bg-indigo-600 w-20 dark:bg-purple-600 flex flex-col gap-3 z-10 bottom-14 justify-center right-2  transition-all duration-700 ">
          {data.map((item) => (
            <div key={item.id}>
              <NavLink
                to={item.path}
                className="flex flex-col items-center gap-1 text-xs overflow-hidden hover:translate-x-2 transition-all duration-300  "
              >
                <button className="text-white">{item.icons}</button>
                <span className="text-white"> {item.title} </span>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
