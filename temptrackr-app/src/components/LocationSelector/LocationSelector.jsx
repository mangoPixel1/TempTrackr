import React, { useState, useEffect } from "react";
import classes from "./LocationSelector.module.css";

import { useLocation } from "../../context/LocationContext";

function LocationSelector() {
	const { latitude, longitude, setCoordinates } = useLocation();
	const [isLocationSet, setIsLocationSet] = useState(false);
	const [locationHasError, setLocationHasError] = useState(false);

	function handleGetLocationClick() {}
	function handleLocationSubmit() {
		const latitudeValue = document.getElementById("latitude").value; // use onChange
		const longitudeValue = document.getElementById("longitude").value; // use onChange

		if (latitudeValue > 90 || latitudeValue < -90 || longitudeValue > 180 || longitudeValue < -180) {
			setLocationHasError(true);
			setIsLocationSet(false);
		} else {
			setCoordinates(latitudeValue, longitudeValue);
			setLocationHasError(false);
			setIsLocationSet(true);
		}
	}

	return (
		<div className={classes.locationSelector}>
			<h3>Enter Location</h3>
			<label htmlFor="latitude">Latitude:</label>
			<input type="number" id="latitude" name="latitude" min="-90" max="90" step="0.000001" required />
			<br />
			<label htmlFor="longitude">Longitude:</label>
			<input type="number" id="longitude" name="longitude" min="-180" max="180" step="0.000001" required />
			<br />
			<button id="locationSubmitButton" onClick={handleLocationSubmit}>
				Submit
			</button>
			{locationHasError && <p>Invalid coordinates</p>}
		</div>
	);
}

export default LocationSelector;

/*
<p>Enter location above</p>
<p>or</p>
<button id="get-location-btn" onClick={handleLocationButtonClick}>
	Get Device Location
</button>
*/
