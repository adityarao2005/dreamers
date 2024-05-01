"use client";

import Image from "next/image";
import React from "react";

export default function Home() {

  const toolPage = () => {
		window.location.href = "/tool";
	};

  return (

    <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-[url('/images/startbackground.png')] justify-center">
	
      <div className="flex flex-col h-full items-center">

        <p className = "text-center text-lg text-3x1 font-bold mb-20">


        </p>

        <p className = "text-center text-lg text-3x1 font-bold mb-5">


        </p>

        <p className="text-white text-center text-xl font-bold mt-40">
          An immersive GenAI experience
        </p>

        <p className = "text-center text-lg text-3x1 font-bold mb-5">


        </p>

        <p className="text-white text-center text-xl mb-5">
          Powered by Gemini
        </p>

        <p className = "text-center text-lg text-3x1 font-bold mb-5">


        </p>

        <button className="border border-white rounded-lg py-2 px-4 
        rounded-full bg-opacity-10 hover:bg-gray-200 hover:bg-gray-200/50 text-white font-bold text-center text-xl"
        onClick={toolPage}>
            START
        </button>

   
        <p className = "text-center text-lg text-3x1 font-bold mb-5">
          
        </p>
          
        
        <p className="text-white text-center text-sm mt-10">
          By Aditya Rao, Oliver Lai Wai, and Kamakshi Sarva
        </p>


      </div>

    </div>
  );
}