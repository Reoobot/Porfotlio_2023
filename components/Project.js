import Link from "next/link";
import ImageMosaic from "./ImageMosaic";
import Videos from "./Videos";

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