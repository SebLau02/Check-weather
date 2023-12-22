import React, { useEffect, useState } from "react";
import "./index.css";

import particleGenerator from "../../utils/particleGenerator";

export default function Rain({ weatherData }) {
	const [dropQuantite, setDropQuantite] = useState([]);

	const options = { maxDuration: 3, minDuration: 0.5 };

	useEffect(() => {
		particleGenerator(setDropQuantite, options, 0);
	}, []);

	return (
		<div
			className={
				weatherData?.weather[0].main === "Rain"
					? "raining-container"
					: weatherData?.weather[0].main === "Drizzle"
					? "raining-container"
					: "none"
			}
		>
			{dropQuantite.map((drop, index) => (
				<span
					key={index}
					style={{
						left: `${drop.left}%`,
						animationDelay: `${drop.delay}s`,
						animationDuration: `${drop.duration}s`,
					}}
				></span>
			))}
		</div>
	);
}
