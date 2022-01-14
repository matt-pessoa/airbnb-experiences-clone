import React from "react";
import photoGrid from "../images/photo-grid.png";
import "./css/Hero.css";

function Hero() {
	return (
		<section className="hero">
			<img src={photoGrid} alt="Collection of AirBnb experiences" />
			<h1>Online Experiences</h1>
			<p>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</section>
	);
}

export default Hero;
