import React from "react";
import repara_01 from "../../img/repara_01.jpg"
import repara_02 from "../../img/repara_02.jpg"
import taller_01 from "../../img/taller_01.jpg"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
	<div className="container m-0 d-flex flex-column flex-nowrap align-items-center">
		<div className="jumbotron jumbotron-fluid d-flex flex-column flex-nowrap justify-content-around mt-2 p-2" style={{backgroundImage: `url(${taller_01})` }}>
				<div className="d-flex flex-row flex-nowrap">
					<div className="col-6"></div>
					<h1 className="col-6 display-jt px-4 py-2 my-2 justify-content-end">Repara Hub es una nueva forma de solicitar servicio técnico automotriz</h1>
				</div>
				<p className="display-jt px-4 py-1 m-0 d-flex justify-content-end">Le solucionamos la falla de tu vehículo en un par de clics</p>
		</div>
		<div className="menu-about mt-3 p-1 d-flex flex-column flex-nowrap align-items-center">
			<p className='about-title m-0 pt-1 d-flex flex-row'> Conoce &nbsp;<p style={{color: `red` }}>Repara Hub</p></p>
			<hr className="break-about my-2"></hr>
			<div className='about d-flex flex-row flex-nowrap my-3 p-0 justify-content-center'>
				<img src={repara_01} className="rounded-circle align-self-center p-1" ></img>
				<div className='about-block d-flex flex-column flex-nowrap justify-content-around mx-3'>
					<p className='m-0 title-1' >¿Qué es Repara Hub?</p>
					<span> Es un servicio que le ofrece asistencia ante una falla en el lugar donde ud se encuentre</span>
				</div>
			</div>
			<div className='about d-flex flex-row-reverse flex-nowrap my-3 p-0 justify-content-center'>
				<img src={repara_02} className="rounded-circle align-self-center p-1" ></img>
				<div className='about-block d-flex flex-column flex-nowrap  mx-3'>
					<p className='m-0 title-1'>¿Por qué le conviene?</p>
					<span>Tendrá la tranquilidad de recibir ayuda de un técnico calificado donde usted se encuentre*</span>
				</div>
			</div>
			<p className="service-exception align-self-end m-1 px-3	">*Splo disponible en el área metropolitna de Caracas</p>
		</div>

		<div className="llamado-registro my-3 px-3 py-1 d-flex flex-row flex-nowrap justify-content-between align-items-center">
			<div className="d-flex flex-column flex-nowrap p-0 m-0"><p className="call-to-action p-0 m-0">¡No espere más!</p><p className='action-down p-0 m-0'>Regístrese con unos simples pasos</p></div>
			<Link to="/signup">
				<button className="btn rounded-pill btn-register">Registro</button>
			</Link>
		</div>
	</div>
	);
	};

