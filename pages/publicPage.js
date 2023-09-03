import NavigationCard from "@/components/NavigationCard";
import PostCard from "@/components/PosctCard";
import PostFormCard from "@/components/PostFormCard";

export default function PublicPage(){
    return(
        <div className='flex mt-4 max-w-4xl mx-auto gap-6'>
        <div className='w-1/3'>
          <NavigationCard/>
        </div>
        <div className='grow'>
          <PostFormCard/>
          <div>
         <PostCard/>
          </div>
        </div>
       </div>
    )
}