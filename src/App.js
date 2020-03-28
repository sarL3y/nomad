import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './sass/containers/containers.scss';

import Landing from './pages/landing';
import About from './pages/about';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './sass/containers/containers.scss';

const routes = [
	{ path: '/', name: 'landing', Component: Landing },
	{ path: '/about', name: 'about', Component: About }
];

function App() {
	return (
		<div className="full-width flex-column">
			<Navbar />

			{routes.map(({ path, Component }) => (
				<Route key={path} exact path={path}>
					<Component />
				</Route>
			))}

			<Footer />
		</div>
	);
};

export default withRouter(App);
