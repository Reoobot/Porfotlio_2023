export default function Project(){
    return(
        <div>
            <div >
                <h3>Social Media</h3>
            </div>
         <div className="mt-4 max-w-4xl mx-auto gap-6 rounded-lg shadow-lg shadow-gray-300">
            <video controls autoPlay width="640" height="360" className="w-full h-full object-cover rounded-lg mb-5">
                <source src="/video/1.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>
        <div >
                <h3 className="">Social Media</h3>
            </div>
         <div className="mt-4 mb-16 max-w-4xl mx-auto gap-6 rounded-lg shadow-lg shadow-gray-300">
            <video controls autoPlay width="640" height="360" className="w-full h-full object-cover rounded-lg">
                <source src="/video/1.mp4" type="video/mp4" />
        
            </video>
        </div>
       </div>
    );

}