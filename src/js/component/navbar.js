import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">ReparaHub</span>
			</Link>
			<div className="ml-auto d-flex">
				<Link to="/ayuda">
					<button className="btn btn-link">Ayuda</button>
				</Link>
				
				<Link to="/login">
					<button className="btn btn-light mx-2 rounded-pill border">Ingresar</button>
				</Link>
			
				
			</div>
		</nav>
	);
};
