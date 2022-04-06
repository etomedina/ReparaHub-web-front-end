import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import ProvA from "../../img/ProveedorA.jpg"



export const Servicio = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	// const history = useHistory();

	return (
		<div>
            <div>
				<h4 className="display-12 text-center">
					SELECCIONASTE ESTE PROVEEDOR DE SERVICIO
				</h4>
			</div>
            <div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h5 className="display-12 text-sm-left">
							{/* {store.proveedores.name} */}
							Toyota Fix 2000
						</h5>
						<p className="display-10 text-justify">
							{/* {store.proveedores.presupuesto} */}
							Revision y chequeo del vehiculo a nivel mecanico y electrico con diagnostico del problema en menos de 24 horas a partir del momento del reporte
						</p>
					</div>
					<div className="col-4">
						<form>
							<p className="clasificacion">
								<input
									id="radio1"
									type="radio"
									name="estrellas"
									value="5"
								/>
								<label for="radio1">★</label>
								<input
									id="radio2"
									type="radio"
									name="estrellas"
									value="4"
								/>
								<label for="radio2">★</label>
								<input
									id="radio3"
									type="radio"
									name="estrellas"
									value="3"
								/>
								<label for="radio3">★</label>
								<input
									id="radio4"
									type="radio"
									name="estrellas"
									value="2"
								/>
								<label for="radio4">★</label>
								<input
									id="radio5"
									type="radio"
									name="estrellas"
									value="1"
								/>
								<label for="radio5">★</label>
							</p>
						</form>
					<div className="col-12">
						<img
							src={ProvA}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>	
					</div>
					
				</div>
			</div>

            <div className="d-flex justify-content-center">
				<Link to="/login">
					<button type="button" className="btn btn-primary btn-lg my-5">
						ACEPTAR
					</button>
				</Link>
			</div>
			
		</div>
	);
};

Servicio.propTypes = {
	match: PropTypes.object
};