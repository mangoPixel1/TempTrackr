import React, { useState, createContext, useContext } from "react";

const LocationContext = createContext();

function LocationProvider({ children }) {
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	function setCoordinates(latitude, longitude) {
		setLatitude(latitude);
		setLongitude(longitude);
	}

	return <LocationContext.Provider value={{ latitude, longitude, setCoordinates }}>{children}</LocationContext.Provider>;
}

function useLocation() {
	return useContext(LocationContext);
}

export { LocationProvider, useLocation };
