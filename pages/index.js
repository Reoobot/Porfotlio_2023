import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='flex mt-4 max-w-4xl mx-auto border-4'>
    <div className='w-1/3'>
    <div className='border border-black'>
      links
    </div>
    </div>
    <div>
      <div className='border border-black'>
        form
      </div>  
      posts
    </div>
   </div>
  )
}
