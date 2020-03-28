import React from 'react';

import Packages from '../components/Packages';
import Services from '../components/Services';
import Brands from '../components/Brands';
import Reviews from '../components/Reviews';

import '../sass/pages/landing.scss';
import '../sass/containers/containers.scss';

function Landing() {
	return (
		<>
			<div className="flex-column full-width full-height justify-center align-center">
				<div className="flex-column full-width justify-center align-center">
					<h1>Nomad</h1>
					<h2>Mobile Bike Repair</h2>
				</div>
			</div>
			<Packages />
			<Brands />
			<Services />
			<Reviews />
		</>
	);
};

export default Landing;
