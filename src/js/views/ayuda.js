import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ayuda = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container m-0 d-flex flex-column flex-nowrap align-items-center">
			<h3 className="text-danger p-2">Preguntas Frecuentes: </h3>

			<dl>
			<dt><dfn>Qui molestias itaque aut dolor quod. </dfn></dt>
			<dd>Est adipisci voluptatum in omnis nostrum 33 ipsam minima. </dd>
			<dt><dfn>Sit ratione obcaecati qui molestiae galisum. </dfn></dt>
			<dd>Et voluptates possimus qui tempora voluptatum. </dd><dt>
			<dfn>Est unde ullam vel quibusdam quas. </dfn></dt>
			<dd>Qui rerum inventore et beatae quas? </dd>
			<dt><dfn>Ex atque recusandae ut voluptatem laudantium. </dfn></dt>
			<dd>Non reiciendis laboriosam hic voluptatem quis. </dd><dt>
			<dfn>Ut corporis quos est facilis dignissimos. </dfn></dt>
			<dd>Qui quos nesciunt ad optio praesentium est delectus aperiam 33 quam alias. </dd><dt>
			<dfn>Hic distinctio quia eum illum doloribus. </dfn></dt>
			<dd>Eos iste molestiae eum repudiandae corporis qui excepturi dolores! </dd>
			</dl>

			<Link to="/">
			<button className="btn rounded-pill btn-register mb-3">Regresar al inicio</button>
			</Link>
		</div>
	);
};

Ayuda.propTypes = {
	match: PropTypes.object
};
