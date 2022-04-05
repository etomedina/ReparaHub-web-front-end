import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Propuesta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<div>
				<h3 className="display-9 text-center">
					PROPUESTAS DE PRESTADORES DE SERVICIOS
				</h3>
			</div>
			{/* Proveedor 1 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h3 className="display-12 text-sm-left">
							Proveedor de servicio A
						</h3>
						<p className="display-9 text-justify">
							Revision y chequeo del vehiculo a nivel mecanico y
							electrico con diagnostico del problema en menos de
							24 horas a partir del momento del reporte
						</p>
					</div>
					<div className="col-2">
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
					</div>
					<div className="col-2">
						<img
							src={RigoImg}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn btn-primary rounded-pill">
					Contratar
				</button>
			</div>

			{/* Proveedor 2 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h3 className="display-12 text-sm-left">
							Proveedor de servicio B
						</h3>
						<p className="display-9 text-justify">
							Revision de falla reportada a nivel mecanico con
							personal especializado en vehiculos marca toyota.
							Trabajo garantizado.
						</p>
					</div>
					<div className="col-2">
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
					</div>
					<div className="col-2">
						<img
							src={RigoImg}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn btn-primary rounded-pill">
					Contratar
				</button>
			</div>

			{/* Proveedor 3 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h3 className="display-12 text-sm-left">
							Proveedor de servicio C
						</h3>
						<p className="display-9 text-justify">
							Evaluacion de vehiculo a nivel general, con
							diagnostico preciso en los distintos niveles.
							Garantia por 1 semana.
						</p>
					</div>
					<div className="col-2">
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
					</div>
					<div className="col-2">
						<img
							src={RigoImg}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn btn-primary rounded-pill">
					Contratar
				</button>
			</div>

			{/* Proveedor 4 */}
			<div className="container-sm border rounded">
				<div className="row">
					<div className="col-8">
						<h3 className="display-12 text-sm-left">
							Proveedor de servicio D
						</h3>
						<p className="display-9 text-justify">
							Revision del vehiculo en sitio, con envio de
							personal calificado al lugar del incidente para el
							diagnostico y reparacion del mismo.
						</p>
					</div>
					<div className="col-2">
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
					</div>
					<div className="col-2">
						<img
							src={RigoImg}
							alt=""
							className=" img-fluid rounded-sm"
						/>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-end my-2">
				<button type="button" className="btn btn-primary rounded-pill">
					Contratar
				</button>
			</div>
			<div className="d-flex justify-content-center">
				<button type="button" className="btn btn-primary btn-lg">
					CANCELAR
				</button>
			</div>
		</div>
	);
};

Propuesta.propTypes = {
	match: PropTypes.object
};
