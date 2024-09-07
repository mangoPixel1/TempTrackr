import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Components
import Header from "./components/Header/Header";
import LocationSelector from "./components/LocationSelector/LocationSelector";

function App() {
	const [isLocationSelected, setIsLocationSelected] = useState(false);

	return (
		<>
			<Header />
			{!isLocationSelected ? (
				<div className="mainTitle">
					<h1>TempTrackr</h1>
					<h3>Just another weather app</h3>
				</div>
			) : null}
			<LocationSelector />
		</>
	);
}

export default App;
