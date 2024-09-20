import React, { useEffect } from "react";
import classes from "./Header.module.css";

function Header(props) {
	function handleUnitChange(e) {
		props.setUnitTemp(e.target.value);
	}

	function handleSearchChange(e) {
		// get value from text box
		// set isLocationSelected to true
		// set location to value from text box
	}

	function handleDisplayModeToggle() {
		props.setLightModeOn(prev => !prev);
	}

	return (
		<header className={classes.headerStyle}>
			<div className={classes.searchWrapper}>
				<input type="text" placeholder="Search Zip Code" />
				<button className="searchButton" onClick={handleSearchChange}>
					Search
				</button>
			</div>

			<div className={classes.unitSelectWrapper}>
				<label htmlFor="units">Unit </label>
				<select id="units" value={props.unitTemp} onChange={handleUnitChange}>
					<option value="fahrenheit">F</option>
					<option value="celsius">C</option>
				</select>
			</div>

			<div className={classes.displayModeToggle}>
				<button onClick={handleDisplayModeToggle}>{props.lightModeOn ? "☀️" : "🌙"}</button>
			</div>
		</header>
	);
}

export default Header;
