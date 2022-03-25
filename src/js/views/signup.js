import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// const [userName, setUserName] = useState("")
	// const [userLastName, setUserLastName] = useState("")
	// const [userEmail, setUserEmail] = useState("")
	// const [userPswd, setUserPswd] = useState("")
	// const [userPswdVal, setUserPswdVal] = useState("")
	const [usuario, setUsuario]  = useState({
		name:"",
		familyname: "",
		email: "",
		password:"",
		password_confirm: "",
	})

	const ValidateInput = () => {
		if(inputValue === "") alert("Se deben llenar todos los campos para el registro");
		else alert("Registro exitoso");
	}

	// const [userPswdVal, setUserPswdVal] = useState("")
	const SaveUser = async ()=>{
		const response = await fetch(
			"http://172.22.150.112:3000/registro_usuario/",{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(usuario),
			}
		);
		const body = await response.json();
		if (!response.ok){
			return true;
		}
		else return false;
	}	


	return (
		<form>
		<div  className="container-sm form-group d-flex justify-content-center ">
			{/* Formulario para registro de usuario  */}
			<div className="row row row-cols-auto">
			<div className="d-grid gap-3 bg-light border p-3">
				<div className="form-group">
					{/* Name*/}
					<input 
					type="text" 
					className="form-control" 
					id="form-01" 
					placeholder="Ingresa tu nombre"
					value = {usuario.name}
					onKeyPress = {(e) =>{
						if (e.key.search(/[a-zA-Z]/) ===-1){
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}}
					onChange={(e) => {
						setUsuario({
							...usuario,
							name: e.target.value,
						});
					}}
					/>
				</div>
				<div className="form-group">
					{/* Lastname */}
					<input 
					type="text" 
					className="form-control" 
					id="form-02" 
					placeholder="Ingresa tu apellido"
					value = {usuario.familyname}
					onKeyPress = {(e) =>{
						if (e.key.search(/[a-z]/i) ===-1){
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}}
					onChange={(e) => {
						setUsuario({
							...usuario,
							familyname: e.target.value,
						});
					}}
					/>
				</div>
				<div className="form-group">
					{/* Email */}
					<input 
					type="email" 
					className="form-control" 
					id="form-03" 
					placeholder="Correo electronico"
					value = {usuario.email}
					// onKeyPress = {(e) =>{
					// 	if (e.key.search(/[a-z]/) ===-1){
					// 		e.preventDefault();
					// 		e.stopPropagation();
					// 		return;
					// 	}
					// }}
					onChange={(e) => {
						setUsuario({
							...usuario,
							email: e.target.value,
						});
					}}/>
					
				</div>
				<div className="form-group">
					{/* Password */}
					<input 
					type="password" 
					className="form-control" 
					id="form-04" 
					placeholder="Contraseña"
					value = {usuario.password}
					onKeyPress = {(e) =>{
						if (e.key.search(/[a-z]/) ===-1){
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}}
					onChange={(e) => {
						setUsuario({
							...usuario,
							password: e.target.value,
						});
					}}
					/>
				</div>
				<div className="form-group">
					{/* PasswordValidate */}
					<input 
					type="password" 
					className="form-control" 
					id="form-05" 
					placeholder="Confirmar Contraseña"
					value = {usuario.password_confirm}
					onKeyPress = {(e) =>{
						if (e.key.search(/[a-z]/) ===-1){
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}}
					onChange={(e) => {
						setUsuario({
							...usuario,
							password_confirm: e.target.value,
						});
					}}
					/>
				</div>
				<div className="form-check">
					{/* Casilla Recordar */}
					<input 
					className="form-check-input" 
					type="checkbox" 
					value="" 
					id="defaultCheck1"/>
						<label className="form-check-label" htmlFor="defaultCheck1">
						Recordarme
						</label>
				</div>
				{/* Boton para guardar usuario ingresado */}
				<button 
				type="button" 
				className="btn btn-primary"
				onClick ={async(e)=>{
					const userCreate = await SaveUser(usuario)
					if (userCreate){
						alert("Registro exitoso");
						setUsuario({
							name:"",
							familyname: "",
							email: "",
							password:"",
							password_confirm: "",
							});}
					else alert("Registro fallido");
					}}
				>Registrarme</button>

				<div  className="p-3 bg-light border" >
					<span>Ya tienes cuenta?
						{/* Boton para enviar al usuario a la vista Login */}
						
					<Link to="/login">
						<span className="btn btn-primary btn-sm" href="#" role="button">
						Ir a login
						</span>
					</Link>
					</span>
				</div>				
				
			</div>
		</div>
			
		</div>
	</form>	
	);
};

SignUp.propTypes = {
	match: PropTypes.object,
	handleCreateUsuario: PropTypes.func,
};
