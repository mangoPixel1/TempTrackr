import { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

	function toggleTheme() {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
		document.body.classList.toggle("darkBody");
	}

	function changeTheme(theme) {
		if (theme === "light" || "dark") {
			setTheme(theme);
		}
		//console.error(`Invalid theme value: ${theme}`);
	}

	useEffect(() => {
		// whenever theme changes, update local storage
		localStorage.setItem("theme", theme);

		theme === "dark" ? document.body.classList.add("darkBody") : document.body.classList.remove("darkBody");
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>{children}</ThemeContext.Provider>;
}

function useTheme() {
	return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
// ThemeProvider is the component that wraps its children in provider tags with the values:
// 		theme: state variable for theme mode ("light", "dark")
// 		toggleTheme: function to update (and toggle) the value of theme

// useTheme is a custom hook used for consuming the context values in components nested within ThemeProvider
// 		It is an easier way for components to access the context values without needing to use ThemeContext directly.
