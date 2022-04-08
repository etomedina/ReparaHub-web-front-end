import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/propuestas.css";
//import RigoImg from "../../img/rigo-baby.jpg"
import "../../styles/propuestas.css";
import ProvA from "../../img/ProveedorA.jpg"
import ProvB from "../../img/ProveedorB.jpg"
import ProvC from "../../img/ProveedorC.jpg"
import ProvD from "../../img/ProveedorD.jpg"

export const Propuesta = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	return (
		<div className="container m-0 d-flex flex-column flex-nowrap align-items-center">
			<div className="user-banner align-self-start p-3">
          {" "}
            <span>
                <div className='user-banner-text'>Usuario: <b>BuBulala{/* {datauser2.name} {datauser2.familyname} */} </b></div>
            </span>
        </div>
        <hr className="separador-service"></hr> 
          <h6 className="my-2 text-center">
            <b>PROPUESTAS DE PRESTADORES DE SERVICIOS</b>
          </h6>

			<div className="container-sm gap-3 d-flex flex-column justify-content-between">

				{/* Proveedor 1 */}
				<div className="row provider-card p-2">
				<div className="col-8 d-flex flex-column justify-content-between p-1">
						<span className="provider-name">
							{store.proveedores.name}
							Toyota Fix 2000
						</span>
						<p className="provider-description m-2">
							{store.proveedores.presupuesto}
							Revision y chequeo del vehiculo a nivel mecanico y electrico con diagnostico del problema en menos de 24 horas a partir del momento del reporte
						</p>
						<p className="provider-deal p-2 rounded-pill">
							Oferta a partir de <strong>XXX,xx Bs</strong>
						</p>
					</div>
					<div className="col-4 d-flex flex-column align-items-between p-0">
						<form>
							<p className="clasificacion rounded-pill p-1 d-flex flex-row justify-content-around">
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
						<img
							src={ProvA}
							alt=""
							className=" img-fluid rounded-circle p-1"
						></img>

				<div className="align-self-center">
				<Link to="/servicea">
					<button type="button" className="btn btn-success rounded-pill my-1">
						Contratar
					</button>
				</Link>
			</div>

					</div>
					
				</div>
			


				{/* Proveedor 2 */}
				<div className="row provider-card p-2">
				<div className="col-8 d-flex flex-column justify-content-between p-1">
						<span className="provider-name" style={{fontSize: `1.1rem` }}>
							{store.proveedores.name}
							Auto Repair Technology
						</span>
						<p className="provider-description m-2">
							{store.proveedores.presupuesto}
							Revision de falla reportada a nivel mecanico con
							personal especializado en vehiculos marca toyota.
							Trabajo garantizado.
						</p>
						<p className="provider-deal p-2 rounded-pill">
							Oferta a partir de <strong>XXX,xx Bs</strong>
						</p>
					</div>
					<div className="col-4 d-flex flex-column align-items-between p-1">
						<form>
							<p className="clasificacion rounded-pill p-1 d-flex flex-row justify-content-around">
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

						<img
							src={ProvB}
							alt=""
							className=" img-fluid rounded-circle p-1"
						></img>

			<div className="align-self-center">
				<Link to="/serviceb">
					<button type="button" className="btn btn-success rounded-pill my-1">
						Contratar
					</button>
				</Link>
			</div>

					</div>
					
				</div>

				{/* Proveedor 3*/}
				<div className="row provider-card p-2">
				<div className="col-8 d-flex flex-column justify-content-between p-1">
						<span className="provider-name">
							{store.proveedores.name}
							Chasis Service
						</span>
						<p className="provider-description m-2">
							{store.proveedores.presupuesto}
							Evaluacion de vehiculo a nivel general, con
							diagnostico preciso en los distintos niveles.
							Garantia por 1 semana.
						</p>
						<p className="provider-deal p-2 rounded-pill">
							Oferta a partir de <strong>XXX,xx Bs</strong>
						</p>
					</div>
					<div className="col-4 d-flex flex-column align-items-between p-1">
						<form>
							<p className="clasificacion rounded-pill p-1 d-flex flex-row justify-content-around">
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

						<img
							src={ProvC}
							alt=""
							className=" img-fluid rounded-circle p-1"
						></img>

				<div className="align-self-center">
				<Link to="/servicec">
					<button type="button" className="btn btn-success rounded-pill my-1">
						Contratar
					</button>
				</Link>
			</div>

					</div>
					
				</div>

				{/* Proveedor 4 */}
				<div className="row provider-card p-2">
				<div className="col-8 d-flex flex-column justify-content-between p-1">
						<span className="provider-name">
							{store.proveedores.name}
							PDR Service
						</span>
						<p className="provider-description m-2">
							{store.proveedores.presupuesto}
							Revision del vehiculo en sitio, con envio de
							personal calificado al lugar del incidente para el
							diagnostico y reparacion del mismo.
						</p>
						<p className="provider-deal p-2 rounded-pill">
							Oferta a partir de <strong>XXX,xx Bs</strong>
						</p>
					</div>
					<div className="col-4 d-flex flex-column align-items-between p-1">
						<form>
							<p className="clasificacion rounded-pill p-1 d-flex flex-row justify-content-around">
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

						<img
							src={ProvD}
							alt=""
							className=" img-fluid rounded-circle p-1"
						></img>


					
				<div className="align-self-center">
				<Link to="/serviced">
					<button type="button" className="btn btn-success rounded-pill my-1">
						Contratar
					</button>
				</Link>
			</div>
					</div>
		</div>

			</div>
			<div className="d-flex justify-content-center">
				<Link to="/solicitud">
					<button type="button" className="btn btn-danger rounded-pill my-3">
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