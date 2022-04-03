import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import TallerImg03 from "../../img/repara_03.jpg"

export const Proveedores = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-column ">
			<h3 className="display-9 text-center">Deseas formar parte de nuestros proveedores de servicios?</h3>

			<hr className="my-4" />

			<div className="d-flex flex-column mx-3 border rounded bg-primary bg-opacity-50 text-white">
				<div className="d-flex  mx-2"><p className="">Contacte con uno de nuestros asesores, quienes le brindaran las herramientras para formar parte de ReparaHub</p></div>
				<div className="d-flex mx-2 justify-content-end"><p className=" fst-italic">proveedores@repara.hub</p></div>
				<div className="d-flex mx-2"><p className="fst-italic">0212- 910 60 41 y Whatssap 0422- 9106041</p></div>
			</div>
			<h3 className="display-9 text-center ">Beneficios:</h3>
			<div className="container border-top border-1 border-bottom py-5 "  >
				<div className="d-flex flex-row border rounded bg-primary bg-opacity-50 ">
					<div className="col-md-8 mx-2">
						<p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto dolores reprehenderit temporibus corporis velit porro enim error voluptatum asperiores et eius, cum aperiam laborum fugiat, dignissimos sapiente.</p>
					</div>
					<div className="col-md-4 mx-2 my-2"> 
						<img src= {TallerImg03} alt=""  className="rounded-circle img-fluid rounded-sm" />
					</div>
				</div>
			</div>

		</div>
	);
};

Proveedores.propTypes = {
	match: PropTypes.object
};