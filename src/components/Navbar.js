import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" className="nav-link font-weight-bolder">TrendyCakes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact to="/aboutus" className="nav-link font-weight-bolder">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/menu" className="nav-link font-weight-bolder">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/order" className="nav-link font-weight-bolder">Order</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
