import { Title } from "../components/Title";
import { Mensajeria } from "../components/data";
import ContactAzul from "../assets/img/contact/blue.svg";
import ContactPurple from "../assets/img/contact/purple.svg";
import { useUserContext } from "../context/userContext";
import { Footer } from "../components/Footer";

export const ContactPage = () => {
  const { darkToggle } = useUserContext()

  return (
    <>
      <section className="w-full h-[calc(100vh-8rem)] grid md:grid-cols-2 gap-12 place-content-center ">
        <article className="animate__animated animate__fadeInLeft" >
          <Title
            title="Ponerse en contacto"
            description="¡Envíame un mensaje a través de cualquiera de los enlaces a continuación!"
          />
          <div className="flex mt-4 justify-around">
            {Mensajeria.map((item) => (
              <a
                key={item.id}
                target="_blank"
                href={item.url}
                className="cursor-pointer transition-all duration-500 hover:bg-white hover:text-indigo-600 border border-transparent hover:border-indigo-600 hover:-translate-y-2 text-3xl md:text-4xl lg:text-5xl text-white bg-indigo-600 p-4 rounded-md dark:bg-purple-600 hover:dark:bg-transparent hover:dark:text-purple-600 hover:dark:border-purple-600 "
              >
                {item.icono}
              </a>
            ))}
          </div>
        </article>
        <article className="p-4 hidden md:block animate__animated  animate__fadeInRight ">
          {darkToggle ? (
            <img src={ContactPurple} alt="contacto purpura" />
          ) : (
            <img src={ContactAzul} alt="contacto azul" />
          )}
        </article>
      </section>
      <Footer/>
    </>
  );
};
