import React from 'react';

import '../sass/components/Footer.scss';
import '../sass/containers/containers.scss';

function Footer() {

    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="footer-grow">
                    <a href="https://www.linkedin.com/in/matt-tapper" target="_blank" rel="noopener noreferrer">
                        Link #1
                    </a>
                </div>
                <div className="footer-grow">
                    <a href="https://www.github.com/sarL3y/" target="_blank" rel="noopener noreferrer">
                        Link #2
                    </a>
                </div>
                <div className="footer-grow">
                    <a href="mailto:matt.tapper@gmail.com" target="_blank" rel="noopener noreferrer">
                        Link #3
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;