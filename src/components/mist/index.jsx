import React from "react";
import "./index.css";

import Brume from "../../assets/images/brouillard.png";

export default function Mist({ weatherData }) {
	return (
		<div
			className={
				weatherData?.weather[0].main === "Mist"
					? "mist-container"
					: weatherData?.weather[0].main === "Haze"
					? "mist-container"
					: weatherData?.weather[0].main === "Fog"
					? "mist-container"
					: "none"
			}
		>
			<img src={Brume} alt="brouillard" className="mist" />
		</div>
	);
}
