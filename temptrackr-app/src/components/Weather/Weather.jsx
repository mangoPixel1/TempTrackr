import React, { useState, useEffect } from "react";
import classes from "./Weather.module.css";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

// Components
import CurrentWeather from "./CurrentWeather";

function Weather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName } = useLocation();

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
					throw new Error("Error fetching weather data");
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

	return (
		<>
			<div className="main">
				<h2 className="cityName">{cityName}</h2>
				<CurrentWeather currentTemp={currentTemp} min={currentMin} max={currentMax} precip={precipChance} humidity={humidity} wind={wind} weatherCode={weatherCode} apparentTemp={apparentTemp} />
				<div>{/*<HourlyWeather>*/}</div>
				<div>{/*<DailyWeather>*/}</div>
			</div>
		</>
	);
}

export default Weather;
