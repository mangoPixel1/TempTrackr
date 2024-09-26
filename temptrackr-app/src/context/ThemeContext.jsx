import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	function toggleTheme() {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

function useTheme() {
	return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
// ThemeProvider is the component that wraps its children in provider tags
// useTheme is used for consuming the context in components nested within ThemeProvider
