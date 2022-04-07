import React from "react";
import { Link } from "react-router-dom";
import repara_hub_150px from "../../img/repara_hub_150px.png";
import "../../styles/home.css";


export const NavbarPrivate = () => {
	return (
		<nav className="navbar navbar-custom-bg py-2 px-4 d-flex flex-row flex-nowrap">
			<Link to="/">
				<div className='brand-image justify-content-start'>
					<img src= {repara_hub_150px} alt="ReparaHub"></img>
				</div>
			</Link>
			<div className="ml-auto d-flex justify-content-end">
				<Link to="/ayuda">
					<button className="btn font-weight-bolder text-white">Ayuda</button>
				</Link>
				
				<Link to="/">
					<button className="btn mx-2 rounded-pill btn-custom">Salir</button>
				</Link>
			
				
			</div>
		</nav>
	);
};
