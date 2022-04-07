import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// import "../../styles/solicitud.css";
// import "../../styles/home.css";

export const Solicitud = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const datauser2 = JSON.parse(localStorage.getItem('data_user'));
  
  
  // const user_param= localStorage.gettItem("data_user");

  return (
    <form className="d-flex bloque1">
      <div className="row align1">
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
        <div className="center1">
          <div className="align1">
            <div className="col d-grid gap-3 my-2">
              <div className="make">
                <select>
                  <option select="defaultValue">
                    Selecciona marca de tu vehiculo
                  </option>
                  <option value="1">Toyota</option>
                </select>
              </div>
              <div className="model">
                <select>
                  <option>Selecciona modelo de tu vehiculo</option>
                  {store.models.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
              <div className="category">
                <select>
                  <option>Selecciona categoria de tu vehiculo</option>
                  {store.categorys.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 my-7 mx-15 align1 ">
            <div className="row row-cols-2 gap-3 align3  ">
              <div className="row d-grid gap-3 gx-5">
                <div>
                  <select>
                    <option select="defaultValue">Transmision</option>
                    <option value="1">Automatico</option>
                    <option value="2">Manual</option>
                  </select>
                </div>
                <div>
                  <select>
                    <option select="defaultValue">Año</option>
                    <option value="1">2022</option>
                    <option value="2">2021</option>
                  </select>
                </div>
              </div>
              <div className="row d-grid gap-2">
                <div>
                  <div className="col">
                    <form>
                      <label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Número de Teléfono"
                        />
                      </label>
                    </form>
                  </div>
                  <div>
                    {/* Casilla Recordar */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Guardar mi seleccion predeterminada
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="my-2">
            <hr />
        </div>
        <div>
            <div>
                <select className="custom-select">
                    <option select="defaultValue">Que falla tiene tu vehiculo</option>
                    <option value="1">No funciona aire acondicionado</option>
                    <option value="2">Manual</option>
                </select>
            </div>
            <div>    
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Explique Brevemente su Incidente..."></textarea>
                </div>
            </div>
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
        </div>
        <div className="d-flex justify-content-center my-1">
          <Link to="/propuestas">
                <span className="btn btn-primary btn-sm" href="#" role="button">Solicitar Servicio</span>
          </Link>
            
        </div>
        
      </div>
    </form>
  );    
};

Solicitud.propTypes = {
  match: PropTypes.object,
};
