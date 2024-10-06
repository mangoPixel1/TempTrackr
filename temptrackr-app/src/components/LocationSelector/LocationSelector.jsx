import React, { useState, useEffect } from "react";
import classes from "./LocationSelector.module.css";

import { useLocation } from "../../context/LocationContext";

function LocationSelector() {
	const { setCoordinates } = useLocation();
	const [locationErrorMsg, setLocationErrorMsg] = useState(""); // No error present when string is empty

	function handleGetLocationClick() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				setCoordinates(position.coords.latitude, position.coords.longitude); // set latitude & latitude values in location context
			});
			setLocationErrorMsg(""); // set to empty string to indicate no error present
		} else {
			setLocationErrorMsg("Geolocation not supported by this browser");
		}
	}

	return (
		<div className={classes.locationSelector}>
			<p>Enter location above</p>
			<p>or</p>
			<button id="get-location-btn" onClick={handleGetLocationClick}>
				Get Device Location
			</button>
			{locationErrorMsg && <p>{`${locationErrorMsg}`}</p>}
		</div>
	);
}

export default LocationSelector;

/*
	//const [isLocationSet, setIsLocationSet] = useState(false);
	//const [locationHasError, setLocationHasError] = useState(false);

<p>Enter location above</p>
<p>or</p>
<button id="get-location-btn" onClick={handleLocationButtonClick}>
	Get Device Location
</button>
*/

/*
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
*/

/*
	function handleLocationSubmit() {
		const latitudeValue = document.getElementById("latitude").value;
		const longitudeValue = document.getElementById("longitude").value;

		if (latitudeValue > 90 || latitudeValue < -90 || longitudeValue > 180 || longitudeValue < -180) {
			setLocationHasError(true);
			setIsLocationSet(false);
		} else {
			setCoordinates(latitudeValue, longitudeValue);
			setLocationHasError(false);
			setIsLocationSet(true);
		}
	}
*/
