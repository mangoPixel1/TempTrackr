import { useState, createContext, useContext } from "react";

const UnitContext = createContext();

function UnitProvider({ children }) {
	const [unit, setUnit] = useState("fahrenheit");

	function changeUnit(unit) {
		setUnit(unit);
	}

	return <UnitContext.Provider value={{ unit, changeUnit }}>{children}</UnitContext.Provider>;
}

function useUnit() {
	return useContext(UnitContext);
}

export { UnitProvider, useUnit };
