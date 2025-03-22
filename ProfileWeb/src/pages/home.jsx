import React from "react";

export default function home() {
  return (
    <>
      <section id="home" className="flex justify-center items-center min-h-screen px-4">
        <div className="grid grid-cols-2 gap-4 w-full max-w-[450px]">
          <div className="text-xs sm:text-base">
            <p className="text-lg">Hello, It's me</p>
            <h1 className="text-2xl sm:text-3xl font-bold">Nateetan !</h1>
            <p className="text-lg">I'm a student</p>
            <p className="text-sm">
              Welcome to my profile website <br />
              this is my homework for CSC105
            </p>
            <div className="flex gap-2 py-2">
              <img className="max-h-[25px] sm:max-h-[30px]" src="src/images/reddit.png" alt="" />
              <img className="max-h-[25px] sm:max-h-[30px]" src="src/images/ig.png" alt="" />
              <img className="max-h-[25px] sm:max-h-[30px]" src="src/images/line.png" alt="" />
            </div>
            <button
              type="submit"
              className="h-[35px] sm:h-[40px] font-bold
                bg-green-600 my-1 px-4 rounded-full 
                text-center text-white border-1 border-black 
                hover:bg-white hover:border-1 hover:border-green-600 hover:text-green-600 
                shadow-lg"
            >
              My Portfolio
            </button>
          </div>
          <div className="flex justify-start">
            <img src="src/images/proflie.jpg" alt="" className="w-[150px] sm:w-[200px] h-fit" />
          </div>
        </div>
      </section>
    </>
  );
}
