import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";

export default function chatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <NavLayout />
        </div>
        <div className="md:w-3/4">
          <CardFront>
            <div className="mb-4">
              <h1 className="text-3xl font-semibold p-3">Chat</h1>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-gray-600 z-10 relative p-3">
              "Chat The Dog" es una aplicación web ingeniosa desarrollada utilizando las tecnologías fundamentales de HTML, CSS y JavaScript. Esta aplicación ofrece una experiencia de chat única y entretenida, donde los usuarios pueden interactuar y conversar con una mascota virtual, un simpático perro. Es una opción perfecta para quienes buscan una experiencia de chat lúdica y amigable.
              </p>
              <div className="m-auto px-5 p-5 relative">
                <a href="https://chat-coral-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img className="rounded-md w-full cursor-pointer" src="/images/chat.jpeg" alt="Imagen de la aplicación Receta" />
                  <div className="absolute inset-0 flex justify-center items-center mt-72">
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
