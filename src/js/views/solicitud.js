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
      <div className="user-banner align-self-start p-3">
        {" "}
        <span>
        <div className='user-banner-text'>Usuario: <b>{datauser2.name} {datauser2.familyname} </b></div>
        </span>
      </div>
      <hr className="separador-service"></hr>
      <h6 className="my-2">
        <b>¿QUÉ PROBLEMA PRESENTA SU VEHÍCULO?</b>
      </h6>


      <form>
        <div className="col p-3 d-grid gap-2 my-2">
          <div className="make">
            <select className="rounded-pill border-0">
              <option select="defaultValue">
                Selecciona marca de tu vehiculo
              </option>
              <option value="1">Toyota</option>
            </select>
          </div>
          <div className="model">
            <select className="rounded-pill border-0">
              <option>Selecciona modelo de tu vehiculo</option>
              {store.models.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="category">
            <select className="rounded-pill border-0">
              <option>Selecciona categoria de tu vehiculo</option>
              {store.categorys.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-row justify-content-between mx-1">
            <div className="d-flex gap-2 flex-column flex-nowrap justify-content-between">
              <select className="rounded-pill border-0">
                <option select="defaultValue">Transmision</option>
                <option value="1">Automatico</option>
                <option value="2">Manual</option>
              </select>
              <select className="rounded-pill border-0">
                <option select="defaultValue">Año</option>
                <option value="1">2022</option>
                <option value="2">2021</option>
                <option value="3">2020</option>
                <option value="3">2019</option>
                <option value="4">2018</option>
                <option value="5">2017</option>
                <option value="6">2016</option>
                <option value="7">2015</option>
                <option value="8">2014</option>
                <option value="9">2013</option>
              </select>
            </div>
            <div className="remember-box p-1">
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
          <label>
            <input
              className="rounded-pill border-0 phone-n"
              type="text"
              name="name"
              placeholder="Celular"
            />
          </label>
          <select className="custom-select rounded-pill">
            <option select="defaultValue">Que falla tiene tu vehiculo</option>
            <option value="1">No funciona aire acondicionado</option>
            <option value="2">Fallas en el radiador </option>
            <option value="3">Falla en el embrague</option>
            <option value="4">EL vehiculo no arranca</option>
            <option value="5">Problemas en la suspensión</option>
            <option value="6">Problemas con un caucho</option>

          </select>
          <label for="exampleFormControlTextarea1" className="form-label"></label>
          <textarea className="form-control rounded-lg" id="exampleFormControlTextarea1" rows="3" placeholder="Explique Brevemente su Incidente..."></textarea>

          <div className="text-dark d-flex flex-column align-items-center">
            <script><div>
              if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition
                  (function (place) {
                    data.innerHTML = "latitud:  " + place.
                      coords.latitude + "<br>longitud: " + place.
                        coords.longitude;
                  })
              }</div>
            </script>
            <p className="location-title">Ubicación actual:</p>
            <div id="data"><div className="spinner-border text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div></div>
          </div>




          <div className="d-flex flex-row justify-content-around my-1">
            <Link to="/propuestas">
              <span className="btn btn-success rounded-pill" href="#" role="button">Solicitar Servicio</span>
            </Link>
          </div>
        </div>
      </form>
    </div>








  );
};

Solicitud.propTypes = {
  match: PropTypes.object,
};
