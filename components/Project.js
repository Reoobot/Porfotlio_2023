import Link from "next/link";
import ImageMosaic from "@/components/ImageMosaic";
import Videos from "@/components/Videos";
import React from "react";

export default function Project(){
    return(
        <div>
         <Link href="/projectsPage" className="">
            <Videos/>
         </Link>
         <Link href="/projectsPage" className="">
         <ImageMosaic/>
         </Link>
       </div>
    );

}