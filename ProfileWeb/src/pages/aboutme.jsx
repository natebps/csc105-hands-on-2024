import React from 'react'

export default function aboutme() {
  return (
    <>
      <section id="aboutme" className="flex justify-center items-center min-h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[450px]">
          <div className="flex justify-center md:justify-start">
            <img src="src/images/proflie.jpg" alt="" className="w-[200px] h-fit" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">About ME !</h1>
            <p className="text-sm font-medium">Nateetan Buaprasert</p>
            <p className=" text-xs py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div></div>
            <button
              type="submit"
              className=" h-[40px] font-bold
        bg-green-600 my-4 px-4 rounded-full 
            text-center text-white border-1 border-black 
            hover:bg-white hover:border-1 hover:border-green-600 hover:text-green-600 
            shadow-lg"
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
