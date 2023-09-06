import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";

export default function SoundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Sound Wave</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-600 z-10 relative p-3">
             
                "Sound Wave React" es una impresionante aplicación web que fusiona las tecnologías de React y Material-UI para brindar a los amantes de la música una experiencia única e interactiva. Esta aplicación está diseñada para explorar y disfrutar de la música de una manera totalmente nueva y envolvente.
              </p>
              <div className="m-auto px-5 p-5 relative">
                  <img className="rounded-md w-full cursor-pointer mb-36" src="/images/sonwave.jpeg" alt="Imagen de la aplicación Receta" />
                  <div className="absolute inset-0 flex justify-center items-center mb-20">
                <a href="https://leadin-page-soundwave.vercel.app/soudwave" target="_blank" rel="noopener noreferrer">
                <span className=" bg-green-400 hover:bg-green-500 text-white  mr-1 text-2xl font-medium shadow-lg shadow-gray-500 border solid p-1 rounded-sm ">Ir a este sitio web</span>  
                </a>
                  </div>
              </div>
            </div>
          </CardFront>
        </div>
      </div>
    </div>
  );
}
