import React from "react";

function Box(props) {
	return (
		<mesh {...props} recieveShadow={true} castShadow>
			<boxGeometry />
			<meshPhysicalMaterial color={"red"} />
		</mesh>
	);
}
export default Box;
