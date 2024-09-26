import { useState, useEffect, createContext } from "react";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import LocationSelector from "./components/LocationSelector/LocationSelector";

// Context
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	// State variables
	const [isLocationSelected, setIsLocationSelected] = useState(false);
	const [location, setLocation] = useState(null);
	const [unitTemp, setUnitTemp] = useState("fahrenheit");

	return (
		<>
			<ThemeProvider>
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
			</ThemeProvider>
		</>
	);
}

export default App;
