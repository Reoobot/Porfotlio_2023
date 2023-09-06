import ImageMosaic from "./ImageMosaic";
import Videos from "./Videos";

export default function Project(){
    return(
        <div>
         <a href="/projectsPage" className="">
            <Videos/>
         </a>
         <a href="/projectsPage" className="">
         <ImageMosaic/>
         </a>
       </div>
    );

}