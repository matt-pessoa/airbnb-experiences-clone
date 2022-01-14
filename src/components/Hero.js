import React from "react";
import photoGrid from "../images/photo-grid.png";

function Hero() {
	return (
		<section className="hero">
			<img src={photoGrid} alt="Collection of AirBnb experiences" />
		</section>
	);
}

export default Hero;
