import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import LocationSelector from "./components/LocationSelector/LocationSelector";

// Context
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { UnitProvider, useUnit } from "./context/UnitContext";

function App() {
	// State variables
	const [location, setLocation] = useState(null);

	return (
		<>
			<ThemeProvider>
				<UnitProvider>
					<Header />
					{location ? null : <MainComponent />}
				</UnitProvider>
			</ThemeProvider>
		</>
	);
}

export default App;

function MainComponent() {
	const { unit } = useUnit();

	return (
		<>
			<div className="mainTitle">
				<h1>TempTrackr</h1>
				<h3>Just another weather app</h3>
				<p>{`The temperature is in ${unit}`}</p>
			</div>
			<LocationSelector />
		</>
	);
}
