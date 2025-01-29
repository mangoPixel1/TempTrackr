import { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light"); // actual theme to display: light or dark
	const [themeOption, setThemeOption] = useState(() => localStorage.getItem("themeOption") || "light"); // selected option: auto, light, or dark

	/*function toggleTheme() {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
		document.body.classList.toggle("darkBody");
	}*/

	/*function changeTheme(theme) {
		if (theme === "light" || "dark") {
			setTheme(theme);
		}
	}*/

	function changeThemeOption(theme) {
		if (theme == "auto") {
			const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

			if (isDarkMode) {
				setTheme("dark");
				setThemeOption("auto");
			} else {
				setTheme("light");
				setThemeOption("auto");
			}
		} else {
			setTheme(theme);
			setThemeOption(theme);
		}
	}

	useEffect(() => {
		// whenever theme changes, update local storage
		localStorage.setItem("theme", theme);
		localStorage.setItem("themeOption", themeOption);

		theme === "dark" ? document.body.classList.add("darkBody") : document.body.classList.remove("darkBody");
	}, [theme, themeOption]);

	return <ThemeContext.Provider value={{ theme, themeOption, changeThemeOption }}>{children}</ThemeContext.Provider>;
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
