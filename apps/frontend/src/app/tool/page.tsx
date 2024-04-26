import ToggleButton from "@/components/toggle_button";
import React from "react";

export default function Page() {
	return (
		<div className="flex flex-col min-h-screen bg-[url('/images/background.jpg')] bg-no-repeat bg-cover text-white">
			<div className='flex flex-col p-10'>
				<div>
					<h1 className='text-3xl font-bold mb-5'>
						Imaginative Travel
					</h1>
				</div>
				<div className='flex flex-row space-x-4'>
					<div className='basis-2/3 '>
						<img
							className='w-full h-96 object-cover rounded-lg'
							src='/images/nature - gemini.png'
						/>
					</div>
					<div className='basis-1/3'>
						<h2 className='text-2xl font-bold'>Captions</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col p-10'>
				<div className='flex flex-row space-x-4'>
					<div className='bg-white rounded-full  size-8'>
						<img src='/images/1621577.png' />
					</div>
					<ToggleButton />
					<div className='bg-white rounded-full size-8'>
						<img src='/images/sound-off-music-mute-off-sound-speaker-volume-icon-16.png' />
					</div>
					<ToggleButton />
				</div>
				<div className='flex flex-row'>
					<button>
						<img src='/images/polygon 1.svg' />
					</button>
					<div className='flex-1 flex flex-row'>
						<input
							type='text'
							className='flex-1 bg-transparent'
							placeholder='Enter a word:'
						/>
						<button className='bg-black border-white border-2 rounded-3xl p-2'>
							<img src='/images/google-bard-logo-2D24045D5B-seeklogo.com.png' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
