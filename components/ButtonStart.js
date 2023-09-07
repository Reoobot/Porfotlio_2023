import Link from "next/link";

export default function ButtonStart(){
    return (
        <div className="text-center mb-28">
                <Link href="/projectsPage">
                    <span className=" bg-green-400 hover:bg-green-500 text-white  mr-1 text-2xl font-medium shadow-lg shadow-gray-500 border solid p-1 rounded-sm ">
                        Ver más
                    </span>  
                </Link>
        </div>
    )
}