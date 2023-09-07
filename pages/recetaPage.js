import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecetaPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Receta Social</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <p className="text-gray-600 z-10 relative p-3">
                Receta social es una aplicación web culinaria que combina la potencia de MongoDB, React, JavaScript y 
                CSS para brindar a los usuarios una experiencia excepcional en la búsqueda, almacenamiento y 
                ompartición de recetas de cocina. Esta aplicación se centra en la pasión por la cocina y la exploración 
                de nuevas creaciones culinarias.
              </p>
              <div className="m-auto flex justify-center mt-8">
                      <Link href="/alienTravel" className="items-center">
                        <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-xl font-medium shadow-lg">
                          Volver
                        </span>
                      </Link>
                      <Link href="/hotelPage" className="items-center ml-3">
                        <span className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-xl font-medium shadow-lg">
                          Seguir
                        </span>
                      </Link>
              </div>
              </div>
              <div className="m-auto px-5 p-5 relative">
                  <Image className="rounded-md w-full cursor-pointer mb-36" 
                        src="/images/receta.jpeg" 
                        alt="Imagen de la aplicación Receta" 
                        width={500} 
                        height={300}/>
                  <div className="absolute inset-0 flex justify-center items-center">
                <Link href="https://client-six-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className=" bg-green-400 hover:bg-green-500 text-white  mr-1 text-2xl font-medium shadow-lg shadow-gray-500 border solid p-1 rounded-sm ">Ir a este sitio web</span>  
                </Link>
                  </div>
              </div>
            </div>
          </CardFront>
        </div>
      </div>
    </div>
  );
}
