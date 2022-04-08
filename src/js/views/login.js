import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import repara_hub from "../../img/repara_hub.png"


export const Login = (props) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const params = useParams();


	const [userlogin, setUserlogin] = useState({
		email: "",
		password: "",

	})

	const checkIn = async () => {
		const response = await fetch(
			"http://127.0.0.1:3000/login", {
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
				'Authorization': 'Bearer ' + token // ⬅⬅⬅ authorization token
			},

		})
		const datap = await resp.json();
		//console.log(datap);
		localStorage.setItem("data_user", JSON.stringify(datap));
		//console.log=(`que es esto ${datap.email} `) 
		// console.log(`que es esto ${datap.name},${datap.familyname},${datap.email},${datap.id}`)
		// console.log(`after incrementing, counts value is ${token}.`);
		//alert("This is the data you requested"+ "{(jwt_token)}");

		// console.log("This is the data you requested", datap);
		// return datap
		//const datauser = JSON.stringify(localStorage.getItem('data_user'))
		//this.DATA = JSON.parse(localStorage.getItem('contact_form'));

		//const datauser = JSON.parse(localStorage.getItem('data_user'));
		//console.log(datauser)
		return history.push("/solicitud");
	}


	return (
		<div className="container-fluid login-screen p-0 m-0 d-flex flex-column flex-nowrap align-items-center justify-content-center">
			<div className='brand-login d-flex align-items-center'>
				<Link to="/">
					<img src={repara_hub}></img>
				</Link>
			</div>
			<p className='about-title text-white p-0 m-0'>Inicio de sesión</p>
			<hr className='separador'></hr>
			<form>
				<div className="container-sm form-group d-flex justify-content-center m-0">
					{/* Formulario para registro de usuario  */}
					<div className="row row row-cols-auto">
						<div className="d-grid login-form gap-3 p-3 my-4">

							<div className="form-group">
								{/* Email */}
								<input
									type="email"
									className="form-control rounded-pill"
									id="form-03"
									placeholder="Correo electronico"
									value={userlogin.email}
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
									}} />

							</div>
							<div className="form-group">
								{/* Password */}
								<input
									type="password"
									className="form-control rounded-pill"
									id="form-04"
									placeholder="Contraseña"
									value={userlogin.password}
									onKeyPress={(e) => {
										if (e.key.search(/[a-z]/) === -1) {
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
									id="defaultCheck1" />
								<label className="form-check-label text-dark" htmlFor="defaultCheck1">
									Recordarme
								</label>
							</div>
							{/* Boton para validar los datos del login */}
							<button
								type="button"
								className="btn btn-success rounded-pill"
								onClick={async (e) => {
									const userCheckout = await checkIn(userlogin)
								}}
							>Ingresar</button>

							<hr className='separador'></hr>
							<div className="p-3 inner-action d-flex flex-row flex-nowrap justify-content-around align-items-center" >
								<span className='text-white call-to-action'>¿No tiene una cuenta?
									{/* Boton para enviar al usuario a la vista Sign Up */}
								</span>
								<Link to="/signup">
									<span className="btn rounded-pill btn-register" href="#" role="button">
										Registrarse
									</span>
								</Link>
							</div>

						</div>
					</div>

				</div>
			</form>
		</div>

	)
};

Login.propTypes = {
	match: PropTypes.object,
	handleCreateUsuario: PropTypes.func,
};
