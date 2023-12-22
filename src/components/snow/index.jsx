import React, { useState, useEffect } from "react";
import "./index.css";

import Snowflakes from "../../assets/images/snowflakes.svg";

import particleGenerator from "../../utils/particleGenerator";

export default function Snow({ weatherData }) {
	const [snowParticle, setSnowParticle] = useState([]);

	const options = { maxDuration: 8, minDuration: 5 };

	useEffect(() => {
		const randomWidth = 0.8 + Math.random() * 0.5;

		particleGenerator(setSnowParticle, options, randomWidth);
	}, []);
	return (
		<div
			className={
				weatherData?.weather[0].main === "Snow"
					? "falling-snowflakes"
					: "none"
			}
		>
			{snowParticle.map((particle, index) => (
				<img
					src={Snowflakes}
					alt="flocon de neige"
					key={index}
					className="snowflakes"
					style={{
						left: `${particle.left}%`,
						animationDelay: `${particle.delay}s`,
						animationDuration: `${particle.duration}s`,
						width: `${particle.width}vw`,
					}}
				/>
			))}
		</div>
	);
}
