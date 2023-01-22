import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./logo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-black border-bottom border-white w-100" data-bs-theme="dark">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <div className="ps-2">
                        <img src={Logo}alt="Logo" title="Logo" width="60px"/>
                    </div>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02" >
                    <div className="categories">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4 text-white" to='/' >
                                    All
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4 text-white" to="category/sticks">
                                    Sticks
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4 text-white" to="category/protectives">
                                    Protectives
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link mx-4 text-white" to="category/accessories">
                                    Accessories
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
