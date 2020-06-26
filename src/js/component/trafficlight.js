import React, { useState } from "react";

export function TrafficLight() {
	//hooks here
	const [highlightColor, setHighlightColor] = useState(null);

	function makeMeGlow(color) {
		setHighlightColor(color);
	}

	//return here
	return (
		<div>
			<div className="topLight container text-center" />
			<div className="mainLight container text-center d-flex flex-column justify-content-around">
				<div
					className={
						highlightColor == "red"
							? "light bg-danger mr-3 ml-3 mt-2 glow"
							: "light bg-danger mr-3 ml-3 mt-2"
					}
					onClick={() => makeMeGlow("red")}
				/>
				<div
					className={
						highlightColor == "yellow"
							? "light bg-warning mr-3 ml-3 mt-2 glow"
							: "light bg-warning mr-3 ml-3 mt-2"
					}
					onClick={() => makeMeGlow("yellow")}
				/>
				<div
					className={
						highlightColor == "green"
							? "light bg-success mr-3 ml-3 mt-2 glow"
							: "light bg-success mr-3 ml-3 mt-2"
					}
					onClick={() => makeMeGlow("green")}
				/>
			</div>
		</div>
	);
}
