import React, { useEffect } from "react";
import classes from "./Header.module.css";

function Header(props) {
	function handleUnitChange(e) {
		props.setUnitTemp(e.target.value);
	}

	return (
		<header className={classes.headerStyle}>
			<div className={classes.searchWrapper}>
				<input type="text" placeholder="Search City or Zip Code" />
				<button className="searchButton">Search</button>
			</div>

			<div className={classes.unitSelectWrapper}>
				<label htmlFor="units">Unit </label>
				<select id="units" value={props.unitTemp} onChange={handleUnitChange}>
					<option value="fahrenheit">F</option>
					<option value="celsius">C</option>
				</select>
			</div>
		</header>
	);
}

export default Header;
