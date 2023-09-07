import Link from "next/link";
import React from "react";

export default function Start() {
  const containerStyle = {
    backgroundColor: "#111827", 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={containerStyle}>
      <h2 className="text-5xl font-semibold text-white mb-8">
        <span className="animate-pulse text-shadow-md">
          Welcome to Freddy personal site.
        </span>
      </h2>
      <Link
        className="flex items-center justify-center bg-green-400 hover:bg-green-500 text-white font-semibold rounded-full px-4 py-2 transition duration-300 ease-in-out"
        href="/publicPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582-8-8-3.582-8-8-8zm0 14V6m0 0l-4 4m4-4l4 4"
          ></path>
        </svg>
        START A PROJECT
      </Link>
    </div>
  );
}
