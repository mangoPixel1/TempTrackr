import React, { useEffect } from "react";
import classes from "./LocationSelector.module.css";

function LocationSelector() {
	return (
		<div className={classes.locationSelector}>
			<p>Enter location above</p>
			<p>or</p>
			<button id="get-location-btn">Get Device Location</button>
		</div>
	);
}

export default LocationSelector;
