import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Proveedores = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h3 className="display-9">Deseas formar parte de nuestros proveedores de servicios?</h3>

			<hr className="my-4" />

			<div className="d-flex flex-column mx-3 border">
				<p className="mx-1">Contacte con uno de nuestros asesores, quienes le brindaran las herramientras para formar parte de ReparaHub</p>
				<span>proveedores@repara.hub</span>
				<span className="display-9">0212- 910 60 41 y Whatssap 0422- 9106041</span>
			</div>
			<h3 className="display-9">Beneficios:</h3>
			<div className="container border-top border-1 border-bottom py-5"  >
				<div className="d-flex flex-row">
					<div className="col-md-8 ">
						
						<p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto dolores reprehenderit temporibus corporis velit porro enim error voluptatum asperiores et eius, cum aperiam laborum fugiat, dignissimos sapiente.</p>
					</div>
					<div className="col-md-4"> 
						<img src= "" alt=""  className="rounded-circle img-fluid rounded-sm" />
					</div>
				</div>
			</div>

		</div>
	);
};

Proveedores.propTypes = {
	match: PropTypes.object
};