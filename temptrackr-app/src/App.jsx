import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import LocationSelector from "./components/LocationSelector/LocationSelector";

// Contexts
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { UnitProvider, useUnit } from "./context/UnitContext";
import { LocationProvider, useLocation } from "./context/LocationContext";

function App() {
	return (
		<>
			<ThemeProvider>
				<LocationProvider>
					<UnitProvider>
						<Header />
						<MainComponent />
					</UnitProvider>
				</LocationProvider>
			</ThemeProvider>
		</>
	);
}

export default App;

function MainComponent() {
	const { unit } = useUnit();
	const { latitude, longitude, setCoordinates } = useLocation();

	function handleLocationReset() {
		setCoordinates(0, 0);
	}

	return (
		<>
			<div className="mainTitle">
				<h1>TempTrackr</h1>
				<h3>Just another weather app</h3>
				<p>{`The temperature is in ${unit}`}</p>
				<p>{latitude && longitude ? `Latitude: ${latitude}, Longitude: ${longitude}` : null}</p>
			</div>
			{latitude && longitude ? (
				<button className="resetLocationButton" onClick={handleLocationReset}>
					Reset Location
				</button>
			) : (
				<LocationSelector />
			)}
		</>
	);
}
