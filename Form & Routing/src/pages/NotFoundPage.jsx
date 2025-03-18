import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex justify-center m-10 min-h-screen">
        <div className="w-[450px] h-[300px] bg-white rounded-2xl flex-col">
          <div className="flex justify-center items-center py-10 font-bold text-4xl text-pink-800">404 - Page Not Found.</div>
          <div className="flex justify-center items-center">
            <button className="w-[150px] h-[60px] bg-pink-300 rounded-2xl flex justify-center items-center font-bold hover:bg-white hover:border-s-pink-300 hover:border-2">
              <Link to="/">Back To HOME</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
