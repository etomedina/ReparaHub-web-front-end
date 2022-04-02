import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">ReparaHub</span>
			</Link>
			<div className="ml-auto d-flex justify-content-around">
				<Link to="/login">
					<button className="btn btn-primary">Ingresar</button>
				</Link>
			
				<Link to="/signup">
					<button className="btn btn-primary">Sign Up</button>
				</Link>
			</div>
		</nav>
	);
};
