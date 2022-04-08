import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Privacidad = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container m-0 d-flex flex-column flex-nowrap align-items-center">
			<h3 className="text-danger p-2">Políticas de privacidad </h3>

			<p className='p-2'>Suspendisse magna augue, pretium nec nunc mattis, congue congue libero. Cras malesuada egestas diam eu placerat. Sed sit amet viverra lorem. Quisque fringilla mollis ante in facilisis. Nulla facilisi. Sed congue odio quis dui lacinia finibus. Nunc consequat porttitor ex, vel volutpat lacus venenatis quis. Maecenas in dapibus augue. Cras purus elit, condimentum bibendum quam id, pharetra vehicula velit. Etiam et placerat sem. Donec dignissim semper diam in tempor. Duis et odio a mi aliquam congue. Nulla eget efficitur lacus. Curabitur lobortis mattis neque sit amet volutpat. Vivamus blandit lacus et pretium malesuada.

Vestibulum dictum congue lobortis. Pellentesque semper massa nisi, in posuere nibh elementum ac. Nullam congue iaculis dui quis pharetra. Ut varius neque nec enim feugiat laoreet. Curabitur eleifend risus mi, sed sagittis lorem sagittis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus porta urna vitae porttitor auctor. Donec sollicitudin odio sed nunc rutrum vestibulum.

Cras ipsum nisi, ornare quis nisi et, blandit pretium tortor. Fusce lobortis justo sit amet mauris pellentesque pulvinar. Fusce efficitur tellus in elementum hendrerit. Cras arcu justo, mollis dapibus ultrices ac, laoreet eget justo. Nulla lobortis faucibus diam ac elementum. Cras lobortis tellus sed vulputate porttitor. Integer tristique quis turpis sit amet condimentum. Curabitur sed augue quis neque lacinia imperdiet ac a lacus. Quisque ac velit ut turpis imperdiet varius.

Ut commodo a sem id ultrices. Pellentesque cursus non purus ac egestas. Nam aliquam lectus id enim molestie semper. Etiam molestie nibh at ultrices venenatis. Integer sed sapien a diam rutrum laoreet. Donec lobortis ipsum sit amet diam fermentum accumsan. Nulla tincidunt diam ac enim placerat ornare. Curabitur faucibus lobortis egestas. Nulla sed nisi urna. Suspendisse quis lectus non ex pellentesque interdum ornare in dolor. In eu diam finibus, gravida felis pulvinar, facilisis dui.

Mauris risus diam, ultricies vitae urna quis, semper varius massa. Proin id neque nec arcu aliquam efficitur at a turpis. Ut faucibus, purus tempus ullamcorper hendrerit, diam nisl tincidunt augue, at facilisis velit felis et nulla. Pellentesque nec pulvinar urna, id ultricies elit. Praesent cursus molestie facilisis. Ut gravida sagittis nulla in finibus. Suspendisse neque nisl, laoreet eget nulla at, laoreet tristique dui. In efficitur ultrices dui non tempor. Phasellus congue, ante egestas scelerisque accumsan, justo dolor mattis leo, non gravida dolor ipsum non tellus. Integer iaculis condimentum odio, et auctor eros efficitur in. Vestibulum elit justo, gravida vitae dignissim vitae, luctus in justo. Aenean enim tortor, placerat eu libero non, faucibus volutpat purus. Maecenas in nisl quis enim tincidunt viverra. Quisque congue venenatis enim, nec pulvinar lacus bibendum sit amet.

Pellentesque vitae neque congue, pharetra turpis eu, fringilla tortor. Sed ut ante at lorem interdum hendrerit. Cras ex nulla, volutpat non mattis eget, facilisis et lorem. Proin rhoncus mi non lacus pulvinar, ut tempor lorem egestas. Phasellus malesuada, nisi quis posuere bibendum, nulla purus tristique nibh, id molestie urna arcu ac eros. Cras condimentum enim massa, ut condimentum ante varius at. Nam aliquet felis ut quam rutrum, sed elementum nibh lacinia. Curabitur ac tempor orci, vel fringilla eros.

Morbi iaculis varius lorem, ac sodales velit. Etiam at felis posuere, viverra dolor nec, vulputate urna. Nunc sapien nisl, condimentum et lectus vel, rhoncus feugiat augue. Quisque non nisl mauris. Proin non turpis bibendum, venenatis turpis vitae, fringilla mauris. Vestibulum eleifend, nulla scelerisque malesuada elementum, ipsum sem malesuada justo, vitae interdum est mauris nec neque. Aliquam at elit nisi. Suspendisse tempus ipsum ultrices nibh gravida elementum. Nullam vel mauris in dolor consequat pretium ut convallis arcu. Integer ac ornare arcu. Mauris ultricies dui ut turpis bibendum vulputate. Phasellus pulvinar elementum massa non lacinia. Cras varius quis felis at commodo.

Integer in fermentum lectus, sed laoreet ipsum. Duis molestie, turpis quis dignissim molestie, mi ipsum interdum arcu, molestie eleifend quam est a lectus. Etiam vestibulum lacinia pretium. Mauris auctor molestie urna at euismod. Nullam sit amet laoreet nunc, quis lobortis enim. Suspendisse commodo vitae leo vitae pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan semper ipsum et placerat. Etiam tristique quam eros, et rhoncus purus blandit a. Praesent vitae leo nec libero tempus posuere at vel erat. Ut dolor purus, dapibus in mollis at, maximus vitae eros. Praesent mattis leo sit amet dignissim sodales. Donec in felis consectetur, tristique dui non, placerat ex. Morbi sit amet porttitor orci, in consectetur mi. Nunc at massa auctor, congue erat ac, mollis metus. Suspendisse metus risus, scelerisque eu volutpat in, mattis nec odio. </p>
			
			<Link to="/">
			<button className="btn rounded-pill btn-register mb-3">Regresar al inicio</button>
			</Link>
		</div>
	);
};

Privacidad.propTypes = {
	match: PropTypes.object
};