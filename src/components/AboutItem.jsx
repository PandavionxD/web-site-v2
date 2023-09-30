import { useRef } from "react";

export const AboutItem = ({ description, icon, title }) => {
  const item = useRef();

  const inputHover = () => {
    item.current.classList.add("bg-indigo-600","text-white");
    item.current.classList.add("dark:bg-purple-600","text-white");
  };

  const ouptuphover = () => {
    item.current.classList.remove("dark:bg-purple-600","text-white");
    item.current.classList.remove("bg-indigo-600","text-white");
  };

  return (
    <div
      className="flex col-span-3 flex-col p-3 gap-3 contenedor justify-center items-center border rounded-md shadow-sm border-indigo-600 dark:border-purple-600  hover:-translate-y-2 transition-all duration-500 cursor-pointer "
      onMouseOut={ouptuphover}
      onMouseOver={inputHover}
    >
      <span
        className="dark:text-white p-2 rounded-md text-2xl icono "
        ref={item}
      >
        {icon}
      </span>
      <h3 className="text-indigo-400 font-semibold dark:text-purple-400">
        {title}
      </h3>
      <p className="font-extralight dark:text-white text-sm text-center ">
        {description}
      </p>
    </div>
  );
};
