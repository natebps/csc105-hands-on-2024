import React from "react";

export default function gallery() {
  return (
    <>
      <section id="gallery" className="flex justify-center min-h-screen">
      <div className="m-10">
        <h1 className="text-3xl font-bold flex justify-center m-4">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[600px]">
          <img src="src/images/food.jpg" alt="" className="h-[120px] rounded-2xl object-cover w-full" />
          <img src="src/images/mountain.jpg" alt="" className="h-[120px] rounded-2xl object-cover w-full" />
          <img src="src/images/church.jpg" alt="" className="h-[120px] rounded-2xl object-cover w-full" />
          <img src="src/images/mountain1.jpg" alt="" className="h-[120px] rounded-2xl object-cover w-full" />
          <img src="src/images/dubai.jpg" alt="" className="h-[120px] rounded-2xl object-cover w-full" />
          <img src="src/images/mountain3.jpg" alt="" className="h-[120px] rounded-2xl object-cover w-full" />
        </div>
      </div>
    </section>
    </>
  );
}
