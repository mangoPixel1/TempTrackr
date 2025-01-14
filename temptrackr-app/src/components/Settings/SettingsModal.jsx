import React, { useState } from "react";
import classes from "./SettingsModal.module.css";

// Icons
import CloseButtonLight from "../Icons/CloseButtonLight.svg?react";
import CloseButtonDark from "../Icons/CloseButtonDark.svg?react";

// Contexts
import { useUnit } from "../../context/UnitContext";
import { useTheme } from "../../context/ThemeContext";

function SettingsModal() {
	const { unit, changeUnit } = useUnit();
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classes.settingsContainer}>
			<div className={classes.settingsWrapper}>
				<div className={classes.settingsHeader}>
					<h3>Settings</h3>
					<button className={`${theme === "dark" ? classes.dark : ""}`}>{theme === "light" ? <CloseButtonLight className={classes.closeModalBtn} /> : <CloseButtonDark className={classes.closeModalBtn} />}</button>
				</div>
				<h5>Unit</h5>
				<div className={classes.settingsOptions}>
					<div>
						<input type="radio" name="theme" id="imperial" value="fahrenheit" checked={unit === "fahrenheit"} onChange={e => changeUnit(e.target.value)} />
						<label htmlFor="imperial">Imperial</label>
					</div>
					<div>
						<input type="radio" name="theme" id="metric" value="celsius" checked={unit === "celsius"} onChange={e => changeUnit(e.target.value)} />
						<label htmlFor="metric">Metric</label>
					</div>
				</div>
				<h5>Theme</h5>
				<div className={classes.settingsOptions}>
					{/*<div>
						<input type="radio" name="theme" id="system" />
						<label htmlFor="system">System</label>
					</div>*/}
					<div>
						<input type="radio" name="theme" id="light" />
						<label htmlFor="light">Light</label>
					</div>
					<div>
						<input type="radio" name="theme" id="dark" />
						<label htmlFor="dark">Dark</label>
					</div>
				</div>
			</div>
		</div>
	);
}
// USE RADIO BUTTONS
export default SettingsModal;
