import React, { useState } from "react";
import classes from "./SettingsModal.module.css";

function SettingsModal() {
	return (
		<div className={classes.settingsContainer}>
			<h3>Settings</h3>
			<label htmlFor="unit">Unit </label>
			<div className={classes.settingsOptions}>
				<input type="radio" value="Imperial" name="unit" /> Male
				<input type="radio" value="Metric" name="unit" /> Female
			</div>
			<label htmlFor="theme">Theme </label>
			<div className={classes.settingsOptions}>
				<input type="radio" value="Light" name="theme" /> Light
				<input type="radio" value="Dark" name="theme" /> Dark
				<input type="radio" value="Auto" name="theme" /> System
			</div>
		</div>
	);
}
// USE RADIO BUTTONS
export default SettingsModal;
