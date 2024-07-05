import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/fontawesome-free-solid'
class Navbar extends React.Component {

    render() {
        return (
            <>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        &nbsp;My-Restaurant
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">
                                    Menu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About Us
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet/>
            </>
        );
    }
}

export default Navbar;