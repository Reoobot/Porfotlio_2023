import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center my-4 font-semibold">
          My latest blog posts
        </h2>
      </div>
      <div className="text-center px-4">
        <Link href="/blogPage1" className="my-8">
          <Image
            className='rounded-md m-auto'
            src="https://www.davidhu.io/_astro/hero-image_pVqCX.avif"
            alt=""
            width={500} 
            height={300} 
          />
          <p className="my-2 font-medium">
            Transformando mi Vida en un Bootcamp de Programación: Una Historia de Desafíos y Éxito
          </p>
        </Link>
      </div>
    </div>
  );
}
