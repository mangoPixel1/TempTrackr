import React, { useEffect } from "react";
import classes from "./Weather.module.css";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function HourlyWeather() {
	const { unit } = useUnit();
	const { latitude, longitude, cityName, setCoordinates } = useLocation();

	useEffect(() => {
		fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=3`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error fetching hourly weather data");
				}
				return response.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => console.error(error));
	}, [latitude, longitude, cityName, unit]);

	return (
		<div className={classes.hourlyWeatherContainer}>
			<h1>Hourly weather</h1>
			<ul></ul>
		</div>
	);
}

export default HourlyWeather;
