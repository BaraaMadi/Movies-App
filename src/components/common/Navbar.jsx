import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/movies" className="navbar-brand">
        Baraa
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
