import Blog from "./Blog";
import Card from "./Card";
import Project from "./Project";
import Technologies from "./Technologies";

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
        </Card>
    )
}