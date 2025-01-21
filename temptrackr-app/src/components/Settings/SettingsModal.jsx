import React, { useEffect, useState } from "react";
import classes from "./SettingsModal.module.css";

// Icons
import CloseButtonLight from "../Icons/CloseButtonLight.svg?react";
import CloseButtonDark from "../Icons/CloseButtonDark.svg?react";

// Contexts
import { useUnit } from "../../context/UnitContext";
import { useTheme } from "../../context/ThemeContext";

function SettingsModal() {
	const { unit, changeUnit } = useUnit();
	const { theme, changeTheme } = useTheme();

	return (
		<div className={classes.settingsContainer}>
			<div className={classes.settingsWrapper}>
				<div className={classes.settingsHeader}>
					<h3>Settings</h3>
					<button className={`${theme === "dark" ? classes.dark : ""}`}>{theme === "light" ? <CloseButtonLight className={classes.closeModalIcon} /> : <CloseButtonDark className={classes.closeModalIcon} />}</button>
				</div>
				<h5>🌡 Unit</h5>
				<div className={classes.settingsOptions}>
					<input type="radio" name="unit" id="fahrenheit" value="fahrenheit" checked={unit === "fahrenheit"} onChange={e => changeUnit(e.target.value)} /> <label htmlFor="fahrenheit">Fahrenheit</label>
					<input type="radio" name="unit" id="celsius" value="celsius" checked={unit === "celsius"} onChange={e => changeUnit(e.target.value)} /> <label htmlFor="celsius">Celsius</label>
				</div>
				<h5>💡 Theme</h5>
				<div className={classes.settingsOptions}>
					<input type="radio" name="theme" id="light" value="light" checked={theme === "light"} onChange={e => changeTheme(e.target.value)} /> <label htmlFor="light">Light</label>
					<input type="radio" name="theme" id="dark" value="dark" checked={theme === "dark"} onChange={e => changeTheme(e.target.value)} /> <label htmlFor="dark">Dark</label>
				</div>
			</div>
		</div>
	);
}
// USE RADIO BUTTONS
export default SettingsModal;
