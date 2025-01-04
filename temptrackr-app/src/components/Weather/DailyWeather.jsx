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

function DailyWeather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName } = useLocation();

	//const [dailyData, setDailyData] = useState();
	const [times, setTimes] = useState([]);
	const [weatherCodes, setWeatherCodes] = useState([]);
	const [maxTemps, setMaxTemps] = useState([]);
	const [minTemps, setMinTemps] = useState([]);
	const [precip, setPrecip] = useState([]);

	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	// Fetches API data
	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=${unit}&wind_speed_unit=mph&precipitation_unit=inch&past_days=1`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching daily data");
				}
				return response.json();
			})
			.then(data => {
				console.log(data.daily);
				//setDailyData(data.daily);
				setTimes(data.daily.time);
				setWeatherCodes(data.daily.weather_code);
				setMaxTemps(data.daily.temperature_2m_max);
				setMinTemps(data.daily.temperature_2m_min);
				setPrecip(data.daily.precipitation_probability_max);
			})
			.catch(error => console.error(error));
	}, [latitude, longitude, cityName, unit]);

	function getConditionIcon(weatherCode) {
		switch (weatherCode) {
			case 0:
			case 1:
				return <ClearDayStatic className={classes.dailyIcon} />;
				break;
			case 2:
				return <PartlyCloudyDayStatic className={classes.dailyIcon} />;
				break;
			case 3:
				return <OvercastDayStatic className={classes.dailyIcon} />;
				break;
			case 45:
			case 48:
				return <FogDayStatic className={classes.dailyIcon} />;
				break;
			case 51:
			case 53:
			case 55:
				return <DrizzleStatic className={classes.dailyIcon} />;
				break;
			case 61:
			case 63:
			case 65:
			case 80:
			case 81:
			case 82:
				return <RainStatic className={classes.dailyIcon} />;
				break;
			case 66:
			case 67:
				return <FreezingRainStatic className={classes.dailyIcon} />;
				break;
			case 71:
			case 73:
			case 75:
			case 85:
			case 86:
				return <SnowStatic className={classes.dailyIcon} />;
				break;
			case 77:
				return <HailStatic className={classes.dailyIcon} />;
				break;
			case 95:
			case 96:
			case 99:
				return <ThunderstormsDayStatic className={classes.dailyIcon} />;
				break;
			case 100:
				return <SunriseStatic className={classes.dailyIcon} />;
				break;
			case 101:
				return <SunsetStatic className={classes.dailyIcon} />;
				break;
		}
	}

	function formatDate(date, index) {
		const dateObj = new Date(date);
		return index === 0 ? `Today` : `${daysOfWeek[dateObj.getDay()]}, ${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}`;
	}

	return (
		<div className={classes.dailyWeatherContainer}>
			<ul className={classes.dailyForecast}>
				{times.map((time, index) => (
					<li key={index}>
						<div>{formatDate(time, index)}</div>
						<div>{getConditionIcon(weatherCodes[index])}</div>
						<div>{`${Math.round(maxTemps[index])}° / ${Math.round(minTemps[index])}°`}</div>
						<div>{`${precip[index]}%`}</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DailyWeather;
