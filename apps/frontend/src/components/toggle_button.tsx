"use client";
import React from "react";

export default function ToggleButton(props: { onClick?: () => void }) {
	const [isOn, setIsOn] = React.useState(false);

	const handler = () => {
		setIsOn(!isOn);
		if (props.onClick) props.onClick();
	};

	return (
		<div
			className='my-2 py-2 w-12 relative'
			onClick={handler}
		>
			{isOn ? (
				<>
					<div className='absolute bottom-0 top-0 left-0 right-0 bg-green-400 rounded-full'></div>
					<div className='absolute h-6 w-6 -top-1 -bottom-1 bg-white rounded-full z-10 shadow-sm right-0'></div>
				</>
			) : (
				<>
					<div className='absolute bottom-0 top-0 left-0 right-0 bg-gray-700 rounded-full'></div>
					<div className='absolute h-6 w-6 -top-1 -bottom-1 bg-white rounded-full z-10 shadow-sm left-0'></div>
				</>
			)}
		</div>
	);
}
