import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import repara_hub from "../../img/repara_hub.png"


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
		telephone:"",
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
			"http://127.0.0.1:3000/registro_usuario/",{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(usuario),
			}
		);
		const body = await response.json();
		if (!response.ok){
			return false;
		}
		else return true;
	}	

	return (
		<div className="container-fluid register-screen p-0 m-0 d-flex flex-column flex-nowrap align-items-center">
			<div className='brand-register d-flex align-items-center'>
				<Link to="/">
				<img src={repara_hub}></img>
				</Link>
			</div>
			<p className='about-title text-white'>Ingresa tus datos</p>
			<hr className='separador'></hr>
			<form>
			<div className="form-group">
				{/* Formulario para registro de usuario  */}
				<div className="row row-cols-auto">
				<div className="d-grid gap-3 p-3 my-4">
					<div className="form-group">
						{/* Name*/}
						<input 
						type="text" 
						className="form-control rounded-pill" 
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
						className="form-control rounded-pill"  
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
						className="form-control rounded-pill"  
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
						{/* Telephone */}
						<input 
						type="text" 
						className="form-control rounded-pill" 
						id="form-06" 
						placeholder="04xx-xxx-xxxx"
						value = {usuario.telephone}
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
								telephone: e.target.value,
							});
						}}/>
						
					</div>
					<div className="form-group">
						{/* Password */}
						<input 
						type="password" 
						className="form-control rounded-pill" 
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
						className="form-control rounded-pill" 
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
							<label className="form-check-label text-dark" htmlFor="defaultCheck1">
							Recordarme
							</label>
					</div>
					{/* Boton para guardar usuario ingresado */}
					<button 
					type="button" 
					className="btn btn-success rounded-pill"
					onClick ={async(e)=>{
						const userCreate = await SaveUser(usuario)
						if (userCreate){
							alert("Registro exitoso");
							setUsuario({
								name:"",
								familyname: "",
								email: "",
								telephone: "",
								password:"",
								password_confirm: "",
								});}
						else alert("Registro fallido");
						}}
					>Registrarme</button>


					<hr className='separador'></hr>
					<div className="p-3 inner-action d-flex flex-row flex-nowrap justify-content-around align-items-center" >
						<span className='text-white call-to-action'>¿Ya tienes cuenta?
							{/* Boton para enviar al usuario a la vista Login */}
						</span>
						<Link to="/login">
							<span className="btn rounded-pill btn-register" href="#" role="button">
							Ingresar
							</span>
						</Link>
					</div>				
				</div>
			</div>
				
			</div>
		</form>	
		<div className="current-location text-white d-flex flex-column align-items-center">
						<script><div>
							if (navigator.geolocation){
								navigator.geolocation.getCurrentPosition
								(function(place){
									data.innerHTML="latitud:  "+ place.
									coords.latitude +"<br>longitud: "+ place.
									coords.longitude;
									})
							}</div>
					</script>	
						<p className="location-title">Usted se encuentra aquí:</p>
						<div id="data"><div className="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div></div>
					</div>
	</div>
	);
};

SignUp.propTypes = {
	match: PropTypes.object,
	handleCreateUsuario: PropTypes.func,
};
