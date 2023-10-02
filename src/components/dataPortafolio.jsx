import journall from '../assets/img/portafolio/journall-app.webp'
import heroes from '../assets/img/portafolio/heroes-app.webp'
import notes from '../assets/img/portafolio/notes-app.webp'
import todo from '../assets/img/portafolio/todo-app-2.webp'
import clima from '../assets/img/portafolio/clima-app.webp'


export const DataPortafolio = [
    {
      id:1,
      img: journall,
      title:'Journall App',
      description:'Proyecto Web de Diario con autentificación de usuarios y validacion de datos con Formik, con una base de datos NoSQL, almacenado de datos en FireStore.',
      demo:'https://journall-app-v1.netlify.app/',
      github:'https://github.com/PandavionxD'
    },{
      id:2,
      img: heroes,
      title:'Heroes App',
      description:'Proyecto web para practicar con las rutas, donde tambien tendrás un filtro para buscar los heroes o coincidencias con la busqueda.',
      demo:'https://react-heroes-appv1.netlify.app/',
      github:'https://github.com/PandavionxD'
    },{
      id:3,
      img: notes,
      title:'Notes App',
      description:'Aplicación web para que guarda las notas en el localStorage de cada navegador donde se practica conceptos de React js',
      demo:'https://notes-app-v1-react.netlify.app/',
      github:'https://github.com/PandavionxD'
    },{
      id:4,
      img: todo,
      title:'Todo App',
      description:' Proyecto web realizado para practicar estilos con Tailwind CSS, y tambien practicar conceptos con react y rutas ',
      demo:'https://todo-app-udemy.netlify.app/',
      github:'https://github.com/PandavionxD'
    },{
      id:5,
      img: clima,
      title:'Clima App',
      description:'Aplicación web para practicar sobre peticiones Http con fetch en React y generando un error en caso sea incorrecta la petición HTTP.',
      demo:'https://clima-app-v1.netlify.app/',
      github:'https://github.com/PandavionxD'
    },
  ]