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

const GOLDENRATIO = 1.61803398875;

export default function App({ image }) {
	const clicked = useRef();

	return (
		<Canvas dpr={[1, 1.5]} camera={{ fov: 10, position: [0, 2, 15] }}>
			<color attach='background' args={["#191920"]} />
			<fog attach='fog' args={["#191920", 0, 15]} />
			<group position={[-1, -0.5, 0]}>
				<ImageFrame image={image} />
				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<planeGeometry args={[50, 50]} />
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={80}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color='#050505'
						metalness={0.5}
					/>
				</mesh>
			</group>
			<group position={[1, -0.5, 0]}>
				<ImageFrame image={image} />
				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<planeGeometry args={[50, 50]} />
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={80}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color='#050505'
						metalness={0.5}
					/>
				</mesh>
			</group>
			<Environment preset='city' />
		</Canvas>
	);
}

function ImageFrame({ image }) {
	const ref = useRef();
	const clicked = useRef();
	const q = new THREE.Quaternion();
	const p = new THREE.Vector3();

	return (
		<group ref={ref}>
			<mesh
				scale={[1, GOLDENRATIO, 0.05]}
				position={[0, GOLDENRATIO / 2, 0]}
			>
				<boxGeometry />
				<meshStandardMaterial
					color='#151515'
					metalness={0.5}
					roughness={0.5}
					envMapIntensity={2}
				/>
				<mesh
					raycast={() => null}
					scale={[0.9, 0.93, 0.9]}
					position={[0, 0, 0.2]}
				>
					<boxGeometry />
					<meshBasicMaterial toneMapped={false} fog={false} />
				</mesh>
				<Image
					raycast={() => null}
					position={[0, 0, 0.7]}
					url={image.url}
				/>
			</mesh>
			<Text
				maxWidth={0.1}
				anchorX='left'
				anchorY='top'
				position={[0.55, GOLDENRATIO, 0]}
				fontSize={0.025}
			>
				{image.url}
			</Text>
		</group>
	);
}

function TextFrame() {}
