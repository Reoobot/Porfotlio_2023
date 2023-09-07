import CardFront from "@/components/CardFront";
import NavLayout from "@/components/NavLayout";
import React from "react";
import Image from 'next/image'
import Link from "next/link";

export default function ProjectsPage() {
  return (
      <div className="sm:flex sm:mt-4 sm:max-w-4xl sm:mx-auto sm:gap-6 ">
        <div className="mr-11">
          <NavLayout/>
       </div>
       <div className="text-center w-80 sm:w-auto m-auto"> 

        <div >
            <div className="">
            <CardFront>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                  <h2 className="text-3xl p-2 text-center font-semibold">
                      Reservación Hotel
                  </h2>
              </div>
              <Image 
                  className="rounded-md p-4"
                  src="/images/hotel.jpeg"
                  alt=""
                  width={500} 
                  height={300} 
                />
              <Link
            href="/hotelPage"
            className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
              Ver
          </Link>
              
            </div>
      <div className="relative text-center border-b shadow-lg m-3">
        <div>
                <h2 className="text-3xl p-2 text-center font-semibold mt-10">
                    Page social
                </h2>
        </div>
        <Image
        className="rounded-md p-4"
          src="/images/social1.jpeg"
          alt=""
          width={500} 
          height={300}
        />
          <Link
            href="/socialPage"
            className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          >
              Ver
          </Link>
      </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold mt-10">
                    Shop Oline
                    </h2>
              </div>
                <Image className="rounded-md " 
                src="/images/tiendaOline.jpeg" 
                alt=""
                width={500} 
                height={300}/>
                <Link
                  href="/ShopPage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                    Chat
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                      src="/images/chat.jpeg" 
                      alt=""
                      width={500} 
                      height={300}/>
                <Link
                  href="/chatPage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
                
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                    The Dog
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                    src="/images/game.jpeg" 
                    alt=""
                    width={500} 
                    height={300}/>
                <Link
                  href="/game"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                    Metodo de Pay Stripe
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                      src="/images/pay.jpeg" 
                      alt=""
                      width={500} 
                      height={300}/>
                <Link
                  href="/payPage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                  Portfolio Factoría F5
                    </h2>
                </div>
                <Image className="rounded-md p-4 z"
                    src="/images/porfolio.2.jpeg" 
                    alt=""
                    width={500} 
                    height={300}/>
                <Link
                  href="/folioPage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                  Upload-Imagen
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                    src="/images/imagenes.jpeg" 
                    alt=""
                    width={500} 
                    height={300}/>
                <Link
                  href="/uploadImage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                    MarketPlace
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                      src="/images/marketplace.jpeg" 
                      alt=""
                      width={500} 
                      height={300}/>
                <Link
                  href="/marketPlace"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
              <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                    Porfolio BootCamp
                    </h2>
                </div>
          
                <Image className="rounded-md p-4"
                      src="/images/porfolio.1.jpeg" 
                      alt=""
                      width={500} 
                      height={300}/>
                <Link
                  href="/portFolio"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                      Sound Wave
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                    src="/images/sonwave.2.jpeg" 
                    alt=""
                    width={500} 
                    height={300}/>
                <Link
                  href="/soundPage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>  
            <div className="relative text-center border-b shadow-lg m-3">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                      Alien Travel
                    </h2>
                </div>
            
                <Image className="rounded-md p-4"
                    src="/images/travel.jpeg" 
                    alt=""
                    width={500} 
                    height={300}/>
                <Link
                  href="/alienTravel"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            <div className="relative text-center border-b shadow-lg m-3 mb-40">
              <div>
                    <h2 className="text-3xl p-2 text-center font-semibold">
                      Receta Social
                    </h2>
                </div>
                <Image className="rounded-md p-4"
                      src="/images/receta.jpeg" 
                      alt=""
                      width={500} 
                      height={300}/>
                <Link
                  href="/recetaPage"
                  className="absolute inset-0 flex w-20 h-14 items-center justify-center  bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded-lg hover:bg-sportyfly-dark-blue transition duration-300"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  Ver
                  </Link>
              </div>
            </CardFront>
            </div>
            <div>
              
            </div>
        </div>
       </div>
    </div>



  );
}
