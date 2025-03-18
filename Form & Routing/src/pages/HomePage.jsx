import React from "react";
import Navbar from "./../components/Navbar";

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center m-10 min-h-screen">
        <div className="w-[450px] h-[100px] bg-white rounded-2xl flex justify-center items-center shadow-lg">
          <h1 className="text-2xl font-bold text-pink-600">
            Welcome to the Home Page!
          </h1>
        </div>
      </div>
    </>
  );
}
