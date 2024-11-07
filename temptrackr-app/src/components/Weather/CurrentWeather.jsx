import React, { useEffect } from "react";
import classes from "./Weather.module.css";

// Icons
import ClearIcon from "../Icons/Weather Codes/ClearIcon";
import PartlyCloudyDayIcon from "../Icons/Weather Codes/PartlyCloudyDay";
import Overcast from "../Icons/Weather Codes/Overcast";
import Fog from "../Icons/Weather Codes/Fog";
import Drizzle from "../Icons/Weather Codes/Drizzle";
import Rain from "../Icons/Weather Codes/Rain";
import FreezingRain from "../Icons/Weather Codes/FreezingRain";
import Snow from "../Icons/Weather Codes/Snow";

// Images

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function CurrentWeather({ currentTemp, min, max, precip, humidity, wind, weatherCode, apparentTemp }) {
	const { theme } = useTheme();
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const weatherCodeMap = {
		0: "Clear", // ClearIcon
		1: "Mainly Clear", // ClearIcon
		2: "Partly Cloudy", // PartlyCloudDay
		3: "Overcast", // Overcast
		45: "Fog", // Fog
		48: "Fog", // Fog
		51: "Light Drizzle", // Drizzle
		53: "Drizzle", // Drizzle
		55: "Heavy Drizzle", // Drizzle
		61: "Light Rain", // Rain
		63: "Rain", // Rain
		65: "Heavy Rain", // Rain
		66: "Freezing Rain: Light", // FreezingRain ****FIX THIS*****
		67: "Freezing Rain: Heavy", // FreezingRain ****FIX THIS*****
		71: "Snow Fall: Light", // Snow
		73: "Snow Fall: Moderate", // Snow ****FIX THIS*****
		75: "Snow Fall: Heavy", // Snow
		77: "Snow Grains", // Hail
		80: "Showers: Light", // Rain
		81: "Showers: Moderate", // Rain
		82: "Showers: Violent", // Rain
		85: "Snow Showers: Light", // Snow
		86: "Snow Showers: Heavy", // Snow
		95: "Thunderstorm", // Thunderstorm
		96: "Thunderstorm", // Thunderstorm
		99: "Thunderstorm" // Thunderstorm
	};

	return (
		<div className={classes.currentWeatherContainer}>
			<div className={classes.currentWeather}>
				<div className={classes.condition}>
					{/* Image */}
					<Snow />
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
					{/*<PrecipiationIcon fillColor={theme === "light" ? "black" : "white"} />*/}
					<p>Precipitation: {precip}%</p>
				</div>
				<div className="humidity">
					{/*<DropletIcon fillColor={theme === "light" ? "black" : "white"} />*/}
					<p>Humidity: {humidity}%</p>
				</div>
				<div className="windSpeed">
					{/*<WindIcon fillColor={theme === "light" ? "black" : "white"} />*/}
					<p>Wind: {wind} mph</p>
				</div>
			</div>
		</div>
	);
}

export default CurrentWeather;
