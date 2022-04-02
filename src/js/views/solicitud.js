import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Solicitud = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
        <div className='container mx-1'>
            <h6>QUE PROBLEMA TIENE TU  VEHICULO?</h6>
            <div className='d-flex flex-column  justify-content-around my-3'>
                <div className='container-fluid'  >
                    <select className="custom-select my-2">
                        <option select='defaultValue'>Selecciona marca de tu vehiculo</option>
                        <option value="1">Toyota</option>
                        
                    </select>
                    <select className="custom-select my-2">
                        <option select='defaultValue'>Selecciona modelo de tu vehiculo</option>
                        
                        <option value="1">{store.models}</option>
                        <option value="2">Fortuner</option>
                        <option value="3">Yaris Belta</option>
                    </select>
                    <select className="custom-select my-2">
                        <option select='defaultValue'>Selecciona categoria de tu vehiculo</option>
                        <option value="1">4x4</option>
                        <option value="2">Sedan</option>
                        <option value="3">Familiar</option>
                    </select>     
                </div>
                <div className='d-flex my-3'>
                    <div className='d-flex flex-column'> 
                        <select className="custom-select my-2">
                            <option select='defaultValue'>Transmision</option>
                            <option value="1">Automatico</option>
                            <option value="2">Manual</option>
                        </select>
                        <select className="custom-select my-2">
                            <option select='defaultValue'>Año</option>
                            <option value="1">2022</option>
                            <option value="2">2021</option>
                        </select>      
                    </div>
                    <div className='d-flex'>
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
                            <option value="1">No funciona aire acondicionado</option>
                            <option value="2">Manual</option>
                        </select>

                        <texterea>Ingrese aqui cualquier sugerencia</texterea>
                            
                    
                
                </div>
            </div>
        </div>
        );
};

Solicitud.propTypes = {
	match: PropTypes.object
};