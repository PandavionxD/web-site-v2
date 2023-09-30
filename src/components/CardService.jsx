import { useState } from "react";
import { IoMdRemove } from "react-icons/io";
import { MdAdd } from "react-icons/md";

export const CardService = ({ id, title, icons, content }) => {
  const [open, setopen] = useState(false);

  const openMenu = () => {
    setopen((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-gray-200 dark:border-white dark:border p-3 cursor-pointer  rounded-md shadow-md  hover:-translate-y-2 transition-all dark:bg-purple-800   duration-500 hover:bg-white hover:border-gray-200 hover:border "
        onClick={openMenu}
      >
        <div className="flex justify-between ">
          <h3 className="text-lg font-semibold dark:text-gray-300 ">{title}</h3>
          <span className="dark:text-gray-300 text-2xl ">
            {open ? <IoMdRemove /> : <MdAdd />}
          </span>
        </div>
        {open && (
          <>
            <hr className="mt-2" />
            <div className="flex mt-3 items-center gap-5">
              <span className="p-2 text-5xl rounded-md text-gray-300 dark:bg-purple-600   bg-indigo-600 ">
                {icons}
              </span>
              <p className="dark:text-white">{content}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
