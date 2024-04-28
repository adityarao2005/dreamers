"use client";

import Floor from "@/components/three/floor";
import ToggleButton from "@/components/toggle_button";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "@/components/three/box";
import LightBulb from "@/components/three/light";
import OrbitControls from "@/components/three/orbitcontrols";

export default function Page() {
	const [cc, setCC] = React.useState(false);
	const [music, setMusic] = React.useState(false);
	const [volume, setVolume] = React.useState(false);

	const [word, setWord] = React.useState("");

	const handleCC = () => {
		setCC(!cc);
	};

	const handleMusic = () => {
		setMusic(!music);
	};

	const handleVolume = () => {
		setVolume(!volume);
	};

	const returnHome = () => {
		window.location.href = "/";
	};

	const handlePrompt = () => {
		if (word) {
			if (word.indexOf(" ") != -1) {
				alert("Please enter only one word.");
				return;
			}
			alert("You entered: " + word);
		} else {
			alert("Please enter a word.");
		}
	};

	return (
		<div className="flex flex-col min-h-screen bg-[url('/images/background.jpg')] bg-no-repeat bg-cover text-white">
			<div className='flex flex-col p-10'>
				<div>
					<h1 className='text-3xl font-bold mb-5'>
						Imaginative Travel
					</h1>
				</div>
				<div className='flex flex-col md:flex-row md:space-x-4 space-y-4'>
					<div>
						<Canvas
							shadows={true}
							camera={{
								position: [-6, 7, 7],
							}}
						>
							<ambientLight color={"white"} intensity={0.2} />
							<LightBulb position={[0, 3, 0]} />
							<LightBulb position={[3, 1, 0]} />
							<LightBulb position={[0, 1, 3]} />
							<LightBulb position={[-3, 1, 0]} />
							<LightBulb position={[0, 1, -3]} />
							<Box rotateX={3} rotateY={0.2} />
							<OrbitControls />
							<Floor position={[0, -1, 0]} />
						</Canvas>
					</div>
					<div className={cc ? "basis-2/3" : "flex-1"}>
						<img
							className='w-full h-96 object-cover rounded-lg'
							src='/images/nature - gemini.png'
						/>
					</div>
					{cc && (
						<div className='basis-1/3'>
							<h2 className='text-2xl font-bold'>Captions</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</p>
						</div>
					)}
				</div>
			</div>

			<div className='flex flex-col p-3 md:p-10'>
				<div className='flex flex-row space-x-4'>
					<div className='bg-white rounded-full size-8'>
						<img src='/images/1621577.png' />
					</div>
					<ToggleButton onClick={handleCC} />
					<div className='bg-white rounded-full size-8'>
						<img src='/images/sound-off-music-mute-off-sound-speaker-volume-icon-16.png' />
					</div>
					<ToggleButton onClick={handleMusic} />
					<div className='bg-white rounded-full size-8'>
						<img src='/images/sound-off-music-mute-off-sound-speaker-volume-icon-16.png' />
					</div>
					<ToggleButton onClick={handleVolume} />
				</div>
				<div className='flex flex-row my-4 space-x-1'>
					<button className='md:flex-1' onClick={returnHome}>
						<img src='/images/polygon 1.svg' />
					</button>
					<div className='flex-1 flex flex-row bg-[rgba(0,0,0,0.5)] rounded-3xl md:mx-4'>
						<input
							type='text'
							className='flex-1 bg-transparent pl-4 text-xl md:text-3xl'
							placeholder='Enter a word:'
							value={word}
							onChange={(e) => setWord(e.target.value)}
						/>
						<button
							className='bg-black border-white border-2 rounded-3xl p-2 size-12 md:size-24'
							onClick={handlePrompt}
						>
							<img
								src='/images/google-bard-logo-2D24045D5B-seeklogo.com.png'
								className='object-cover'
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
