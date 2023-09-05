import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";

export default function UploadImage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Upload-Imagen</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-600 z-10 relative p-3">
             
              "Upload Imágenes" es una aplicación web diseñada con tecnologías modernas como Next.js y Tailwind CSS, que ofrece una solución efectiva y conveniente para cargar y gestionar imágenes en línea. Esta aplicación es especialmente útil para aquellos que desean compartir imágenes, fotos o gráficos con otros usuarios, ya sea con fines personales o profesionales.


              </p>
              <div className="m-auto px-5 p-5 relative">
                <a href="https://my-app-imagen.vercel.app" target="_blank" rel="noopener noreferrer">
                  <img className="rounded-md w-full cursor-pointer mb-36" src="/images/imagenes.jpeg" alt="Imagen de la aplicación Receta" />
                  <div className="absolute inset-0 flex justify-center items-center mb-20">
                    <span className="text-blue-500 mr-1">Ir a esta dirección:</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </CardFront>
        </div>
      </div>
    </div>
  );
}
