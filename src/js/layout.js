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
import { Footersmall } from "./component/footerSmall";
import { Login } from "./views/login";
import { Solicitud } from "./views/solicitud";
import { Ayuda } from "./views/ayuda";
import { Privacidad } from "./views/privacidad";
import { Proveedores } from "./views/proveedores";
import { Terminos } from "./views/terminos";
import { Propuesta } from "./views/propuestas";
import { Servicioa } from "./views/servicea";
import { Serviciob } from "./views/serviceb";
import { Servicioc } from "./views/servicec";
import { Serviciod } from "./views/serviced";
import "../../src/styles/home.css";
import { NavbarPrivate } from "./component/navbarprivate";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (  //p-6 d-flex flex-column bg-primary bg-opacity-50
		<div className='container-fluid p-0 m-0 col-12'>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
							<Footer />
						</Route>
						<Route exact path="/ayuda">
							<Navbar />
							<Ayuda />
							<Footer />
						</Route>
						<Route exact path="/privacidad">
							<Navbar />
							<Privacidad />
							<Footer />
						</Route>
						<Route exact path="/proveedores">
							<Navbar />
							<Proveedores />
							<Footer />
						</Route>
						<Route exact path="/terminos">
							<Navbar />
							<Terminos />
							<Footer />
						</Route>
						<Route exact path="/login">
							<Login />
							<Footersmall />
						</Route>
						<Route exact path="/single/:theid">
							<NavbarPrivate />
							<Single />
							<Footersmall />
						</Route>
						<Route exact path="/signup">
							<SignUp />
							<Footersmall />
						</Route>
						<Route exact path="/solicitud">
							<NavbarPrivate />
							<Solicitud />
							<Footersmall />
						</Route>
						<Route exact path="/propuestas">
							<NavbarPrivate />
							<Propuesta />
							<Footersmall />
						</Route>
						<Route exact path="/servicea">
							<NavbarPrivate />
							<Servicioa />
							<Footersmall />
						</Route>
						<Route exact path="/serviceb">
							<NavbarPrivate />
							<Serviciob />
							<Footersmall />
						</Route>
						<Route exact path="/servicec">
							<NavbarPrivate />
							<Servicioc />
							<Footersmall />
						</Route>
						<Route exact path="/serviced">
							<NavbarPrivate />
							<Serviciod />
							<Footersmall />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
