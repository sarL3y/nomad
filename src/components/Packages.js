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
                </div>
                <div className="package-container-large container-margin">
                    <p className="package-header package-header-text-large text-center">Race</p>
                </div>
                <div className="package-container-small container-margin">
                    <p className="package-header package-header-text-small text-center">Performance</p>
                </div>
            </div>
        </div>
	);
};

export default Packages;
