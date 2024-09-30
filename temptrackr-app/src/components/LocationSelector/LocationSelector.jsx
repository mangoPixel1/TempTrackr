import React, { useState, useEffect } from "react";
import classes from "./LocationSelector.module.css";

function LocationSelector() {
	function handleLocationButtonClick() {
		/*
		let data;
		fetch(`https://jsonplaceholder.typicode.com/todos/${todoIndex}`)
			.then(response => response.json())
			.then(json => (data = json));
		setTodoContent(json.title);
		setTodoIndex(index => index + 1);
		*/
	}

	const [todoIndex, setTodoIndex] = useState(1);
	const [todoContent, setTodoContent] = useState(null);

	return (
		<div className={classes.locationSelector}>
			<p>Enter location above</p>
			<p>or</p>
			<button id="get-location-btn" onClick={handleLocationButtonClick}>
				Get Device Location
			</button>
			<h3>{todoContent ? todoContent : null}</h3>
		</div>
	);
}

export default LocationSelector;
