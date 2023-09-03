import logo from "../assets/img/home.webp";

export const HomePage = () => {
  return (
    <div className="min-h-screen-[5rem] w-full mx-auto grid place-content-center gap-5 relative ">
      <picture className="w-80 overflow-hidden mx-auto rounded-t-full  shadow-2xl shadow-indigo-600  ">
        <img src={logo} alt={logo} className="w-full" />
      </picture>
      <h1 className="text-center text-2xl font-bold">Alex Daniel</h1>
      <p className="w-full font-light text-center text-md ">
        Técnico Informático, estudie en SENATI; me encanta la tecnología,
        soporte de equipos informáticos, programación web, redes, etc.
        <span className="w-full inline-block font-light text-center text-md ">
          Programar, ser autodidácta, cantar, viajar, escuchar música son mi
          pasión.
        </span>
      </p>
      <div>
        <button>Facebook</button>
        <button>Intagram</button>
        <button>Linkedin</button>
      </div>
    </div>
  );
};
