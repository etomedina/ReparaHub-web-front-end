import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<form>
		<div  className="container-sm form-group d-flex justify-content-center ">
			{/* Formulario para registro de usuario  */}
			<div className="row row row-cols-auto">
			<div class="d-grid gap-3 bg-light border p-3">
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Ingresa tu nombre</label> */}
					<input 
					type="text" 
					className="form-control" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Ingresa tu nombre"/>
					
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Ingresa tu apellido</label> */}
					<input 
					type="text" 
					className="form-control" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Ingresa tu apellido" />
				</div>
				<div className="form-group">
					<input 
					type="email" 
					className="form-control" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Correo electronico"/>
					
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Contraseña</label> */}
					<input 
					type="text" 
					className="form-control" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Contraseña"/>
				</div>
				<div className="form-group">
					{/* <label for="exampleInputEmail1">Confirmar contraseña</label> */}
					<input 
					type="text" 
					className="form-control" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Confirmar Contraseña"/>
				</div>
				<div className="form-check">
					<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
					<label class="form-check-label" for="defaultCheck1">
					Recordarme
					</label>
				</div>
				<button type="submit" className="btn btn-primary" onClick={() => actions.changeColor(index, "orange")}>Registrarme</button>
				<div  class="p-3 bg-light border" >
					<span>Ya tienes cuenta?
						<button type="submit" className="btn btn-primary" onClick={() => actions.changeColor(index, "orange")}>Ir a login</button>
					</span>
				</div>				
				
			</div>
		</div>
			
		</div>
	</form>	
	);
};

SignUp.propTypes = {
	match: PropTypes.object
};
