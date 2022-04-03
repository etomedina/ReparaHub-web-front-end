import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer  py-3 px-6 text-center">
		<div className="d-flex flex-row justify-content-center">
			<div className="d-flex flex-column">
				<Link to="/ayuda">
					<button className="btn btn-light">Ayuda</button>
				</Link>
				<Link to="/terminos">
					<button className="btn btn-light">Terminos y condiciones</button>
				</Link>
			</div> 
			<div className="d-flex flex-column">
				<Link to="/proveedores">
					<button className="btn btn-light">Informacion para prestadores de servicios</button>
				</Link>
				<Link to="/terminos">
					<button className="btn btn-light">Politicas de privacidad</button>
				</Link>
			</div>
		</div>
		<p className="fs-6">&copy;2022-Hector Medina, Tulio Lara y Carlos Rivas</p>
		{/* <p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">2022-Hector Medina, Tulio Lara y Carlos Rivas</a>
		</p> */}
	</footer>
);
