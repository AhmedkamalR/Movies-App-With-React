import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies Land
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink
                className="nav-link "
                activeStyle={{
                  fontWeight: "bold",
                  color: "Green",
                }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to="/Movies"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to="/Favourites"
              >
                Favourites
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to="/Login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                to="/Register"
              >
                Register
              </NavLink>
            </li>
            {/* <form className="d-flex">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button>
            </form> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
