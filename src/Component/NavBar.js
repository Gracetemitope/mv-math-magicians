/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-enable */

const NavBar = () => (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand strong font-weight-bold" to="/">Math Magicians</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link id="items-counter" className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/calculate">Calculator</Link>
            <Link className="nav-link" to="/quotes">Quotes</Link>
          </div>
        </div>
      </div>
    </nav>
);
export default NavBar;