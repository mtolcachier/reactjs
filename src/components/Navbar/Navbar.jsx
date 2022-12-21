import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-black w-100">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <div>
                        <img src="./logo.png" alt="Logo" title="Logo" width="100px" />
                    </div>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02" >
                    <div className="categories">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to='/' >
                                    All
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to="category/adidas">
                                    Adidas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to="category/nike">
                                    Nike
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to="category/reebok">
                                    Reebok
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to="category/puma">
                                    Puma
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4" to="category/converse">
                                    Converse
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
