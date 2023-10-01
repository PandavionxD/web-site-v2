
export const CardPortafolio = ({img,description,demo,github,title}) => {
  return (
    <div className="mt-8 p-4 shadow-md rounded-md overflow-hidden flex flex-col gap-4 hover:-translate-y-2 cursor-pointer border border-transparent dark:hover:border-white hover:border-indigo-600  transition-all duration-500 " >
        <img src={img} alt="imagen" className=" overflow-hidden rounded-md " />
        <h3 className="text-center text-indigo-600 dark:text-purple-600 text-2xl font-semibold" > {title} </h3>
        <p className="parrafo" > {description} </p>
        <div className="flex gap-3  items-center ">
        <a className="py-2 px-4 text-white bg-indigo-600 rounded-md hover:text-indigo-600 border border-transparent hover:border-indigo-600 hover:bg-white transition-all duration-500 hover:-translate-y-2 dark:bg-purple-600 dark:hover:text-purple-600 dark:hover:bg-white dark:hover:border-purple-600 " href={demo} target="_blank" >Demo</a>
        <a className="py-2 px-4 text-indigo-600 bg-gray-100 rounded-md hover:text-indigo-600 border border-transparent hover:border-indigo-600 hover:bg-white transition-all duration-500 hover:-translate-y-2 dark:text-purple-600 dark:border-purple-600 dark:hover:bg-transparent " href={github} target="_blank" >Github</a>
        </div>
    </div>
  )
}
