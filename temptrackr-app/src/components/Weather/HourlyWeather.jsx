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
import SunriseStatic from "../Icons/Hourly/sunset-static.svg?react";
import SunsetStatic from "../Icons/Hourly/sunrise-static.svg?react";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function HourlyWeather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	const [dailyData, setDailyData] = useState([]); // Fetched API data: sunrise/sunset times for yesterday, today, today + 2
	const [hourlyData, setHourlyData] = useState({}); // Fetched API data: hourly temp/weather codes for yesterday, today, today + 2

	const [times, setTimes] = useState([]); // Hours filtered to be within range of current time to 24 hours later
	const [temperatures, setTemperatures] = useState([]); // Temps filtered to be within range of current time to 24 hours later
	const [weatherCodes, setWeatherCodes] = useState([]); // Weather filtered to be within range of current time to 24 hours later

	const [sunriseTime, setSunriseTime] = useState(""); // Next sunrise time
	const [sunsetTime, setSunsetTime] = useState(""); // Next sunset time

	const [hours, setHours] = useState([]); // Final times to be rendered in UI
	const [finalTemps, setFinalTemps] = useState([]); // Final temps to be rendered in UI
	const [finalWeather, setFinalWeather] = useState([]); // Final weather codes to be rendered in UI

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

	// Gets condition icon based on the weather code and time
	function getConditionIcon(weatherCode, time) {
		const currentTime = new Date(time);

		const nextSunriseTime = new Date(sunriseTime);
		const nextSunsetTime = new Date(sunsetTime);

		let isDay;

		// Check if both sunrise/sunset are on the same calendar day
		if (nextSunriseTime.getDay() === nextSunsetTime.getDay()) {
			isDay = currentTime >= nextSunriseTime && currentTime <= nextSunsetTime;
		} else {
			isDay = currentTime <= nextSunsetTime || currentTime >= nextSunriseTime;
		}

		switch (weatherCode) {
			case 0:
			case 1:
				return isDay ? <ClearDayStatic className={classes.hourlyIcon} /> : <ClearNightStatic className={classes.hourlyIcon} />;
				break;
			case 2:
				return isDay ? <PartlyCloudyDayStatic className={classes.hourlyIcon} /> : <PartlyCloudyNightStatic className={classes.hourlyIcon} />;
				break;
			case 3:
				return isDay ? <OvercastDayStatic className={classes.hourlyIcon} /> : <OvercastNightStatic className={classes.hourlyIcon} />;
				break;
			case 45:
			case 48:
				return isDay ? <FogDayStatic className={classes.hourlyIcon} /> : <FogNightStatic className={classes.hourlyIcon} />;
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
				return isDay ? <ThunderstormsDayStatic className={classes.hourlyIcon} /> : <ThunderstormsNightStatic className={classes.hourlyIcon} />;
				break;
			case 100:
				return <SunriseStatic className={classes.hourlyIcon} />;
				break;
			case 101:
				return <SunsetStatic className={classes.hourlyIcon} />;
				break;
		}
	}

	// Fetches API data
	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&temperature_unit=${unit}&wind_speed_unit=mph&precipitation_unit=inch&past_days=1&timezone=auto&forecast_days=3&daily=sunrise,sunset`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching hourly weather data");
				}
				return response.json();
			})
			.then(data => {
				console.log(data);
				setDailyData(data.daily);
				setHourlyData(data.hourly);
			})
			.catch(error => console.error(error));
	}, [latitude, longitude, cityName, unit]);

	// Finds next sunrise/sunset time
	// Syncs temp, weather, time arrays
	useEffect(() => {
		const currentDate = new Date(); // get the current date and time
		const currentDay = currentDate.getDay(); // gets current day of the week 0-6

		// Get next sunset/sunrise times
		if (dailyData.sunrise && dailyData.sunset) {
			for (let i = 0; i < dailyData.sunrise.length; i++) {
				const dayIter = new Date(dailyData.sunrise[i]);
				if (dayIter.getDay() === currentDay) {
					// Set next sunrise/sunset to either today's sunrise/sunset time or tomorrow's
					/*const nextSunrise = currentDate < dailyData.sunrise[i] ? dailyData.sunrise[i] : dailyData.sunrise[i + 1];
					const nextSunset = currentDate < dailyData.sunset[i] ? dailyData.sunset[i] : dailyData.sunset[i + 1];*/

					const currentSunrise = new Date(dailyData.sunrise[i]);
					const currentSunset = new Date(dailyData.sunset[i]);

					const nextSunrise = currentDate < currentSunrise ? dailyData.sunrise[i] : dailyData.sunrise[i + 1];
					const nextSunset = currentDate < currentSunset ? dailyData.sunset[i] : dailyData.sunset[i + 1];

					console.log(`Next sunrise: ${nextSunrise}`);
					console.log(`Next sunset: ${nextSunset}`);

					setSunriseTime(nextSunrise);
					setSunsetTime(nextSunset);
				}
			}
		}

		// Calculate the time 24 hours from now
		const latestDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);

		// Filter times, temperatures, weatherCodes arrays to be in the range of current time to 24 hours later
		if (hourlyData.time && hourlyData.temperature_2m && hourlyData.weather_code) {
			let newTimeArr = [];
			let newTempArr = [];
			let newWeatherArr = [];

			// Sync the indices of the three arrays to be within the specified range
			for (let i = 0; i < hourlyData.time.length; i++) {
				const time = new Date(hourlyData.time[i]);
				if (time >= currentDate && time <= latestDate) {
					newTimeArr.push(hourlyData.time[i]);
					newTempArr.push(hourlyData.temperature_2m[i]);
					newWeatherArr.push(hourlyData.weather_code[i]);
				}
			}

			//console.log(newTimeArr);

			// Update the state data with the new arrays
			setTimes(newTimeArr);
			setTemperatures(newTempArr);
			setWeatherCodes(newWeatherArr);
		}

		formatHours();
	}, [hourlyData, dailyData]);

	// Formats time (5 PM)
	function formatTimeHour(timeString) {
		const time = new Date(timeString); // Create a Date object from the string
		const meridiem = time.getHours() < 12 ? "AM" : "PM"; // Get AM or PM

		let hour = time.getHours() % 12 === 0 ? 12 : time.getHours() % 12; // Replace 0 with 12

		return `${hour} ${meridiem}`;
	}

	// Formats time (5:00 PM)
	function formatTimeHourMinutes(timeString) {
		const time = new Date(timeString); // Create a Date object from the string
		const meridiem = time.getHours() < 12 ? "AM" : "PM"; // Get AM or PM

		let hour = time.getHours() % 12 === 0 ? 12 : time.getHours() % 12; // Replace 0 with 12

		return `${hour}:${time.getMinutes().toString().padStart(2, "0")} ${meridiem}`;
	}

	// Format final hourly data to render in UI
	function formatHours() {
		// times - length 24
		// newTimes - length 26 (includes sunrise & sunset)
		const newTimes = [...times];
		const newTemps = [...temperatures];
		const newWeather = [...weatherCodes];

		let sunriseIndex; // Index at hour of sunrise
		let sunsetIndex; // Index at hour of sunset

		const sunriseObj = new Date(sunriseTime); // Temporary Date object for sunrise
		const sunsetObj = new Date(sunsetTime); // Temporary Date object for sunset

		// Find index to insert sunrise and sunset times into newTimes
		for (let i = 0; i < times.length; i++) {
			const currentTimeObj = new Date(times[i]);

			if (currentTimeObj.getHours() === sunriseObj.getHours()) {
				sunriseIndex = i + 1;
			} else if (currentTimeObj.getHours() === sunsetObj.getHours()) {
				sunsetIndex = i + 1;
			}
		}

		newTimes.splice(sunriseIndex, 0, sunriseTime); // Insert sunrise time into array
		newTimes.splice(sunsetIndex, 0, sunsetTime); // Insert sunset time into array

		newTemps.splice(sunriseIndex, 0, 200);
		newTemps.splice(sunsetIndex, 0, 200);

		newWeather.splice(sunriseIndex, 0, 101);
		newWeather.splice(sunsetIndex, 0, 100);

		console.log(newTimes);
		console.log(newTemps);
		console.log(newWeather);

		setHours(newTimes);
		setFinalTemps(newTemps);
		setFinalWeather(newWeather);

		// IMPORTANT!!! When rendering formattedTimes, if current hour is the same as the previous hour, display sunset/sunrise icon
		// FORMAT the time using the formatTime functions inside the JSX

		//console.log(formattedTimes);
		//console.log(sunriseIndex);
		//console.log(sunsetIndex);
	}

	return (
		<div className={classes.hourlyWeatherContainer}>
			<ul className={classes.hourlyForecast}>
				{hours &&
					hours.map((hour, index, hours) => {
						const currentHour = new Date(hour);
						const pastHour = new Date(hours[index - 1]);

						if (currentHour.getHours() === pastHour.getHours()) {
							// Render sunrise/sunset
							return (
								<li key={index}>
									<div>{`${formatTimeHourMinutes(hour)}`}</div>
									{getConditionIcon(finalWeather[index], hour)}
									<div className={classes.hideText}>{`null`}</div>
								</li>
							);
						} else {
							// Render hourly weather
							return (
								<li key={index}>
									<div>{`${formatTimeHour(hour)}`}</div>
									{getConditionIcon(finalWeather[index], hour)}
									<div>{`${Math.round(finalTemps[index])}°`}</div>
								</li>
							);
						}
					})}
			</ul>
		</div>
	);
}
// pass in date to getConditionIcon, in the function check if date is before/after sunrise/sunset time
export default HourlyWeather;

/* 
return (
		<div className={classes.hourlyWeatherContainer}>
			<ul className={classes.hourlyForecast}>
				{hours &&
					hours.map((hour, index, hours) => {
						const currentHour = new Date(hour);
						const pastHour = new Date(hours[index - 1]);

						if (currentHour.getHours() === pastHour.getHours()) {
							// Render sunrise/sunset
							return (
								<li key={index}>
									<div>{`${formatTimeHourMinutes(hour)}`}</div>
									{getConditionIcon(finalWeather[index], hour)}
									<div className={classes.hideText}>{`null`}</div>
								</li>
							);
						} else {
							// Render hourly weather
							return (
								<li key={index}>
									<div>{`${formatTimeHour(hour)}`}</div>
									{getConditionIcon(finalWeather[index], hour)}
									<div>{`${Math.round(finalTemps[index])}°`}</div>
								</li>
							);
						}
					})}
			</ul>
		</div>
	);
*/
