import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
             <div className="container-fluid">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                     <a className="navbar-brand">TOWN TRIPS</a>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                  <Link to="/home"> <a className="nav-link">Home</a></Link>
                                </li>
                                <li className="nav-item">
                                <Link to={"/destination"}> <a className="nav-link">Destination</a></Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/home"> <a className="nav-link">Blog</a></Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/home"> <a className="nav-link">Contact</a></Link>
                                </li>
                                </ul>
                                <div class_name="d-flex justify-content-end">
                               <Link to="/login"> <button className="btn btn-danger" type="submit"> Log In</button></Link>
                                </div>
                        </div>
                    </div>
            </nav>
             </div>
    );
};

export default Navbar;