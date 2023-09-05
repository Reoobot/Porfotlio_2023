import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";


export default function ProjectsPage() {
  return (
      <div className="sm:flex sm:mt-4 sm:max-w-4xl sm:mx-auto sm:gap-6">
        <div className="">
          {/* <div className="bg-gray-400 shadow-md shadow-gray-500 rounded-md p-1 mb-5"> */}
           <NavLayout/>
          {/* </div> */}
       </div>
       <div>
        {/* <div className="bg-gray-400 shadow-md shadow-gray-500 rounded-md p-1 mb-5"> */}
          <div className="">

          <CardFront>
          <a href="/hotelPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Reservación-Hotel
                  </h2>
              </div>
            <div className="m-auto px-5 p-5">
              <img className="rounded-md " src="/images/hotel.jpeg" alt=""/>
            </div>
          </a>

          <a href="/socialPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Social Page
                  </h2>
              </div>
            <div className="m-auto px-5 p-5">
              <img className="rounded-md " src="/images/social1.jpeg" alt=""/>
            </div>
          </a>
          <a href="/ShopPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Shop-Oline
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/tiendaOline.jpeg" alt=""/>
            </div>
          </a>
          <a href="/chatPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Chat
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/chat.jpeg" alt=""/>
            </div>
          </a>

          <a href="/game">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  The Dog
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/game.jpeg" alt=""/>
            </div>
          </a>

          <a href="/payPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Metodo de Pay "Stripe"
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/pay.jpeg" alt=""/>
            </div>
          </a>

          <a href="/folioPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                 Portfolio Factoría F5
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/porfolio.2.jpeg" alt=""/>
            </div>
          </a>

          <a href="/uploadImage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                 Upload-Imagen
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/imagenes.jpeg" alt=""/>
            </div>
          </a>

          <a href="/marketPlace">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  MarketPlace
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/marketplace.jpeg" alt=""/>
            </div>
          </a>

          <a href="/portFolio">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Porfolio-BootCamp
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/porfolio.1.jpeg" alt=""/>
            </div>
          </a>  

          <a href="/soundPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                    Sound Wave
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/sonwave.2.jpeg" alt=""/>
            </div>
          </a>  

          <a href="/alienTravel">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                    Alien Travel
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/travel.jpeg" alt=""/>
            </div>
          </a>  

          <a href="/recetaPage">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                    Receta Social
                  </h2>
              </div>
            <div className="m-auto px-5  p-5">
              <img className="rounded-md " src="/images/receta.jpeg" alt=""/>
            </div>
          </a>  
          </CardFront>
          </div>
       </div>
   
    </div>



  );
}
