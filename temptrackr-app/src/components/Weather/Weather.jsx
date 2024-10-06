import React, { useEffect } from "react";

function Weather() {
	return (
		<>
			<div className="main">
				<div>
					<h1>Current Weather</h1>
					<ul>
						<li>Temperature</li>
						<li>High/Low Temps</li>
						<li>Sky conditions</li>
						<li>Date + Time</li>
						<li>Humidity</li>
						<li>Wind</li>
						<li>Feels like</li>
					</ul>
				</div>
				<div>Hourly forecast</div>
				<div>Daily forecast</div>
			</div>
		</>
	);
}

export default Weather;
