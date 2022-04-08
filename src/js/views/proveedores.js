import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import TallerImg03 from "../../img/repara_03.jpg"

export const Proveedores = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container gap-2 m-0 d-flex flex-column flex-nowrap align-items-center">
		<div className="d-flex flex-column align-items-center">
			<h5 className="text-center p-2"><strong>¿Desea formar parte de nuestros proveedores de servicio técnico automotriz?</strong></h5>

			<div className="d-flex flex-column mx-1 p-2 llamado-prov align-items-around">
				<p className="p-2 fst-italic fw-bold">Contacte con uno de nuestros asesores, quienes le brindarán las herramientas para ofrecer sus servicios a nuestros clientes</p>
				<p className=" fst-italic repara-mail fw-bolder fs-3  mx-2 align-self-end">proveedores@repara.hub</p>
				<p className="fst-italic repara-mail fw-bolder fs-3  mx-2 align-self-end"> 0803- 737 27 24</p>
				<p className="fst-italic repara-mail fw-bolder fs-3  mx-2 align-self-end"> WhatsApp: 0428 - 737 27 24</p>
			</div>
			<h3 className="text-center fw-bolder p-3">Beneficios:</h3>
			
			<div className="d-flex flex-row mx-1 mb-3 p-2 llamado-prov2 align-items-around">
				<img src= {TallerImg03} alt="" className="rounded-circle img-fluid p-2 align-self-center" />
				<div className="d-flex flex-column align-items-around">
					<p className="text-white px-2 fst-italic fw-bold ">Mayor oportunidad de hacer negocios</p>
					<p className="text-white px-2 fst-italic fw-bold ">Confianza en una plataforma segura</p>
					<p className="text-white px-2 fst-italic fw-bold ">Mejor visibilidad</p>
				</div>

			</div>

		</div>
		</div>
	);
};

Proveedores.propTypes = {
	match: PropTypes.object
};