import React from "react";

function ImageBox(props) {
	return (
		<mesh {...props} recieveShadow={true} castShadow>
			<boxGeometry />
			<meshPhysicalMaterial  />
		</mesh>
	);
}
export default ImageBox;
