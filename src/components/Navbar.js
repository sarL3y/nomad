import React from 'react';

import { NavLink } from 'react-router-dom';

import '../sass/components/Navbar.scss';
import '../sass/containers/containers.scss';

function Navbar() {

    return (
        <div className="nav-wrapper">
            <nav
                role='navigation'
                className="nav"
                aria-label="main navigation"
            >   
                <div className="nav-link nav-grow">
                    <NavLink activeClassName="active" exact to="/">
                        home
                    </NavLink>
                </div>
                <div className="nav-link nav-grow">
                    <NavLink activeClassName="active" exact to="/about">
                        about
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;