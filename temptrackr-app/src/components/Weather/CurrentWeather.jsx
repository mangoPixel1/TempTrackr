import React, { useEffect } from "react";

// Icons
import ThermometerIcon from "../Icons/ThermometerIcon";
import RainCloudIcon from "../Icons/RainCloudIcon";
import DropletIcon from "../Icons/DropletIcon";
import WindIcon from "../Icons/WindIcon";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function CurrentWeather({ currentTemp, min, max, precip, humidity, wind, weatherCode, apparentTemp }) {
	const { latitude, longitude, cityName, setCoordinates } = useLocation();
	const { unit } = useUnit();

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
		<div className="currentWeather">
			<div className="currentTemperature">
				<p>{weatherCodeMap[weatherCode]}</p>
				<h2 className="realTemp">
					{currentTemp} °{unit === "fahrenheit" ? "F" : "C"}
				</h2>
				<p className="apparentTemp">Feels like {apparentTemp} °</p>
			</div>
			<p className="minMaxTemp">
				{max}°/{min}°
			</p>
			<div className="weatherMetrics">
				<p className="precipChance">
					<RainCloudIcon />
					Precipitation: {precip}%
				</p>
				<p className="humidity">
					<DropletIcon />
					Humidity: {humidity}%
				</p>
				<p className="windSpeed">
					<WindIcon />
					Wind: {wind} mph
				</p>
			</div>
		</div>
	);
}

export default CurrentWeather;
