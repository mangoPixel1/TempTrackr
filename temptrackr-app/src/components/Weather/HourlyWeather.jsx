import React, { useState, useEffect } from "react";
import classes from "./Weather.module.css";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function HourlyWeather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const [hourlyData, setHourlyData] = useState({});

	const [times, setTimes] = useState([]);
	const [temps, setTemps] = useState([]);
	const [wmoCodes, setWmoCodes] = useState([]);

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
		61: "Light Rain",
		63: "Rain",
		65: "Heavy Rain",
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

	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=3`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching hourly weather data");
				}
				return response.json();
			})
			.then(data => {
				//console.log(data);
				setHourlyData(data.hourly);
				setTimes(data.hourly.time);
				setTemps(data.hourly.temperature_2m);
				setWmoCodes(data.hourly.weather_code);
			})
			.catch(error => console.error(error));
	}, [latitude, longitude, cityName, unit]);

	useEffect(() => {
		console.log(hourlyData);
	}, [hourlyData]);

	return (
		<div className={classes.hourlyWeatherContainer}>
			<h1>Hourly weather</h1>
			<ul className={classes.hourlyForecast}>
				{hourlyData &&
					hourlyData.time &&
					hourlyData.time.map((time, index) => {
						return <li key={index}>{`${hourlyData.time[index]}: ${hourlyData.temperature_2m[index]} - ${weatherCodeMap[hourlyData.weather_code[index]]}`}</li>;
					})}
			</ul>
		</div>
	);
}

export default HourlyWeather;
