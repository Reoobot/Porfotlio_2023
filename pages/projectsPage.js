import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";


export default function ProjectsPage() {
  return (
      <div className="sm:flex sm:mt-4 sm:max-w-4xl sm:mx-auto sm:gap-6">
        <div className="">
          <NavLayout/>
       </div>
       <div>
          <div className="">
          <CardFront>
          <div className="relative text-center">
            <div>
                <h2 className="text-3xl p-2 text-center font-semibold">
                    Reservación Hotel
                </h2>
            </div>
            <img
              className="rounded-md"
              src="/images/hotel.jpeg"
              alt=""
            />
            <a
          href="/hotelPage"
          className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
            Ver
        </a>
            
          </div>


    <div className="relative text-center">
      <div>
              <h2 className="text-3xl p-2 text-center font-semibold mt-10">
                  Page social
              </h2>
      </div>
      <img
        className="rounded-md"
        src="/images/social1.jpeg"
        alt=""
      />
        <a
          href="/socialPage"
          className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
            Ver
        </a>
    </div>

         
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold mt-10">
                  Shop-Oline
                  </h2>
            </div>
              <img className="rounded-md " src="/images/tiendaOline.jpeg" alt=""/>
              <a
                href="/ShopPage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
            
            
          
        
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Chat
                  </h2>
              </div>
         
              <img className="rounded-md " src="/images/chat.jpeg" alt=""/>
              <a
                href="/chatPage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
              
            </div>
        

         
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  The Dog
                  </h2>
              </div>
            
              <img className="rounded-md " src="/images/game.jpeg" alt=""/>
              <a
                href="/game"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
          

      
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Metodo de Pay "Stripe"
                  </h2>
              </div>
           
              <img className="rounded-md " src="/images/pay.jpeg" alt=""/>
              <a
                href="/payPage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
        

        
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                 Portfolio Factoría F5
                  </h2>
              </div>
          
              <img className="rounded-md " src="/images/porfolio.2.jpeg" alt=""/>
              <a
                href="/folioPage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
      

        
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                 Upload-Imagen
                  </h2>
              </div>
           
              <img className="rounded-md " src="/images/imagenes.jpeg" alt=""/>
              <a
                href="/uploadImage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
    

         
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  MarketPlace
                  </h2>
              </div>
         
              <img className="rounded-md " src="/images/marketplace.jpeg" alt=""/>
              <a
                href="/marketPlace"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
        

         
            <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                  Porfolio-BootCamp
                  </h2>
              </div>
        
              <img className="rounded-md " src="/images/porfolio.1.jpeg" alt=""/>
              <a
                href="/portFolio"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
           

      
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                    Sound Wave
                  </h2>
              </div>
          
              <img className="rounded-md " src="/images/sonwave.2.jpeg" alt=""/>
              <a
                href="/soundPage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
          

               
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                    Alien Travel
                  </h2>
              </div>
           
              <img className="rounded-md " src="/images/travel.jpeg" alt=""/>
              <a
                href="/alienTravel"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
     

    
          <div className="relative text-center">
            <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                    Receta Social
                  </h2>
              </div>
          
              <img className="rounded-md mb-52 " src="/images/receta.jpeg" alt=""/>
              <a
                href="/recetaPage"
                className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              >
                Ver
                </a>
            </div>
          
          </CardFront>
          </div>
       </div>
   
    </div>



  );
}
