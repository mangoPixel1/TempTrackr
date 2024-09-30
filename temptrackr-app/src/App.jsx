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
	const { latitude, longitude } = useLocation();

	return (
		<>
			<div className="mainTitle">
				<h1>TempTrackr</h1>
				<h3>Just another weather app</h3>
				<p>{`The temperature is in ${unit}`}</p>
			</div>
			{latitude && longitude ? null : <LocationSelector />}
		</>
	);
}
