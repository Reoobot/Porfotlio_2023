import React from "react";
import NavigationCard from "@/components/NavigationCard";


export default function NavLayout({hideNavigation}) {
    let rightColumnClasses = '';

    if(hideNavigation) {
        rightColumnClasses += 'w-full';
    }else {
        rightColumnClasses += 'md:w-9/12'
    }

  return (
    <div className="md:flex mt-4 max-w-8xl mx-auto">
        {!hideNavigation && (
      <div className="fixed md:static w-full bottom-0  -mb-5 z-50">
        <NavigationCard />
      </div>
        )}
      <div className={rightColumnClasses}> 
        <div>
        </div>
      </div>
    </div>
  );
}
