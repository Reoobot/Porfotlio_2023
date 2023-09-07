import Image from "next/image";

export default function BlogPage() {

    
    return (
      <div className="bg-white p-4">
        <div>
          <img className="rounded-md w-full" src="/images/blog1.jpeg" alt="Imagen" />
        </div>
        <div>
          <h1 className="text-3xl text-center my-4 font-semibold p-3">
            Transformando mi Vida en un Bootcamp de Programación: Una Historia de Desafíos y Éxito
          </h1>
          <div className="p-4">
            <p>
              En un momento de mi vida, decidí dar un giro completo a mi carrera. Me encontraba estancado en un trabajo que no me apasionaba y anhelaba algo más emocionante y desafiante. Fue entonces cuando escuché sobre los bootcamps de programación, cursos intensivos que prometían convertir a personas con poca experiencia en programadores capacitados en tan solo unos meses.
            </p>
            <br />
            <p>
              Después de investigar, elegí un bootcamp de desarrollo web de renombre y me inscribí en él con emociones encontradas. No tenía experiencia previa en programación, lo que hizo que el desafío fuera aún mayor. A continuación, quiero compartir mi viaje en el bootcamp, lleno de altibajos y lecciones de vida.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Semana 1: Empezando desde Cero",
              content: "El primer día de clases fue intimidante. Me encontré rodeado de personas con diferentes niveles de conocimientos técnicos. A medida que el instructor comenzó a hablar de HTML, CSS y JavaScript, me di cuenta de que estaba en territorio desconocido. Pero decidí no rendirme. Pasé horas adicionales estudiando y practicando después de las clases. Fue un comienzo difícil, pero sentí que estaba aprendiendo algo nuevo cada día.",
              image: "/images/blog2.jpeg",
            },
            {
              title: "Semana 4: El Primer Proyecto",
              content: "Cuatro semanas en el bootcamp, llegó el momento de trabajar en mi primer proyecto. La tarea era crear una página web simple desde cero utilizando HTML y CSS. Fue un desafío abrumador, pero cuando finalmente vi mi página funcionando en el navegador, sentí una oleada de satisfacción que nunca había experimentado en mi trabajo anterior.",
              image: "/images/blog4.jpeg",
            },
            {
              title: "Semana 8: Inmersión en JavaScript",
              content: "A medida que avanzábamos, entramos de lleno en JavaScript. Fue un momento crucial para mí. Las clases se volvieron más complejas y los conceptos eran difíciles de asimilar al principio. Pero, poco a poco, comencé a comprender la lógica detrás de la programación. Me sentía como si estuviera resolviendo rompecabezas cada día.",
              image: "/images/blog1.jpeg",
            },
            {
              title: "Semana 12: Trabajo en Equipo",
              content: "En la última etapa del bootcamp, nos dividieron en equipos para desarrollar proyectos más grandes. Trabajar en equipo fue una experiencia enriquecedora. Aprendí a colaborar, resolver conflictos y escribir código de manera eficiente. Fue una vista previa del mundo real de la programación y me ayudó a ganar confianza en mis habilidades.",
              image: "/images/blog3.jpeg",
            },
            {
              title: "Graduación: Un Nuevo Comienzo",
              content: "Finalmente, llegó el día de la graduación. Mirando hacia atrás, no podía creer cuánto había aprendido en tan poco tiempo. Mi experiencia en el bootcamp fue intensa y desafiante, pero también gratificante y emocionante. Con mi nuevo conjunto de habilidades, me sentía preparado para enfrentar el mundo de la programación. Después de graduarme, comencé a buscar trabajo en el campo de la programación. Fue un proceso competitivo, pero mi dedicación y mi portafolio de proyectos personales hicieron la diferencia. Finalmente, conseguí mi primer trabajo como desarrollador web junior. Mi experiencia en el bootcamp no solo transformó mi carrera, sino también mi vida. Me dio la confianza y las habilidades necesarias para perseguir mi pasión. Aunque el camino fue difícil, cada desafío me hizo más fuerte y me recordó que puedo lograr cualquier cosa con determinación y esfuerzo. En resumen, mi viaje en el bootcamp de programación fue una montaña rusa emocional, pero valió la pena cada momento. Hoy en día, estoy construyendo una carrera que amo y estoy emocionado por el futuro que me espera en el mundo de la tecnología. Si estás considerando un bootcamp, te animo a dar el salto y perseguir tus sueños; puede que te sorprenda lo que eres capaz de lograr.",
              image: "/images/blog2.jpeg",
            },
          ].map((section, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p>{section.content}</p>
              <Image className="rounded-md w-full mt-4" 
                  src={section.image} 
                  alt={`Imagen de ${section.title}`} 
                  width={500} 
                    height={300}/>
            </div>
          ))}
        </div>
        <div>
        <a
            className="flex items-center justify-center bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full px-4 py-2 transition duration-300 ease-in-out"
            href="/publicPage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14V6m0 0l-4 4m4-4l4 4"
              ></path>
            </svg>
            START A PROJECT
          </a>
        </div>
      </div>
    );
  }
  