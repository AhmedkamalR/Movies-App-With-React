import React,{ useContext} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../App";

export default function Navbar() {
  const favNumber = useSelector((state) => state.favNumber);
  const { language, setLanguage } = useContext(LanguageContext);

  const handelLangaugeChange = () => {
    language === "en" ? setLanguage("ar") : setLanguage("en");
  };
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
                  color: "red",
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
                <span style={{ color: "white" }}> Favourites </span> {favNumber}
                <FontAwesomeIcon
                  style={{ color: "gold" }}
                  icon={faHeart}
                  size="lg"
                ></FontAwesomeIcon>
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
            <button
                  onClick={handelLangaugeChange}
                  className="text-gray-300 ml-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {language}
                </button>
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
