export default function Blog(){
    return(
        <div>
            <div>
                <h2 className="text-3xl text-center my-4 font-semibold">
                    My latest blog posts
                </h2>
            </div>
            <div className="text-center">
                <div className="my-8">
                    <img className='rounded-md m-auto'  src="https://www.davidhu.io/_astro/hero-image_pVqCX.avif" alt=""/>
                    <p className="my-2">First Post on My new Blog</p>
                </div>
                <div className="my-8">
                    <img className='rounded-md m-auto' src="https://www.davidhu.io/_astro/hero-image_pVqCX.avif" alt=""/>
                    <p className="my-2">First Post on My new Blog</p>
                </div>
                <div className="my-8">
                    <img className='rounded-md m-auto' src="https://www.davidhu.io/_astro/hero-image_pVqCX.avif" alt=""/>
                    <p className="my-2">First Post on My new Blog</p>
                </div>
            </div>
        </div>
    );
}