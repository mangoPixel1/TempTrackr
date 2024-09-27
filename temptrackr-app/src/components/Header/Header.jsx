import React, { useContext, useEffect } from "react";
import classes from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";

function Header() {
	// Context
	const { theme, toggleTheme } = useTheme();
	const { unit, changeUnit } = useUnit();

	function handleUnitChange(e) {
		changeUnit(e.target.value);
	}

	function handleSearchChange(e) {
		// get value from text box
		// set isLocationSelected to true
		// set location to value from text box
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
				<select id="units" value={unit} onChange={handleUnitChange}>
					<option value="fahrenheit">F</option>
					<option value="celsius">C</option>
				</select>
			</div>

			<div className={classes.displayModeToggle}>
				<button onClick={toggleTheme}>{theme === "light" ? "☀️" : "🌙"}</button>
			</div>
		</header>
	);
}

export default Header;
