import NavigationCard from "@/components/NavigationCard";
import PostCard from "@/components/PostCard"; 
import PostFormCard from "@/components/PostFormCard";

export default function Layout({hideNavigation}) {
    let rightColumnClasses = '';

    if(hideNavigation) {
        rightColumnClasses += 'w-full';
    }else {
        rightColumnClasses += 'md:w-9/12'
    }

  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6">
        {!hideNavigation && (

      <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
        <NavigationCard />
      </div>
        )}
      <div className={rightColumnClasses}> 
        <PostFormCard />
        <div>
          <PostCard />
        </div>
      </div>
    </div>
  );
}
