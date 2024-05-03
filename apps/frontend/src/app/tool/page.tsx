"use client";

import ToggleButton from "@/components/toggle_button";
import { Canvas } from "@react-three/fiber";
import React, { use, useEffect } from "react";
import * as THREE from "three";
import ToolView from "@/components/three/tool-view";

const url = "http://localhost:8000";

function speakCaption(
	caption: string,
	synth: SpeechSynthesis
) {
	const pitch = 1;
	const rate = 1;

	const utterThis = new SpeechSynthesisUtterance(caption);
	const voices = synth.getVoices();
	for (const voice of voices) {
		if (voice.name === "Google UK English Male") {
			utterThis.voice = voice;
		}
	}
	utterThis.pitch = pitch;
	utterThis.rate = rate;

	synth.cancel();
	synth.speak(utterThis);
}

export default function Page() {
	// DOM Attributes
	const [synth, setSynth] = React.useState<SpeechSynthesis>();
	const [audio, setAudio] = React.useState<HTMLAudioElement>();
	// Data attributes
	const [music, setMusic] = React.useState(false);
	const [volume, setVolume] = React.useState(false);
	const [images, setImages] = React.useState([
		"/images/cube-face.png",
		"/images/cube-face.png",
		"/images/cube-face.png",
		"/images/cube-face.png",
		"/images/cube-face.png",
		"/images/cube-platform.png",
	]);
	const [caption, setCaptions] = React.useState(
		`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.!`
	);
	const [word, setWord] = React.useState("");

	// Side Effects
	useEffect(() => {
		if (window !== undefined) {
			const synth0 = window.speechSynthesis;
			setSynth(synth0);

			const audio0 = new Audio("/music.wav");
			setAudio(audio0);
		}
	}, []);

	const handleMusic = () => {
		setMusic(!music);

		if (music) {
			audio!.pause();
		} else {
			audio!.play();
		}
	};

	const handleVolume = () => {
		setVolume(!volume);

		if (volume) {
			synth!.cancel();
		} else {
			speakCaption(caption, synth!);
		}
	};

	const returnHome = () => {
		window.location.href = "/";
	};

	const handlePrompt = async () => {
		if (word) {
			if (word.indexOf(" ") != -1) {
				alert("Please enter only one word.");
				return;
			}
			// Call the API to generate the image
			const imageResponse = await fetch(`${url}/api/create_image`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt: word }),
			});
			const data = await imageResponse.json();
			const image_paths = data["image_urls"];
			image_paths.push("/images/cube-platform.png");

			// Set the image
			const captionResponse = await fetch(`${url}/api/generate_caption`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ word: word }),
			});
			const captionData = await captionResponse.json();
			const caption = captionData["caption"];

			setImages(image_paths);
			setCaptions(caption);

			if (volume) {
				speakCaption(caption, synth!);
			}
		} else {
			alert("Please enter a word.");
		}
	};

	return (
		<div className="flex flex-col max-w-screen min-h-screen bg-[url('/images/background-tool.png')] bg-no-repeat bg-cover text-white">
			<div className='flex flex-col p-10 flex-1'>
				<div>
					<h1 className='text-3xl font-bold mb-5'>
						Imaginative Travel
					</h1>
				</div>
				<div className='flex flex-col md:max-w-screen md:flex-row md:space-x-4 space-y-4 flex-1'>
					<div className='basis-2/3'>
						<ToolView images={images} />
					</div>
					<div className='basis-1/3'>
						<h2 className='text-2xl font-bold'>Captions</h2>
						<p>{caption}</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col p-3 md:p-10 md:pt-0'>
				<div className='flex flex-row space-x-4'>
					<div className='rounded-full size-8'>
						<img src='/images/speak-icon.png' />
					</div>
					<ToggleButton onClick={handleVolume} />
					<div className='rounded-full size-8'>
						<img src='/images/volume-icon.png' />
					</div>
					<ToggleButton onClick={handleMusic} />
				</div>
				<div className='flex flex-row my-4 space-x-1'>
					<button onClick={returnHome}>
						<img
							src='/images/polygon 1.svg'
							className='hover:brightness-50'
						/>
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
