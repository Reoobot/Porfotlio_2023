import React from "react";
export default function NavProject({children}) {
    return(
        <div className="bg-gray-400 shadow-md shadow-gray-500 rounded-md p-1 mb-5">
            {children}
        </div>
    );
}