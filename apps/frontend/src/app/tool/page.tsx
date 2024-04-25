import ToggleButton from "@/components/toggle_button";
import React from "react";

export default function Page() {
	return (
		<div className='flex flex-col min-h-screen bg-black text-white'>
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
							src='/images/imaginative_travel_placeholder.png'
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
				<div className='flex flex-row'>
					<label>CC</label>
					<ToggleButton />
					<label>Volume</label>
					<ToggleButton />
				</div>
				<div className='flex flex-row'>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</button>
					<div className='flex-1 flex flex-row'>
						<input
							type='text'
							className='flex-1'
							placeholder='Enter a word:'
						/>
						<button>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 6c2.76 0 5-2.24 5-5s-2.24-5-5-5S7 1.24 7 4s2.24 5 5 5zm0 0v14m0-14C6.48 6 2 10.48 2 16.5S6.48 27 12 27s10-4.48 10-10.5S17.52 6 12 6z'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
