import React, { useState, useContext, useEffect } from "react";
import classes from "./Header.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";

function Header() {
	// Context
	const { theme, toggleTheme } = useTheme();
	const { unit, changeUnit } = useUnit();

	// State variables
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	function handleUnitChange(e) {
		changeUnit(e.target.value);
	}

	function handleLocationSearch() {
		const searchValue = document.getElementById("location-search-input").value; // get value from text box
		fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}&count=5&language=en&format=json`)
			.then(response => {
				if (!response.ok) {
					throw new Error("Error with search. Try another query.");
				}
				return response.json();
			})
			.then(data => {
				setSearchSuggestions([...data.results]);
				setDropdownVisible(true);
			})
			.catch(error => console.error(error));
	}

	return (
		<header className={classes.headerStyle}>
			<div className={classes.searchWrapper}>
				<input type="text" placeholder="Search City Name" id="location-search-input" />
				<button className={classes.searchButton} onClick={handleLocationSearch}>
					Search
				</button>
				{dropdownVisible && (
					<ul>
						{searchSuggestions.map(suggestion, key => {
							<li key={suggestion.id}>{`${suggestion.name}, ${suggestion.admin2}, ${suggestion.admin1}, ${suggestion.country}`}</li>;
						})}
					</ul>
				)}
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
