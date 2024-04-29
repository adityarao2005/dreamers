"use client";

import Image from "next/image";
import React from "react";

export default function Home() {

  const toolPage = () => {
		window.location.href = "/tool";
	};

  return (

    <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-[url('/images/bgtest9.png')] justify-center">
	
      <div className="flex flex-col h-full items-center">

        <p className="text-white text-center text-lg mb-40">

        </p>

        <p className="text-white text-center text-lg text-3xl font-bold">
          An immersive GenAI experience
        </p>

        <p className="text-white text-center text-lg mb-8">
          Powered by Gemini
        </p>

        <button className="border border-white rounded-lg py-2 px-4 
        rounded-full bg-opacity-10 hover:bg-gray-200 hover:bg-gray-200/50 text-white font-bold text-center text-lg"
        onClick={toolPage}>
            Click to Start
          </button>

      </div>

    </div>
  );
}