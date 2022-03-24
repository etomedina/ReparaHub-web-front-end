import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="form-group">
			{/* Formulario para registro de usuario  */}
			<form>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Ingresa tu nombre</label> */}
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu nombre"/>
					{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Ingresa tu apellido</label> */}
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu apellido" />
					{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Correo electronico</label> */}
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electronico"/>
					{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Contraseña</label> */}
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contraseña"/>
					{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Confirmar contraseña</label> */}
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirmar Contraseña"/>
					{/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
				</div>
				<div className="form-check">
					<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
					<label class="form-check-label" for="defaultCheck1">
					Recordarme
					</label>
				</div>
				<button type="submit" className="btn btn-primary">Registrarme</button>
				<div>
					<span>Ya tienes cuenta?
						<button type="submit" className="btn btn-primary">Ir a login</button>
					</span>
				</div>


				
				
			</form>

			
		</div>
	);
};

SignUp.propTypes = {
	match: PropTypes.object
};
