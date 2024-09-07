import React, { useEffect } from "react";
import classes from "./Header.module.css";

function Header() {
	return (
		<header className={classes.headerStyle}>
			<input type="text" placeholder="Search City or Zip Code" />
		</header>
	);
}

export default Header;
