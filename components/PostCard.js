import React from "react";
import Blog from "@/components/Blog";
import ButtonStart from "@/components/ButtonStart";
import Card from "@/components/Card";
import Project from "@/components/Project";
import Technologies from "@/components/Technologies";
import SocialIcons from "./SocialIcons";


export default function PostCard(){
    return(
        <Card>
           <Blog/>
           <Technologies/>
            <div className="z-20">
                <Project/>
            </div>
           <div className="">
            <ButtonStart/>
           </div>
            <div>
             <SocialIcons/>
             </div>
        </Card>
    )
}