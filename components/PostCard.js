import React from "react";
import Blog from "@/components/Blog";
import ButtonStart from "@/components/ButtonStart";
import Card from "@/components/Card";
import Project from "@/components/Project";
import Technologies from "@/components/Technologies";

export default function PostCard(){
    return(
        <Card>
           <Blog/>
           <Technologies/>
            <div>
                <h2 className="text-3xl m-5 text-center font-semibold">
                   Project
                </h2>
            </div>
            <div>
                <Project/>
            </div>
           
                <ButtonStart/>
           
        </Card>
    )
}