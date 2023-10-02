import { RedesSociales } from "./data"

export const Footer = () => {
  return (
    <div className="w-[100%] flex gap-8 justify-center text-center items-center  md:text-xl  h-6rem text-indigo-600 font-semibold dark:text-purple-600 " >
        <h3>
            2023 Alex Daniel &copy;  All Rights Reserved
        </h3>
        <div className="flex gap-1 md:gap-4 items-center" >
            {
                RedesSociales.map(item=>(
                    <a href={item.url} target="_blank" key={item.id} className="p-2 rounded-md dark:hover:border-purple-600 dark:hover:bg-transparent dark:hover:text-purple-600 border border-transparent cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:text-white hover:bg-indigo-600  md:text-xl " >
                        {item.icono}
                    </a>
                ))
            }
        </div>
    </div>
  )
}

