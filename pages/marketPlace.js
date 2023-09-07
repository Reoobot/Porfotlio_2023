import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MarketPlace() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">MarketPlace</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 z-10 relative p-3">
                Marketplace es una aplicación web versátil y altamente funcional creada con tecnologías esenciales 
                como HTML, CSS y JavaScript. Esta plataforma redefine la forma en que compradores y vendedores interactúan 
                en línea, proporcionando un entorno seguro y eficiente para la compra y venta de productos y servicios.
                </p>
                <div className="m-auto flex justify-center mt-8">
                      <Link href="/uploadImage" className="items-center">
                      <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-xl font-medium shadow-lg">
                      Volver
                      </span>
                      </Link>
                      <Link href="/portFolio" className="items-center ml-3">
                        <span className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-xl font-medium shadow-lg">
                        Seguir
                        </span>
                      </Link>
                  </div>
              </div>
              <div className="m-auto px-5 p-5 relative">
                  <Image className="rounded-md w-full cursor-pointer" 
                  src="/images/marketplace.jpeg" 
                  alt="Imagen de la aplicación Marketplace" 
                  width={500} 
                  height={300}/>
                  <div className="absolute inset-0 flex justify-center items-center mb-32">
                <Link href="https://reoobot.github.io/Marketplace/home" target="_blank" rel="noopener noreferrer">
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
