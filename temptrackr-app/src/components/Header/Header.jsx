import React, { useState, useContext, useEffect } from "react";
import classes from "./Header.module.css";

// Icons
import SettingsIcon from "../Icons/Settings.svg?react";

// Components
import SettingsModal from "../Settings/SettingsModal";

// Contexts
import { useTheme } from "../../context/ThemeContext";
import { useUnit } from "../../context/UnitContext";
import { useLocation } from "../../context/LocationContext";

function Header() {
	// Context
	const { theme, toggleTheme } = useTheme();
	const { unit, changeUnit } = useUnit();
	const { setCoordinates } = useLocation();

	// State variables
	const [searchValue, setSearchValue] = useState(""); // current input text value in search bar
	const [searchSuggestions, setSearchSuggestions] = useState([]); // API location search results
	const [selectedSearchResult, setSelectedSearchResult] = useState(null); // selected search result

	const [modalOpen, setModalOpen] = useState(false); // True: modal open | False: modal closed

	function handleOpen() {
		setModalOpen(true);
	}

	function handleClose() {
		setModalOpen(false);
	}

	function handleSearchInputChange(e) {
		setSearchValue(e.target.value);
		handleLocationSearch();
	}

	function handleLocationSearch() {
		if (searchValue) {
			fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}&count=5&language=en&format=json`)
				.then(response => {
					if (!response.ok) {
						throw new Error("Error with search. Try another query.");
					}
					return response.json();
				})
				.then(data => {
					console.log(data.results);
					setSearchSuggestions(data.results);
				})
				.catch(error => console.error(error));
		}
	}

	function handleResultSelection(suggestion) {
		setSelectedSearchResult(suggestion); // set to object from search result
		setSearchValue(""); // reset search value to clear input field
		setSearchSuggestions([]); // reset suggestions to hide results dropdown

		// Set location to new coordinates from selected result
		setCoordinates(suggestion.latitude, suggestion.longitude);
	}

	return (
		<>
			<header className={`${classes.headerStyle} ${theme === "dark" ? classes.dark : ""}`}>
				<div className={classes.searchWrapper}>
					<input className={classes.searchInput} type="text" placeholder="Search City Name" id="location-search-input" value={searchValue} onChange={handleSearchInputChange} />
					<button className={classes.searchButton} onClick={handleLocationSearch}>
						Search
					</button>
					{searchSuggestions && (
						<ul className={classes.searchSuggestionsList}>
							{searchSuggestions.map(suggestion => {
								return <li key={suggestion.id} onClick={() => handleResultSelection(suggestion)}>{`${suggestion.name}, ${suggestion.admin2}, ${suggestion.admin1}, ${suggestion.country}`}</li>;
							})}
						</ul>
					)}
				</div>

				<div className={classes.settingsButton}>
					<button onClick={handleOpen}>
						<SettingsIcon className={classes.settingsIcon} />
					</button>
				</div>
			</header>
			<SettingsModal isOpen={modalOpen} onClose={handleClose} />
		</>
	);
}

export default Header;
