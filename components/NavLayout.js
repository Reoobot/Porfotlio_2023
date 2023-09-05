import NavigationCard from "@/components/NavigationCard";
import PostCard from "@/components/PostCard"; 
import PostFormCard from "@/components/PostFormCard";
import NavProject from "./NavProject";

export default function NavLayout({hideNavigation}) {
    let rightColumnClasses = '';

    if(hideNavigation) {
        rightColumnClasses += 'w-full';
    }else {
        rightColumnClasses += 'm:w-9/12'
    }

  return (
    <div className="md:flex mt-4 max-w-8xl mx-auto ">
        {!hideNavigation && (
      <div className="fixed md:static w-full bottom-0  -mb-5">
        <NavigationCard />
      </div>
        )}
      <div className={rightColumnClasses}> {/* Corregido para ocupar el espacio restante */}
        {/* <PostFormCard /> */}
        <div>
          {/* <NavProject /> */}
        </div>
      </div>
    </div>
  );
}
