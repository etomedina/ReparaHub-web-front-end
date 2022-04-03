import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import TallerImg01 from "../../img/taller.jpg"
import TallerImg02 from "../../img/repara_01.jpg"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
		<div className=" ">


			<div className="container  p-2 text-center shadow-1-strong mb-5   text-white  border rounded  ">
			{/* <div className=" p-2 text-center shadow-1-strong mb-5 bg-primary bg-opacity-25 text-muted  border rounded"></div> "mb-1 mt-1 display-6  fw-bold bg-light" display-7 fw-bold bg-light	 */}
				<h6 className=" mb-1 mt-1 display-6  fw-bold ">ReparaHub es una nueva forma de solicitar servicio tecnico automotriz</h6>
				<div className="transpa-bg"><img src= {TallerImg01} className="container img-fluid" alt="..."></img> </div>
				<p className=" display-7 fw-bold ">
					Te solucionamos el problema de tu vehiculo con un par de clics
				</p>
			</div>



			<div className="container border-top border-1 border-bottom py-5"  >
				<div className="d-flex flex-row">
					<div className="col-md-8 ">
						<h1 >Que es <span className="text-muted">ReparaHub?</span> </h1>
						<p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto dolores reprehenderit temporibus corporis velit porro enim error voluptatum asperiores et eius, cum aperiam laborum fugiat, dignissimos sapiente.</p>
					</div>
					<div className="col-md-4"> 
						<img src= {rigoImage} alt=""  className="rounded-circle img-fluid rounded-sm" />
					</div>
				</div>
			</div>
			<div className="container py-5 flex-row d-flex">
				<div className="d-flex flex-row">
						<div className="d-flex">
							<div className="container">
								<img src={TallerImg02} className="rounded-circle rounded-sm img-fluid" alt=""/>
							</div>
							
						</div>
						<div className="flex-colum">
							<div  className="col-12">
								<h1 > <b>Por que</b> <span className="text-muted"> me conviene?</span> </h1>
								<p>Donec ullamcoper nulla non metus autor fringilla.Vestibulum id igula porta felis euismod semper. 
									Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, rsus commodo.
								</p>
							</div>
						</div>    
				</div> 
			</div>
			<div className="d-flex flex-row border rounded bg-primary bg-opacity-25 text-muted justify-content-around">
				<div className="d-flex flex-column my-1">
					<p>No esperes mas,</p>
					<p>Registrate con unos simples pasos</p>
				</div>
				<div className="d-flex my-3 mx-1">
					<Link to="/signup">
						<button className="btn btn-primary">Registrarse</button>
					</Link>
				</div>
			</div>

		</div>	
		
);