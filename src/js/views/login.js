import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = (props) => {
	const { store, actions } = useContext(Context);
    const history = useHistory();
	const params = useParams();


    const [userlogin, setUserlogin]  = useState({
		email: "",
		password:"",
		
	})

    const checkIn = async ()=>{
		const response = await fetch(
			"http://127.0.0.1:3000/login",{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userlogin),
			}
		);
		if (!response.ok) 
			return alert("Ha habido un problema en la solicitud de login");
			
		const data = await response.json();
		//this is to set a local const with token value to check if was returned from backend
		const token = data.token;
		//save token value on local storage
		localStorage.setItem("token", data.token);
		//this is to check  the id returned from backen
		//console.log(`que es esto ${data.user_id}`)


		const resp = await fetch(`http://127.0.0.1:3000/private`, {
			method: 'GET',
			headers: { 
			  "Content-Type": "application/json",
			  'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
			  }, 
			  
		 })
		 const datap = await resp.json();
		 //console.log=(`que es esto ${datap.email} `) 
		// console.log(`que es esto ${datap.name},${datap.familyname},${datap.email},${datap.id}`)
		// console.log(`after incrementing, counts value is ${token}.`);
		 	//alert("This is the data you requested"+ "{(jwt_token)}");

		// console.log("This is the data you requested", datap);
		// return datap
		return history.push("/solicitud");
	}	
	
	
	return(
        <form>
		<div  className="container-sm form-group d-flex justify-content-center ">
			{/* Formulario para registro de usuario  */}
			<div className="row row row-cols-auto">
			<div className="d-grid gap-3 bg-light border p-3">
							
				<div className="form-group">
					{/* Email */}
					<input 
					type="email" 
					className="form-control" 
					id="form-03" 
					placeholder="Correo electronico"
					value = {userlogin.email}
					// onKeyPress = {(e) =>{
					// 	if (e.key.search(/[a-z]/) ===-1){
					// 		e.preventDefault();
					// 		e.stopPropagation();
					// 		return;
					// 	}
					// }}
					onChange={(e) => {
						setUserlogin({
							...userlogin,
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
					value = {userlogin.password}
					onKeyPress = {(e) =>{
						if (e.key.search(/[a-z]/) ===-1){
							e.preventDefault();
							e.stopPropagation();
							return;
						}
					}}
					onChange={(e) => {
						setUserlogin({
							...userlogin,
							password: e.target.value,
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
				{/* Boton para validar los datos del login */}
				<button 
				type="button" 
				className="btn btn-primary"
				onClick ={async(e)=>{
					const userCheckout = await checkIn(userlogin)
				}}
				>Ingresar</button>

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

        
    )
};

Login.propTypes = {
	match: PropTypes.object,
	handleCreateUsuario: PropTypes.func,
};
