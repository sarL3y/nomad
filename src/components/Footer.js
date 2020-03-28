import React from 'react';

import '../sass/components/Footer.scss';
import '../sass/containers/containers.scss';

function Footer() {

    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="footer-grow">
                    <a href="https://www.yelp.com/biz/nomad-bike-repair-los-angeles?osq=nomad+bike+repair" target="_blank" rel="noopener noreferrer">
                        Yelp
                    </a>
                </div>
                <div className="footer-grow">
                    <a href="https://www.instagram.com/nomadbikerepair/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
                <div className="footer-grow">
                    <a href="mailto:nomadbikerepair@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;