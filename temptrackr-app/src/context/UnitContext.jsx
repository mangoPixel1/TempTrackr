import { useEffect, useState, createContext, useContext } from "react";

const UnitContext = createContext();

function UnitProvider({ children }) {
	const [unit, setUnit] = useState(() => localStorage.getItem("unit") || "fahrenheit");

	function changeUnit(unit) {
		setUnit(unit);
	}

	useEffect(() => {
		localStorage.setItem("unit", unit);
	}, [unit]);

	return <UnitContext.Provider value={{ unit, changeUnit }}>{children}</UnitContext.Provider>;
}

function useUnit() {
	return useContext(UnitContext);
}

export { UnitProvider, useUnit };
