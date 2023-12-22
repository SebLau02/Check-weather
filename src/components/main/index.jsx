import React, { useState, useEffect } from "react";

import "./index.css";

import Summer from "../../assets/images/summer.svg";
import SnowSvg from "../../assets/images/snow.svg";

export default function Main({ weatherData }) {
	const [date, setDate] = useState();
	const [heure, setHeure] = useState();

	let weatherIconLink = `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`;

	const currentTime = () => {
		let dateActuelle = new Date();

		let currentHour = dateActuelle.getHours().toString().padStart(2, "0");
		let currentMinutes = dateActuelle
			.getMinutes()
			.toString()
			.padStart(2, "0");
		let currentSeconds = dateActuelle
			.getSeconds()
			.toString()
			.padStart(2, "0");

		setInterval(() => {
			dateActuelle = new Date();

			currentHour = dateActuelle.getHours().toString().padStart(2, "0");
			currentMinutes = dateActuelle
				.getMinutes()
				.toString()
				.padStart(2, "0");
			currentSeconds = dateActuelle
				.getSeconds()
				.toString()
				.padStart(2, "0");

			setHeure(`${currentHour}:${currentMinutes}:${currentSeconds}`);
		}, 1000);

		setHeure(`${currentHour}:${currentMinutes}:${currentSeconds}`);
	};

	useEffect((e) => {
		const dateActuelle = new Date();

		const annee = dateActuelle.getFullYear();
		const mois = dateActuelle.getMonth() + 1;
		const jour = dateActuelle.getDate();
		let dateDuJour = `${jour}/${mois}/${annee}`;

		setDate(dateDuJour);

		currentTime();
	}, []);

	return (
		<main
			className="main-content"
			style={{
				backgroundImage: `${
					weatherData?.weather[0].main === "Snow"
						? `url(${SnowSvg})`
						: `url(${Summer})`
				}`,
			}}
		>
			<section className="data-card">
				<div className="date">
					<h1>
						<strong>
							<u>
								{weatherData?.name +
									", " +
									weatherData?.sys?.country}
							</u>
						</strong>
					</h1>
					<h2>{date}</h2>
					<h3>{heure}</h3>
				</div>

				<div className="temp-condition-wind">
					<ul className="temp">
						<li>
							<h3>{weatherData?.main.temp}°C</h3>
						</li>
						<li>
							<u>Min:</u> {weatherData?.main.temp_min}°C
						</li>
						<li>
							<u>Max: </u>
							{weatherData?.main.temp_max}°C
						</li>
					</ul>

					<ul className="weather">
						<li>
							<ul>
								<li>
									<img src={weatherIconLink} alt="" />
								</li>
								<li>
									{weatherData?.weather[0].description
										.charAt(0)
										.toUpperCase()
										.concat(
											weatherData?.weather[0].description.slice(
												1,
											),
										)}
								</li>
							</ul>
						</li>
					</ul>

					<ul className="wind-container">
						<li>
							<div className="boussole">
								<div className="fleche-nord"></div>
								<div
									className="fleche-wind"
									style={{
										transform: `translate(-50%, -50%) rotate(${
											720 + weatherData?.wind.deg
										}deg)`,
									}}
								></div>

								<div className="epingle"></div>
							</div>
						</li>
						<li>
							<u>Vit. vent:</u>{" "}
							{(weatherData?.wind.speed * 3.6).toFixed(2)} km/h
						</li>
						<li>
							{weatherData?.wind.gust &&
								`Rafale: ${(
									weatherData?.wind.gust * 3.6
								).toFixed(2)} km/h`}
						</li>
					</ul>
				</div>

				<ul className="press-humid-vis">
					<li>
						<u>Humidité:</u> {weatherData?.main.humidity}%
					</li>
					<li>
						<u>Press. atmo:</u> {weatherData?.main.pressure} hPa
					</li>
					<li>
						<u>Visibilité:</u> {weatherData?.visibility / 1000}km
					</li>
				</ul>
			</section>
		</main>
	);
}
