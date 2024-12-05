import React, { useState, useEffect } from "react";
import classes from "./Weather.module.css";

// Icons
import ClearDayStatic from "../Icons/Hourly/clear-day-static.svg?react";
import ClearNightStatic from "../Icons/Hourly/clear-night-static.svg?react";
import CloudyDayStatic from "../Icons/Hourly/cloudy-day-static.svg?react";
import DrizzleStatic from "../Icons/Hourly/drizzle-static.svg?react";
import FogDayStatic from "../Icons/Hourly/fog-day-static.svg?react";
import FogNightStatic from "../Icons/Hourly/fog-night-static.svg?react";
import HailStatic from "../Icons/Hourly/hail-static.svg?react";
import OvercastDayStatic from "../Icons/Hourly/overcast-day-static.svg?react";
import OvercastNightStatic from "../Icons/Hourly/overcast-night-static.svg?react";
import PartlyCloudyDayStatic from "../Icons/Hourly/partly-cloudy-day-static.svg?react";
import PartlyCloudyNightStatic from "../Icons/Hourly/partly-cloudy-night-static.svg?react";
import RainStatic from "../Icons/Hourly/rain-static.svg?react";
import SleetStatic from "../Icons/Hourly/sleet-static.svg?react";
import SnowStatic from "../Icons/Hourly/snow-static.svg?react";
import ThunderstormsDayStatic from "../Icons/Hourly/thunderstorms-day-static.svg?react";
import ThunderstormsNightStatic from "../Icons/Hourly/thunderstorms-night-static.svg?react";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function HourlyWeather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const [dailyData, setDailyData] = useState([]);
	const [hourlyData, setHourlyData] = useState({});

	const [times, setTimes] = useState([]);
	const [temperatures, setTemperatures] = useState([]);
	const [weatherCodes, setWeatherCodes] = useState([]);
	const [sunriseTimes, setSunriseTimes] = useState([]); // index 0: today's sunset | index 1: tomorrow's sunset
	const [sunsetTimes, setSunsetTimes] = useState([]); // index 0: today's sunrise | index 1: tomorrow's sunrise

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
		//getSunriseSunsetTimes();
		switch (weatherCode) {
			case 0:
			case 1:
				// write condition for checking for day or night
				return <ClearDayStatic className={classes.hourlyIcon} />;
				break;
			case 2:
				return <PartlyCloudyDayStatic className={classes.hourlyIcon} />;
				break;
			case 3:
				return <OvercastDayStatic className={classes.hourlyIcon} />;
				break;
			case 45:
			case 48:
				return <FogDayStatic className={classes.hourlyIcon} />;
				break;
			case 51:
			case 53:
			case 55:
				return <DrizzleStatic className={classes.hourlyIcon} />;
				break;
			case 61:
			case 63:
			case 65:
			case 80:
			case 81:
			case 82:
				return <RainStatic className={classes.hourlyIcon} />;
				break;
			case 66:
			case 67:
				return <FreezingRainStatic className={classes.hourlyIcon} />;
				break;
			case 71:
			case 73:
			case 75:
			case 85:
			case 86:
				return <SnowStatic className={classes.hourlyIcon} />;
				break;
			case 77:
				return <HailStatic className={classes.hourlyIcon} />;
				break;
			case 95:
			case 96:
			case 99:
				return <ThunderstormsDayStatic className={classes.hourlyIcon} />;
				break;
		}
	}

	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&temperature_unit=${unit}&wind_speed_unit=mph&precipitation_unit=inch&past_days=1&timezone=auto&forecast_days=3&daily=sunrise,sunset`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching hourly weather data");
				}
				return response.json();
			})
			.then(data => {
				//console.log(data);
				setHourlyData(data.hourly);
				setDailyData(data.daily);
			})
			.catch(error => console.error(error));

		//getSunriseSunsetTimes();
	}, [latitude, longitude, cityName, unit]);

	useEffect(() => {
		// Calculate the time 24 hours from now
		const currentTime = new Date();
		const latestDate = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);

		// Filter times, temperatures, weatherCodes arrays to be in the range of current time to 24 hours later
		if (hourlyData.time && hourlyData.temperature_2m && hourlyData.weather_code) {
			let newTimeArr = [];
			let newTempArr = [];
			let newWeatherArr = [];

			for (let i = 0; i < hourlyData.time.length; i++) {
				const time = new Date(hourlyData.time[i]);
				if (time >= currentTime && time <= latestDate) {
					newTimeArr.push(hourlyData.time[i]);
					newTempArr.push(hourlyData.temperature_2m[i]);
					newWeatherArr.push(hourlyData.weather_code[i]);
				}
			}
			setTimes(newTimeArr);
			setTemperatures(newTempArr);
			setWeatherCodes(newWeatherArr);
		}
	}, [hourlyData]);

	useEffect(() => {
		getSunriseSunsetTimes();
	}, [dailyData]);

	function formatTime(timeString) {
		const time = new Date(timeString); // Create a Date object from the string
		const meridiem = time.getHours() < 12 ? "AM" : "PM"; // Get AM or PM

		let hour = time.getHours() % 12 === 0 ? 12 : time.getHours() % 12; // Replace 0 with 12

		return `${hour} ${meridiem}`;
	}

	function getSunriseSunsetTimes() {
		const currentDate = new Date(); // get the current date and time
		const currentDay = currentDate.getDay(); // gets current day of the week 0-6

		if (dailyData.sunrise && dailyData.sunset) {
			for (let i = 0; i < dailyData.sunrise.length; i++) {
				const dayIter = new Date(dailyData.sunrise[i]);
				console.log(`dayI = ${dayIter.getDay()}`);
				if (dayIter.getDay() === currentDay) {
					// set today & tomorrow's sunrise & sunset ISO codes
					const newSunriseTimes = [dailyData.sunrise[i], dailyData.sunrise[i + 1]];
					const newSunsetTimes = [dailyData.sunset[i], dailyData.sunset[i + 1]];

					setSunriseTimes(newSunriseTimes);
					setSunsetTimes(newSunsetTimes);

					//console.log(`today's sunset: ${dailyData.sunset[i]}`);
					//console.log(`tomorrow's sunset: ${dailyData.sunset[i + 1]}`);
				}
			}
		}
	}

	return (
		<div className={classes.hourlyWeatherContainer}>
			<ul className={classes.hourlyForecast}>
				{times &&
					times.map((time, index) => {
						return (
							<li key={index}>
								<div>{`${formatTime(time)}`}</div>
								{getConditionIcon(weatherCodes[index])}
								<div>{`${Math.round(temperatures[index])}°`}</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default HourlyWeather;
