import React, { useEffect, useState, createContext, useContext } from "react";

const LocationContext = createContext();

function LocationProvider({ children }) {
	const [latitude, setLatitude] = useState(() => {
		const storedCoordinates = JSON.parse(localStorage.getItem("coordinates"));
		return storedCoordinates ? storedCoordinates.latitude : 0;
	});
	const [longitude, setLongitude] = useState(() => {
		const storedCoordinates = JSON.parse(localStorage.getItem("coordinates"));
		return storedCoordinates ? storedCoordinates.longitude : 0;
	});

	function setCoordinates(latitude, longitude) {
		setLatitude(latitude);
		setLongitude(longitude);
	}

	useEffect(() => {
		localStorage.setItem("coordinates", JSON.stringify({ latitude, longitude }));
	}, [latitude, longitude]);

	return <LocationContext.Provider value={{ latitude, longitude, setCoordinates }}>{children}</LocationContext.Provider>;
}

function useLocation() {
	return useContext(LocationContext);
}

export { LocationProvider, useLocation };
