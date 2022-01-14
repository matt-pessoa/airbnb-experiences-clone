import React from "react";
import airbnbLogo from "../images/airbnb-logo.png";
import "./css/Header.css";

function Header() {
	return (
		<header>
			<img src={airbnbLogo} alt="AirBnb logo" />
		</header>
	);
}

export default Header;
