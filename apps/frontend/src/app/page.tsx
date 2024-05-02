"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
	const toolPage = () => {
		window.location.href = "/tool";
	};

	return (
		<div className='relative min-h-screen bg-[url("/images/mobilestartbackground.png")] md:bg-[url("/images/startbackground.png")] bg-cover bg-center'>
			<div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
				<p className='text-white text-center text-3xl font-bold mt-40 drop-shadow-2lg'>
					An immersive GenAI experience
				</p>

				<p className='text-center text-lg text-3x1 font-bold mb-5'></p>

				<p className='text-white text-center text-xl mb-5 drop-shadow-2lg'>
					Powered by Gemini
				</p>

				<p className='text-center text-lg text-3x1 font-bold mb-5'></p>

				<button
					className='border border-white rounded-lg py-2 px-4 
        rounded-full bg-opacity-10 hover:bg-gray-200 hover:bg-gray-200/50 text-white font-bold text-center text-xl'
					onClick={toolPage}
				>
					START
				</button>

				<p className='text-center text-lg text-3x1 font-bold mb-5'></p>

				<p className='text-white text-center text-sm mt-10 drop-shadow-sm'>
					By Aditya Rao, Oliver Lai Wai, and Kamakshi Sarva
				</p>
			</div>
		</div>
	);
}
