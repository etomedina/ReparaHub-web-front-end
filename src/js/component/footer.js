import React, { Component } from "react";
import { Link } from "react-router-dom";
import repara_hub_bn_100px from "../../img/repara_hub_bn_100px.png";

export const Footer = () => (
	<footer className="footer p-1 text-center footer-custom-bg d-flex flex-column">
		<div className='footer-brand justify-content-center my-1'>
			<img src= {repara_hub_bn_100px} alt="ReparaHub"></img>
		</div>
		<div className="d-flex flex-row justify-content-center">
				<Link to="/ayuda">
					{/* <button className="btn btn-primary btn-opacity-50">Ayuda</button> */}
					<button className="btn btn-foot font-weight-bolder text-white py-0 m-0">Ayuda</button>
				</Link>
				<Link to="/terminos">
					{/* <button className="btn btn-light">Terminos y condiciones</button> */}
					<button className="btn btn-foot font-weight-bolder text-white py-0 m-0"> Términos y condiciones</button>
				</Link>
		</div> 
		<div className="d-flex flex-row justify-content-center">
				<Link to="/proveedores">
					{/* <button className="btn btn-light">Informacion para prestadores de servicios</button> */}
					<button className="btn btn-foot font-weight-bolder text-white py-0 m-0"> Prestadores de servicios</button>
				</Link>
				<Link to="/privacidad">
					{/* <button className="btn btn-light">Politicas de privacidad</button> */}
					<button className="btn btn-foot font-weight-bolder text-white py-0 m-0"> Politicas de privacidad</button>
				</Link>
		</div>

		<hr className="separador align-self-center m-1"></hr>

		<p className="copyright mb-1 text-white font-weight-bold">&copy;2022 - Hector Medina, Tulio Lara y Carlos Rivas</p>
		
	</footer>
);
