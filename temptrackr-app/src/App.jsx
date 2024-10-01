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
				<PokemonInfo />
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

function PokemonInfo() {
	const [pokemonData, setPokemonData] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [pokemonSearch, setPokemonSearch] = useState("");

	function handlePokemonSearch() {
		const searchValue = document.getElementById("pokemon-search-input").value;

		if (searchValue !== "") {
			fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
				.then(response => {
					if (!response.ok) {
						const msg = "Could not find Pokemon";
						setErrorMessage(msg);
						throw new Error(msg);
					}
					return response.json();
				})
				.then(data => {
					setPokemonData(data);
					setErrorMessage(null);
				})
				.catch(error => console.log(error));
		}
	}

	return (
		<div>
			<h3>Pokemon Data</h3>
			<input type="text" placeholder="Pokemon name" id="pokemon-search-input" />
			<button className="pokemonSearchButton" onClick={handlePokemonSearch}>
				Search
			</button>
			<p>{pokemonData && `Weight: ${pokemonData.weight}`}</p>
			{errorMessage && `Error: ${errorMessage}`}
		</div>
	);
}
