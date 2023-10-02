export const Title = ({ title, description }) => {
  return (
    <>
      <h1 className="text-[2rem] mt-8   dark:text-purple-600 text-center text-indigo-600 font-semibold  ">
        {title}
      </h1>
      <p className='parrafo mt-4 text-center p-4 md:p-0 '>{description}</p>
    </>
  );
};
