import React from "react";
import Contact from "./contact";

export default function navbar() {
  return (
    <>
      <div className="relative flex items-center justify-between p-4 w-screen bg-[rgba(39,184,92,0.5)]">
        <h2 className="font-bold text-base sm:text-2xl whitespace-nowrap">Nateetan</h2>

        <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-6 text-xs sm:text-base whitespace-nowrap">
          <a
            href="#home"
            className="hover:bg-white font-bold px-2 sm:px-4 rounded-full"
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="hover:bg-white font-bold px-2 sm:px-4 rounded-full"
          >
            About me
          </a>
          <a
            href="#gallery"
            className="hover:bg-white font-bold px-2 sm:px-4 rounded-full"
          >
            Gallery
          </a>
        </nav>

        <div className="whitespace-nowrap">
          <Contact />
        </div>
      </div>
    </>
  );
}
