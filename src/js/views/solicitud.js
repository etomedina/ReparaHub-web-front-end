import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Solicitud = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
        <div>
            <div d-flex flex-column>
            <h1>QUE PROBLEMA TIENE TU  VEHICULO?</h1>
            <select className="custom-select">
                <option select='defaultValue'>Selecciona marca de tu vehiculo</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
            <div d-flex>
            <select className="custom-select">
                <option select='defaultValue'>Transmision</option>
                <option value="1">Automatico</option>
                <option value="2">Manual</option>
            </select>
                
            </div>


        </div>

        <div>
            <div>div2</div>

        </div>
        </div>
        );
};

Solicitud.propTypes = {
	match: PropTypes.object
};