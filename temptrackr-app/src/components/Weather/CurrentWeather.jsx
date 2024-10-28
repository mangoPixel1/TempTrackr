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

function CurrentWeather({ currentTemp, min, max, precip, humidity, wind }) {
	const { latitude, longitude, cityName, setCoordinates } = useLocation();
	const { unit } = useUnit();

	return (
		<div className="currentWeather">
			<h2 className="currentTemperature">
				{currentTemp} °{unit === "fahrenheit" ? "F" : "C"}
			</h2>
			<p className="minMaxTemp">
				{max}°/{min}°
			</p>
			<div className="weatherMetrics">
				<p className="precipChance">
					<RainCloudIcon />
					{precip}%
				</p>
				<p className="humidity">
					<DropletIcon />
					{humidity}%
				</p>
				<p className="windSpeed">
					<WindIcon />
					{wind} mph
				</p>
			</div>
		</div>
	);
}

export default CurrentWeather;
