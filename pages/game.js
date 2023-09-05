import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";

export default function Game() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Game-The Dog</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-600 z-10 relative p-3">
              "Game The Dog" es una encantadora aplicación web desarrollada con las tecnologías fundamentales de HTML, CSS y JavaScript. Esta aplicación ofrece una experiencia de juego lúdica y entretenida centrada en cuidar y jugar con una mascota virtual, un perro. Ideal para amantes de los animales y entusiastas de los juegos casuales, "Game The Dog" ofrece una experiencia relajante y adictiva.
              </p>
              <div className="m-auto px-5 p-5 relative">
                <a href="https://reoobot.github.io/Marketplace/home" target="_blank" rel="noopener noreferrer">
                  <img className="rounded-md w-full cursor-pointer" src="/images/game.jpeg" alt="Imagen de la aplicación Receta" />
                  <div className="absolute inset-0 flex justify-center items-center mb-32">
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
