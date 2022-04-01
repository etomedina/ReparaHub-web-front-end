import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Solicitud = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
        <div>
            <h2>QUE PROBLEMA TIENE TU  VEHICULO?</h2>
            <div>
                <div className='container-fluid'  >
                    <select className="custom-select">
                        <option select='defaultValue'>Selecciona marca de tu vehiculo</option>
                        <option value="1">Toyota</option>
                        
                    </select>
                    <select className="custom-select">
                        <option select='defaultValue'>Selecciona modelo de tu vehiculo</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="custom-select">
                        <option select='defaultValue'>Selecciona categoria de tu vehiculo</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>     
                </div>
                <div className=''>
                    <div className=''> 
                        <select className="custom-select">
                            <option select='defaultValue'>Transmision</option>
                            <option value="1">Automatico</option>
                            <option value="2">Manual</option>
                        </select>
                        <select className="custom-select">
                            <option select='defaultValue'>Año</option>
                            <option value="1">2022</option>
                            <option value="2">2021</option>
                        </select>      
                    </div>
                    <div className=''>
                        <div className="form-check">
                            {/* Casilla Recordar */}
                            <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                Guardar mi seleccion predeterminada
                                </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container-fluid'>
                
                        <select className="custom-select">
                            <option select='defaultValue'>Que falla tiene tu vehiculo</option>
                            <option value="1">Automatico</option>
                            <option value="2">Manual</option>
                        </select>
                            
                    
                
                </div>
            </div>
        </div>
        );
};

Solicitud.propTypes = {
	match: PropTypes.object
};