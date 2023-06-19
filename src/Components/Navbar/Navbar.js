import React from 'react';
import navbarData from '../../data/navbarData';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className=" ">
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            {
                                navbarData.map(navData =>
                                    <li key={navData.id} className="nav-item">
                                        <a className="nav-link" href="/">{navData.item}</a>
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;