import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';


const ImageMosaic = () => {
 
  const imageNames = [
    'chat.jpeg',
    'game.jpeg',
    'hotel.jpeg',
    'imagenes.jpeg',
    'marketplace.jpeg',
    'pay.jpeg',
    'porfolio.1.jpeg',
    'sonwave.jpeg',
    'tiendaOline.jpeg',
    'travel.jpeg',
    'social1.jpeg',
    'hotel2.jpeg',
    'porfolio.2.jpeg',
    'social2.jpeg',
   
  ];

  return (
    <div className="border-socialBg p-3">
      <div className='mt-20'>
        <h2 className="text-3xl text-center my-4 font-semibold">
          My Projects
        </h2>
      </div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} 
        transitionTime={500} 
      >
        {imageNames.map((imageName, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md w-60 m-auto mt-3">
            <Image
              src={`/images/${imageName}`} 
              alt={`Imagen ${index + 1}`}
              width={500} 
              height={300} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageMosaic;
