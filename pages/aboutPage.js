import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function AboutPage() {
    const containerStyle = {
        backgroundColor: "#111827",
    };

    const imageNames = [
        'a.jpg',
        'b.jpeg',
        'c.jpeg',
        'd.jpeg',
        'f.jpeg',
        'g.jpeg',
        'h.jpeg',
       
        ];

    return (
        <div>
            <div className="h-full p-5" style={containerStyle}>
                <div className="mt-20">
                    <p className="text-white px-6 mb-3">Saludos,</p>
                    <p className="text-white px-6">Mi nombre es Freddy Vegas y soy un desarrollador Full Stack Junior con un año de experiencia en el campo de la tecnología. Desde que ingresé a esta apasionante industria, he tenido la oportunidad de trabajar en diversos proyectos y equipos, lo que me ha permitido desarrollar una comprensión sólida de la programación y la creación de aplicaciones web. Durante mi trayecto profesional, he participado en el desarrollo y mantenimiento de aplicaciones web de alto rendimiento, contribuyendo con mi conocimiento en tecnologías front-end y back-end. Estoy familiarizado con lenguajes de programación como JavaScript, Python y frameworks como React y Django. Lo que más me motiva en este campo es la resolución de problemas y la creación de soluciones innovadoras. Disfruto colaborar en equipo y aprender constantemente, ya que creo que la tecnología evoluciona rápidamente y es fundamental mantenerse actualizado. Mi enfoque es seguir creciendo como profesional, asumiendo nuevos desafíos y aprovechando mi pasión por la programación para contribuir al éxito de su empresa. Estoy emocionado por la posibilidad de formar parte de su equipo y aportar mi experiencia y entusiasmo para enfrentar nuevos proyectos. Gracias por considerar mi perfil y espero tener la oportunidad de conversar con ustedes sobre cómo puedo contribuir al crecimiento y éxito de su organización.</p>
                    <div className="text-white px-6 mt-3 mb-4">
                        <p>Atentamente,</p>
                        <p>Freddy Vegas</p>
                    </div>
                    <div className="border-socialBg p-3 w-80 md:w-4/12 m-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} 
        transitionTime={500} 
      >
        {imageNames.map((imageName, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              className="w-full h-auto border border-gray-500 transform transition-transform hover:scale-105"
              src={`/images/${imageName}`} // Ruta relativa a la carpeta "public"
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
                </div>
                <div>
                    <a
                        className="flex items-center m-auto w-52 justify-center bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full px-4 py-2 transition duration-300 ease-in-out"
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
        </div>
    );
}
