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

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function HourlyWeather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const [hourlyData, setHourlyData] = useState({});

	const [currentTime, setCurrentTime] = useState(new Date());
	const [filteredTime, setFilteredTime] = useState([]);
	const [filteredTemp, setFilteredTemp] = useState([]);
	const [filteredWeatherCode, setFilteredWeatherCode] = useState([]);

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

	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&past_days=1&forecast_days=3`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching hourly weather data");
				}
				return response.json();
			})
			.then(data => {
				//console.log(data);
				setHourlyData(data.hourly);
			})
			.catch(error => console.error(error));
	}, [latitude, longitude, cityName, unit]);

	useEffect(() => {
		// Calculate the time 24 hours from now
		const latestDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

		// Filter time array to be in the range of current time to 24 hours later
		const filteredTimeArr =
			hourlyData.time &&
			hourlyData.time.filter(timeString => {
				const time = new Date(timeString);
				return time >= currentTime && time <= latestDate;
			});

		console.log(filteredTimeArr);

		// figure out how to filter temp and weather codes

		setFilteredTime(filteredTimeArr);
	}, [hourlyData]);

	function formatTime(timeString) {
		const time = new Date(timeString); // Create a Date object from the string
		const meridiem = time.getHours() < 12 ? "AM" : "PM"; // Get AM or PM

		let hour = time.getHours() % 12 === 0 ? 12 : time.getHours() % 12; // Replace 0 with 12

		return `${hour} ${meridiem}`;
	}

	/* TODO:
		DONE: get current date and time
		DONE: filter data to show only current time -> 24 hours later
		DONE: format time
		DOING: filter temp and weather code arrays to same indices as time array
		fix weather icons not displaying
	*/

	return (
		<div className={classes.hourlyWeatherContainer}>
			<ul className={classes.hourlyForecast}>
				{filteredTime &&
					filteredTime.map((time, index) => {
						return (
							<li key={index}>
								<div>{`${formatTime(time)}`}</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default HourlyWeather;

/*

return (
		<div className={classes.hourlyWeatherContainer}>
			<h1>Hourly weather</h1>
			<ul className={classes.hourlyForecast}>
				{hourlyData &&
					hourlyData.time &&
					hourlyData.time.map((time, index) => {
						return (
							<li key={index}>
								<div>{`${hourlyData.time[index]}`}</div>
								<div>{`${getConditionIcon(hourlyData.weather_code[index])}`}</div>
								<div>{`${hourlyData.temperature_2m[index]}`}</div>
							</li>
						);
					})}
			</ul>
		</div>
	);

*/
