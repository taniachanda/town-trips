import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [signedInUser ] = useContext(UserContext);
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light font-weight-bold">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="basic-navbar-nav" >
                    <Link to="/">TOWN TRIPS</Link>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item nav-link">
                                <Link to="/home"> Home</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to={"/destination"}> Destination</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to="/home"> Blog</Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link to="/home">Contact</Link>
                            </li>
                        </ul>
                        {
                            signedInUser.email ? <p className='text-white font-weight-bold my-auto mx-3 bg-info rounded-pill px-4 py-2'>{signedInUser.name}</p> : <div class_name="d-flex justify-content-end">
                                <Link to="/login"> <button className="btn btn-danger font-weight-bold" type="submit"> Log In</button></Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;