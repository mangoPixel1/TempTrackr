import { useState, useEffect, createContext } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import LocationSelector from "./components/LocationSelector/LocationSelector";

// Context
import { ThemeContext } from "./ThemeContext";

function App() {
	// State variables
	const [isLocationSelected, setIsLocationSelected] = useState(false);
	const [location, setLocation] = useState(null);
	const [unitTemp, setUnitTemp] = useState("fahrenheit");
	const [theme, setTheme] = useState("light");

	return (
		<>
			<ThemeContext.Provider value={theme}>
				<Header unit={unitTemp} setUnitTemp={setUnitTemp} />
				{location ? null : (
					<>
						<div className="mainTitle">
							<h1>TempTrackr</h1>
							<h3>Just another weather app</h3>
							<p>{`The temperature is in ${unitTemp}`}</p>
						</div>
						<LocationSelector />
					</>
				)}
			</ThemeContext.Provider>
		</>
	);
}

export default App;
