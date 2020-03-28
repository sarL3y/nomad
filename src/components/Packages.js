import React from 'react';

import '../sass/containers/containers.scss';
import '../sass/components/Packages.scss';

function Packages() {
	return (
		<div className="flex-column full-width full-height justify-center align-center">
            <div className="section-header-container">
                <h3>Packages</h3>
            </div>
            <div className="flex-row large-width justify-center align-center">
                <div className="package-container-small container-margin justify-center align-center">
                    <p className="package-header package-header-text-small text-center">Basic</p>
                    <div className="flex-column container-margin">
                        <p className="package-info">Gears</p>
                        <p className="package-info">Brakes</p>
                        <p className="package-info">Adjustments</p>
                        <p className="package-info">Parts and labor</p>
                    </div>
                    <div className="flex-column justify-center align-center">
                        <button className="appointment button-small">CALL US</button>
                    </div>
                </div>
                <div className="package-container-large container-margin">
                    <p className="package-header package-header-text-large text-center">Race</p>
                    <div className="flex-column container-margin">
                        <p className="package-info">New brakes system</p>
                        <p className="package-info">New shifting cables/housing</p>
                        <p className="package-info">Performance Package</p>
                        <p className="package-info">Basic Package</p>
                        <p className="package-info">Parts and labor</p>
                    </div>
                    <div className="flex-column justify-center align-center">
                        <button className="appointment button-large">CALL US</button>
                    </div>
                </div>
                <div className="package-container-small container-margin">
                    <p className="package-header package-header-text-small text-center">Performance</p>
                    <div className="flex-column container-margin">
                        <p className="package-info">Rim truing</p>
                        <p className="package-info">Brake pads</p>
                        <p className="package-info">Basic Package</p>
                        <p className="package-info">Parts and labor</p>
                    </div>
                    <div className="flex-column justify-center align-center">
                        <button className="appointment button-small">CALL US</button>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Packages;
