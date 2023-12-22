import React from "react";

import "./index.css";

import Nuage from "../../assets/images/nuage.png";

export default function Cloud({ weatherData }) {
	return (
		<div
			id="cloud-container"
			className={
				weatherData?.weather[0].main === "Clouds"
					? "dark-cloud active"
					: weatherData?.weather[0].main === "Snow"
					? "light-cloud active"
					: weatherData?.weather[0].main === "Drizzle"
					? "dark-cloud active"
					: weatherData?.weather[0].main === "Rain"
					? "medium-cloud active"
					: "none"
			}
		>
			<img src={Nuage} alt="nuage" />
			<img src={Nuage} alt="nuage" />
			<img src={Nuage} alt="nuage" />
		</div>
	);
}
