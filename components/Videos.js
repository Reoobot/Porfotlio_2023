import React from "react";
export default function Videos(){
    return(
        <div>
            <h3 className="text-center font-medium mb-2">Online store</h3>
            <div className="px-3 mb-4">
                <video className="cv-video" autoPlay muted loop>
                    <source src="/video/3.mp4" type="video/mp4" />
                </video>
            </div>    
            <h3 className="text-center font-medium mb-2 mt-16">Back end of Shop</h3>
            <div className="px-3 pb-5">
                <video className="cv-video" autoPlay muted loop>
                    <source src="/video/2.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}