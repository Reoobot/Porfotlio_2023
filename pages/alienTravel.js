import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AlienTravel() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Alien Travel</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-600 z-10 relative p-3">
              Alien Travel es una emocionante aplicación web que combina las tecnologías de HTML, 
              CSS y JavaScript para llevar a los usuarios a un viaje intergaláctico de exploración y 
              descubrimiento. Esta aplicación está diseñada para aquellos que desean experimentar aventuras 
              fuera de este mundo y explorar los misterios del espacio exterior.
              </p>
              <div className="m-auto px-5 p-5 relative">
                  <Image className="rounded-md w-full cursor-pointer mb-36" 
                       src="/images/travel.jpeg" 
                       alt="Imagen de la aplicación Alien travel"
                       width={500} 
                       height={300} 
                       />
                  <div className="absolute inset-0 flex justify-center items-center mt-72">
                <Link href="https://reoobot.github.io/Startup-Web-page/" target="_blank" rel="noopener noreferrer">
                  <span className=" bg-green-400 hover:bg-green-500 text-white  mr-1 text-2xl font-medium shadow-lg shadow-gray-500 border solid p-1 rounded-sm ">Ir a esta dirección</span>
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
