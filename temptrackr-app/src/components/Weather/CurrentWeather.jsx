import React, { useState, useEffect } from "react";
import classes from "./Weather.module.css";

// Icons
import Clear from "../Icons/Weather Codes/Clear";
import PartlyCloudyDay from "../Icons/Weather Codes/PartlyCloudyDay";
import Overcast from "../Icons/Weather Codes/Overcast";
import Fog from "../Icons/Weather Codes/Fog";
import Drizzle from "../Icons/Weather Codes/Drizzle";
import Rain from "../Icons/Weather Codes/Rain";
import FreezingRain from "../Icons/Weather Codes/FreezingRain";
import Snow from "../Icons/Weather Codes/Snow";
import Hail from "../Icons/Weather Codes/Hail";
import Thunderstorm from "../Icons/Weather Codes/Thunderstorm";

// Images

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function CurrentWeather() {
	const { theme } = useTheme();
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const [currentTemp, setCurrentTemp] = useState(0);
	const [currentMin, setCurrentMin] = useState(0);
	const [currentMax, setCurrentMax] = useState(0);
	const [precipChance, setPrecipChance] = useState(0);
	const [humidity, setHumidity] = useState(0);
	const [wind, setWind] = useState(0);
	const [weatherCode, setWeatherCode] = useState(-1);
	const [apparentTemp, setApparentTemp] = useState(0);

	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=${unit}&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto&forecast_days=3`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching current weather data");
				}
				return response.json();
			})
			.then(data => {
				console.log(data);
				setCurrentTemp(Math.floor(data.current.temperature_2m));
				setCurrentMin(Math.floor(data.daily.temperature_2m_min[0]));
				setCurrentMax(Math.floor(data.daily.temperature_2m_max[0]));
				setPrecipChance(Math.floor(data.current.precipitation));
				setHumidity(Math.floor(data.current.relative_humidity_2m));
				setWind(Math.floor(data.current.wind_speed_10m));
				setWeatherCode(data.current.weather_code);
				setApparentTemp(Math.floor(data.current.apparent_temperature));
			})
			.catch(error => console.error(error));
	}, [latitude, longitude, cityName, unit]);

	const weatherCodeMap = {
		0: "Clear", // Clear
		1: "Mainly Clear", // Clear
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
		66: "Freezing Rain: Light", // FreezingRain
		67: "Freezing Rain: Heavy", // FreezingRain
		71: "Snow Fall: Light", // Snow
		73: "Snow Fall: Moderate", // Snow
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

	function getConditionIcon(weatherCode) {
		switch (weatherCode) {
			case 0:
			case 1:
				return <Clear />;
				break;
			case 2:
				return <PartlyCloudyDay />;
				break;
			case 3:
				return <Overcast />;
				break;
			case 45:
			case 48:
				return <Fog />;
				break;
			case 51:
			case 53:
			case 55:
				return <Drizzle />;
				break;
			case 61:
			case 63:
			case 65:
			case 80:
			case 81:
			case 82:
				return <Rain />;
				break;
			case 66:
			case 67:
				return <FreezingRain />;
				break;
			case 71:
			case 73:
			case 75:
			case 85:
			case 86:
				return <Snow />;
				break;
			case 77:
				return <Hail />;
				break;
			case 95:
			case 96:
			case 99:
				return <Snow />;
				break;
		}
	}

	return (
		<div className={classes.currentWeatherContainer}>
			<div className={classes.currentWeather}>
				<div className={classes.condition}>
					{getConditionIcon(weatherCode)}
					{weatherCodeMap[weatherCode]}
				</div>
				<div className={classes.temperature}>
					<h2 className={classes.realTemperature}>
						{currentTemp} °{unit === "fahrenheit" ? "F" : "C"}
					</h2>
					<p className={classes.maxMinTemperature}>
						{currentMax}°/{currentMin}°
					</p>
					<p className={classes.apparentTemperature}>Feels like {apparentTemp} °</p>
				</div>
			</div>

			<div className={classes.weatherMetrics}>
				<div className="precipChance">
					{/*<PrecipiationIcon fillColor={theme === "light" ? "black" : "white"} />*/}
					<p>Precipitation: {precipChance}%</p>
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
