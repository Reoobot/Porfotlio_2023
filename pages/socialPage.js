import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";

export default function SocialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Social Page</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-600 z-10 relative p-3">
              Social Page es una impresionante aplicación web creada con tecnologías de vanguardia como Next.js y 
              Style Company, respaldada por potentes soluciones en la nube como Superbase, Google Cloud y AWS. 
              Esta plataforma redefine la experiencia de las redes sociales al ofrecer una amplia gama de funciones 
              innovadoras y una robusta infraestructura en la nube para garantizar un rendimiento óptimo.
              </p>
             
              <div className="m-auto px-5 p-5 relative">
                  <img className="rounded-md w-full cursor-pointer mb-20" 
                        src="/images/social2.jpeg" 
                        alt="Imagen de la aplicación Tienda oline" 
                        width={500} 
                        height={300}/>
                  <div className="absolute inset-0 flex justify-center items-center">
                <a href="https://social-pv5.vercel.app  " target="_blank" rel="noopener noreferrer">
                  <span className=" bg-green-400 hover:bg-green-500 text-white  mr-1 text-2xl font-medium shadow-lg shadow-gray-500 border solid p-1 rounded-sm ">Ir a este sitio web</span>  
                </a>
                  </div>
              </div>
              <div className="m-auto">
      
              </div>
            </div>
          </CardFront>
        </div>
      </div>
    </div>
  );
}
