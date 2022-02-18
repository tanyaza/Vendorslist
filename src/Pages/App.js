import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import VendorList from "./VendorList";
import Home from "./Home";

function App() {
	const routes = [
		{ route: "/", component: <Home /> },
		{ route: "/vendorList", component: <VendorList /> },
	];
	return (
		<>
			<Helmet>
				<title>snappfood</title>
			</Helmet>
			<Router>
				<Switch>
					{routes.map((route) => (
						<Route exact={route.route === "/"} path={route.route}>
							{route.component}
						</Route>
					))}
				</Switch>
			</Router>
		</>
	);
}

export default App;
