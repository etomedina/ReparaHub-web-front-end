import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/propuestas.css";
//import RigoImg from "../../img/rigo-baby.jpg"
import ProvA from "../../img/ProveedorA.jpg"
import ProvB from "../../img/ProveedorB.jpg"
import ProvC from "../../img/ProveedorC.jpg"
import ProvD from "../../img/ProveedorD.jpg"

export const Propuesta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	return (
		<div>
			<div>
				<h4 className="display-12 text-center">
					PROPUESTAS DE PRESTADORES DE SERVICIOS
				</h4>
			</div>
			{/* Proveedor 1 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h5 className="display-12 text-sm-left">
							{store.proveedores.name}
							Toyota Fix 2000
						</h5>
						<p className="display-10 text-justify">
							{store.proveedores.presupuesto}
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

			<div className="d-flex justify-content-end my-2">
				<Link to="/service">
					<button type="button" className="btn-sm btn-primary rounded-pill mx-2">
						Contratar
					</button>
				</Link>
			</div>

			{/* Proveedor 2 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h5 className="display-12 text-sm-left">
							Auto Repair Technology
						</h5>
						<p className="display-10 text-justify">
							Revision de falla reportada a nivel mecanico con
							personal especializado en vehiculos marca toyota.
							Trabajo garantizado.
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
							src={ProvB}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>	
					</div>
					
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn-sm btn-primary rounded-pill mx-2">
					Contratar
				</button>
			</div>

			{/* Proveedor 3 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h5 className="display-12 text-sm-left">
							Chasis Service
						</h5>
						<p className="display-10 text-justify">
							Evaluacion de vehiculo a nivel general, con
							diagnostico preciso en los distintos niveles.
							Garantia por 1 semana.
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
							src={ProvC}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>	
					</div>
					
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn-sm btn-primary rounded-pill mx-2">
					Contratar
				</button>
			</div>

			{/* Proveedor 4 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h5 className="display-12 text-sm-left">
							PDR Service
						</h5>
						<p className="display-10 text-justify">
							Revision del vehiculo en sitio, con envio de
							personal calificado al lugar del incidente para el
							diagnostico y reparacion del mismo.
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
							src={ProvD}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>	
					</div>
					
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn-sm btn-primary rounded-pill mx-2">
					Contratar
				</button>
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/">
					<button type="button" className="btn btn-primary btn-lg my-5">
						CANCELAR
					</button>
				</Link>
			</div>
		</div>
	);
};

Propuesta.propTypes = {
	match: PropTypes.object
};