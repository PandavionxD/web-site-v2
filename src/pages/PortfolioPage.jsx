import { CardPortafolio } from "../components/CardPortafolio"
import { Title } from "../components/Title"
import { DataPortafolio } from "../components/dataPortafolio"


export const PortfolioPage = () => {



  return (
    <div className="p-4 md:p-0">
    <section className="grid place-content-center w-full h-auto" >
      <Title   title = 'Proyectos Recientes' description='Vea algunos de los proyectos en los que trabajé recientemente, poco a poco ire subiendo nuevos proyectos; estamos en proceso de aprendizaje con Nextjs  y Backend con Nodejs y Python.'  />
      <article className="animate__animated animate__fadeInUp grid  grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 " >
      {
        DataPortafolio.map(
          item=>(
            <CardPortafolio  key={item.id}  {...item} />
          )
        )
      }
      </article>
    </section>    
    </div>
  )
}
