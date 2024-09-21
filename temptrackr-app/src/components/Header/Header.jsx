import React, { useContext, useEffect } from "react";
import classes from "./Header.module.css";
import { ThemeContext } from "../../ThemeContext";

function Header(props) {
	// Context
	const theme = useContext(ThemeContext);

	function handleUnitChange(e) {
		props.setUnitTemp(e.target.value);
	}

	function handleSearchChange(e) {
		// get value from text box
		// set isLocationSelected to true
		// set location to value from text box
	}

	function handleDisplayModeToggle() {
		// handle theme change
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
				<button onClick={handleDisplayModeToggle}>{theme === "light" ? "Light" : "Dark"}</button>
			</div>
		</header>
	);
}

export default Header;
//{props.lightModeOn ? "☀️" : "🌙"}
