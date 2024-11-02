import React, { useEffect } from "react";
import classes from "./Weather.module.css";

// Icons
import ThermometerIcon from "../Icons/ThermometerIcon";
import RainCloudIcon from "../Icons/RainCloudIcon";
import DropletIcon from "../Icons/DropletIcon";
import WindIcon from "../Icons/WindIcon";

// Images
import sunnyIcon from "../../assets/images/sunny.png";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function CurrentWeather({ currentTemp, min, max, precip, humidity, wind, weatherCode, apparentTemp }) {
	const { theme } = useTheme();
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const weatherCodeMap = {
		0: "Clear",
		1: "Mainly Clear",
		2: "Partly Cloudy",
		3: "Overcast",
		45: "Fog",
		48: "Fog",
		51: "Light Drizzle",
		53: "Drizzle",
		55: "Heavy Drizzle",
		61: "Rain: Light",
		63: "Rain: Moderate",
		65: "Rain: Heavy",
		66: "Freezing Rain: Light",
		67: "Freezing Rain: Heavy",
		71: "Snow Fall: Light",
		73: "Snow Fall: Moderate",
		75: "Snow Fall: Heavy",
		77: "Snow Grains",
		80: "Showers: Light",
		81: "Showers: Moderate",
		82: "Showers: Violent",
		85: "Snow Showers: Light",
		86: "Snow Showers: Heavy",
		95: "Thunderstorm",
		96: "Thunderstorm",
		99: "Thunderstorm"
	};

	return (
		<div className={classes.currentWeatherContainer}>
			<div className={classes.currentWeather}>
				<div className={classes.condition}>
					{/* Image */}
					<img src={sunnyIcon} alt={weatherCodeMap[weatherCode]} />
					<p>{weatherCodeMap[weatherCode]}</p>
				</div>
				<div className={classes.temperature}>
					<h2 className={classes.realTemperature}>
						{currentTemp} °{unit === "fahrenheit" ? "F" : "C"}
					</h2>
					<p className={classes.maxMinTemperature}>
						{max}°/{min}°
					</p>
					<p className={classes.apparentTemperature}>Feels like {apparentTemp} °</p>
				</div>
			</div>

			<div className={classes.weatherMetrics}>
				<div className="precipChance">
					<RainCloudIcon fillColor={theme === "light" ? "black" : "white"} />
					<p>Precipitation: {precip}%</p>
				</div>
				<div className="humidity">
					<DropletIcon fillColor={theme === "light" ? "black" : "white"} />
					<p>Humidity: {humidity}%</p>
				</div>
				<div className="windSpeed">
					<WindIcon fillColor={theme === "light" ? "black" : "white"} />
					<p>Wind: {wind} mph</p>
				</div>
			</div>
		</div>
	);
}

export default CurrentWeather;
