import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

// import "../../styles/solicitud.css";
// import "../../styles/home.css";

export const Solicitud = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const datauser2 = JSON.parse(localStorage.getItem('data_user'));
  
  
  // const user_param= localStorage.gettItem("data_user");

  return (
    <div className="container m-0 d-flex flex-column flex-nowrap align-items-center">

        <div className="my-0 mx-0">
          {" "}
            <span>
                <div >Usuario: <b>{datauser2.name} {datauser2.familyname} </b></div>
            </span>
        </div>

        <div className="center">
          <div className="my-2">
            <hr />
          </div>
          <h6 className="my-2">
            <b>QUE PROBLEMA TIENE TU VEHICULO?</b>
          </h6>
        </div>

        <form>
            <div className="col p-3 d-grid gap-3 my-2">
              <div className="make">
                <select className="rounded-pill">
                  <option select="defaultValue">
                    Selecciona marca de tu vehiculo
                  </option>
                  <option value="1">Toyota</option>
                </select>
              </div>
              <div className="model">
                <select className="rounded-pill">
                  <option>Selecciona modelo de tu vehiculo</option>
                  {store.models.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
              <div className="category">
                <select className="rounded-pill">
                  <option>Selecciona categoria de tu vehiculo</option>
                  {store.categorys.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex flex-row justify-content-between mx-1">
                  <div className="d-flex gap-3 flex-column flex-nowrap justify-content-between">
                    <select className="rounded-pill">
                        <option select="defaultValue">Transmision</option>
                        <option value="1">Automatico</option>
                        <option value="2">Manual</option>
                      </select>
                      <select className="rounded-pill">
                        <option select="defaultValue">Año</option>
                        <option value="1">2022</option>
                        <option value="2">2021</option>
                      </select>
                      <label>
                            <input
                              className="rounded-pill"
                              type="text"
                              name="name"
                              placeholder="Número de Teléfono"
                            />
                      </label>
                    </div>
                      <div className="remember-box">
                    {/* Casilla Recordar */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label text-dark" htmlFor="defaultCheck1">
                      Guardar mi seleccion predeterminada
                    </label>
                  </div>
                </div>
                  
                  <select className="custom-select rounded-pill">
                    <option select="defaultValue">Que falla tiene tu vehiculo</option>
                    <option value="1">No funciona aire acondicionado</option>
                    <option value="2">Manual</option>
                </select>
                    <label for="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control rounded my-0" id="exampleFormControlTextarea1" rows="3" placeholder="Explique Brevemente su Incidente..."></textarea>
                <div>
                <script><div>
                            if (navigator.geolocation){
                                navigator.geolocation.getCurrentPosition
                                (function(place){
                                    //data.innerHTML=coords.latitude+" - " + place+coords.longitude + place; 
                                    data.innerHTML="  "+ place.
								    coords.latitude +" "+ place.
								    coords.longitude;
                                  })
                            }
                            
                            </div>
                            
                    </script>
                    <p className="h6" >Ubicación actual/Seleccionada: </p>
					<div  id="data">  </div>	
                </div>
<<<<<<< HEAD
        </div>
        <div className="d-flex justify-content-center my-1">
          <Link to="/propuestas">
=======
                <Link to="/propuestas">
>>>>>>> 7e795c46ae8d24a545585079b277737f8d55dbdf
                <span className="btn btn-primary btn-sm" href="#" role="button">Solicitar Servicio</span>
          </Link>
            </div>
            </form>
    </div>







 
  );    
};

Solicitud.propTypes = {
  match: PropTypes.object,
};
