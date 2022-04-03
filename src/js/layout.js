import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { SignUp } from "./views/signup";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./views/login";
import { Solicitud } from "./views/solicitud";
import { Ayuda } from "./views/ayuda";
import { Privacidad } from "./views/privacidad";
import { Proveedores } from "./views/proveedores";
import { Terminos } from "./views/terminos";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className= 'container-sm p-6 d-flex flex-column'>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/ayuda">
							<Ayuda />
						</Route>
						<Route exact path="/privacidad">
							<Privacidad />
						</Route>
						<Route exact path="/proveedores">
							<Proveedores />
						</Route>
						<Route exact path="/terminos">
							<Terminos />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/solicitud">
							<Solicitud />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
