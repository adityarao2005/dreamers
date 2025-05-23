"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	MeshReflectorMaterial,
	Text,
	Image,
	Environment,
} from "@react-three/drei";
import { easing } from "maath";
import OrbitControls from "@/components/three/orbitcontrols";

const GOLDENRATIO = 1.61803398875;

export default function App({ images }) {
	const clicked = useRef();

	return (
		<Canvas dpr={[1, 1.5]} camera={{ fov: 10, position: [80, -35, 90] }}>
			<color attach='background' args={["#191920"]} />

			<group position={[0, 0, 0]}>
				<ImageFrameFront image={images[0]} />
				<mesh rotation={[0, 0, 0]}>
					
				</mesh>
			</group>

			<group position={[7.5, 0, -9.6]}>
				<ImageFrameRight image={images[1]} />
				<mesh rotation={[0, -Math.PI / 2, 0]}>
				</mesh>
			</group>

			<group position={[-7.5, 0, -9.6]}>
				<ImageFrameLeft image={images[2]} />
				<mesh rotation={[0, Math.PI / 2, 0]}>
			
				</mesh>
			</group>

			<group position={[0, 0, -15.05]}>
				<ImageFrameBack image={images[3]} />
				<mesh rotation={[0, 0, Math.PI / 2]}>
					
				</mesh>
			</group>

			<group position={[0, 7.5, -9.6]}>
				<ImageFrameTop image={images[4]} />
				<mesh rotation={[Math.PI / 2, 0, Math.PI / 2]}>
					
				</mesh>
			</group>

			<group position={[0, -7.5, -9.6]}>
				<ImageFrameBottom image={images[5]} />
				<mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
					
				</mesh>
			</group>
			
			<Environment preset='city' />
			<OrbitControls />
		</Canvas>
	);
}

function ImageFrameFront({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[3, 3, 0.05]}
				position={[0, 0, 0]}
			>

				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}
				>

				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image}
					scale={[5, 5, 1]}
				/>
			</mesh>

		</group>
	);
}


function ImageFrameRight({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[3, 3, 3]}
				position={[0, 0, 0]}
			>

				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}
				>

				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image}
					scale={[5, 5, 1]}
					rotation={[0, Math.PI / 2, 0]} // Add this line
				/>
			</mesh>

		</group>
	);
}


function ImageFrameLeft({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[3, 3, 3]}
				position={[0, 0, 0]}
			>
				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}
				>

				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image}
					scale={[5, 5, 1]}
					rotation={[0, -Math.PI / 2, 0]} // Add this line
				/>
			</mesh>

		</group>
	);
}

function ImageFrameBack({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[3, 3, 0.05]}
				position={[0, 0, 0]}
			>

				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}
				>

				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image}
					scale={[5, 5, 1]}
					rotation={[0, Math.PI, 0]} // Add this line

				/>
			</mesh>

		</group>
	);
}

function ImageFrameTop({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[3, 0.05, 3]}
				position={[0, 0, 0]}
			>

				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}

				>

				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image}
					scale={[5, 5, 1]}
					rotation={[-Math.PI/2, 0, 0]} // Add this line

				/>
			</mesh>

		</group>
	);
}

function ImageFrameBottom({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[3, 0.05, 3]}
				position={[0, 0, 0]}
			>

				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}

				>
		
				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image}
					scale={[5, 5, 1]}
					rotation={[Math.PI/2, 0, 0]} // Add this line

				/>
			</mesh>

		</group>
	);
}