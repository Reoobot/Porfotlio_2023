export default function Videos(){
    return(
        <div>
            <h3 className="text-center font-medium mb-2">Social Page</h3>
            <div className="px-3 mb-4">
                <video className="cv-video" autoPlay muted loop>
                    <source src="/video/3.mp4" type="video/mp4" />
                </video>
            </div>    
            <h3 className="text-center font-medium mb-2">Social Page</h3>
            <div className="px-3 pb-5">
                <video className="cv-video" autoPlay muted loop>
                    <source src="/video/1.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}