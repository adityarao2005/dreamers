"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
	const toolPage = () => {
		window.location.href = "/tool";
	};

	return (
		<div className='relative min-h-screen bg-[url("/images/mobilestartbackground3.png")] md:bg-[url("/images/startbackground.png")] bg-cover bg-center'>
			<div className='absolute inset-0 flex flex-col items-center justify-center z-10'>

				<p className='text-white text-center text-2xl font-bold mb-10 drop-shadow-2lg'>
				
				</p>

				<p className='text-white text-center md:text-2xl font-bold mt-60 md:mt-40 drop-shadow-8xl'>
					An immersive GenAI experience
				</p>

				<p className='text-center text-lg text-3x1 font-bold mb-5'></p>

				<p className='text-white text-center text-sm md:text-xl mb-5 drop-shadow-8xl'>
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

				<p className='text-white text-center text-sm mt-10 drop-shadow-sm mb-10'>
					By Aditya Rao, Oliver Lai Wai, and Kamakshi Sarva
				</p>

				<Image
				src="/images/DreamersLogo.png" // Replace with your logo path
				alt="Your Company Logo"
				width={70} // Adjust width and height as needed
				height={70}
				className="rounded-full opacity-90" // Add rounded-full class for circle shape

				/>

			</div>
		</div>
	);
}
