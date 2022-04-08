import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import ProvD from "../../img/ProveedorD.jpg"
import "../../styles/home.css";



export const Serviciod = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const datauser2 = JSON.parse(localStorage.getItem('data_user'));
	// const history = useHistory();

	return (
		<div className="container m-0 d-flex flex-column flex-nowrap align-items-center">
			<div className="user-banner align-self-start p-3">
				{" "}
				<span>
				<div className='user-banner-text'>Usuario: <b>{datauser2.name} {datauser2.familyname} </b></div>
				</span>
			</div>
			<hr className="separador-service"></hr>
			<h6 className="my-2 text-center">
				<b>SELECCIONASTE ESTE PROVEEDOR DE SERVICIO</b>
			</h6>

			<div className="container-sm gap-3 d-flex flex-column justify-content-between">

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
							src={ProvD}
							alt=""
							className=" img-fluid rounded-circle p-1"
						></img>
					</div>

				</div>

				<div className="d-flex flex-column aprobacion-1 bg-success justify-content-center text-white p-2">
					<p className="p-2 m-0"><strong>Su proveedor de servicio le contactará en breves momentos.</strong></p>
				</div>
				<div className="d-flex flex-column aprobacion-2 justify-content-center text-white p-2">
					<p className="p-2 m-0">Consulte con su proveedor de servicio la vigencia de su garantía</p>
				</div>
				<div className="d-flex flex-column aprobacion-2 align-items-center mt-0 text-white p-2 mb-2">
					<p className="p-2 m-0" >Si está conforme con la asistencia ofrecida, puede seleccionar el botón <strong>aceptar</strong>.</p>
					<button type="button" className="btn btn-success rounded-pill my-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
						ACEPTAR
					</button>

					<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h6 className="modal-title text-dark" id="staticBackdropLabel"><strong>Por favor califica el servicio prestado</strong></h6>
								</div>
								<div className="modal-body text-dark d-flex flex-column align-items-center">
									<form className='w-100'>
										<p className="clasificacion rounded-pill p-4 d-flex flex-row justify-content-around">
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
									<Link to="/solicitud">
										<span className="btn btn-success rounded-pill" href="#" role="button" data-bs-dismiss="modal" aria-label="Close">FInalizar</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

Serviciod.propTypes = {
	match: PropTypes.object
};