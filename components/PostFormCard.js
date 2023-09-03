import Card from "./Card";

export default function PostFormCard(){
    return(
     
            <div className="relative ">
                <img className="m-auto mb-5 shadow-lg shadow-gray-7 00" src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="absolute top-20">
                    <div className="w-80 text-center ml-44 text-white">

                    <h2 className="text-4xl font-semibold ">
                    Welcome to Freddy personal site.
                    </h2><br/>
                    <p>I work as a Full Stack Engineer and write blogs "sometimes" about all things software "so far"</p>
                    </div>
                </div>
            </div>
        
    )
}