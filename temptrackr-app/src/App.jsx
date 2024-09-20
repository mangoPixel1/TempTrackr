import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import LocationSelector from "./components/LocationSelector/LocationSelector";

function App() {
	const [isLocationSelected, setIsLocationSelected] = useState(false);
	const [location, setLocation] = useState(null);
	const [unitTemp, setUnitTemp] = useState("fahrenheit");
	const [lightModeOn, setLightModeOn] = useState(true);

	useEffect(() => {
		// document.body.classList
	}, [lightModeOn]);

	return (
		<>
			<Header unit={unitTemp} setUnitTemp={setUnitTemp} lightModeOn={lightModeOn} setLightModeOn={setLightModeOn} />
			{isLocationSelected ? null : (
				<>
					<div className="mainTitle">
						<h1>TempTrackr</h1>
						<h3>Just another weather app</h3>
						<p>{`The temperature is in ${unitTemp}`}</p>
					</div>
					<LocationSelector />
				</>
			)}
		</>
	);
}

export default App;
