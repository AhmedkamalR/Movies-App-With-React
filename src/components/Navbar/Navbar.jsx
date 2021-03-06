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
            <form className="d-flex">
              <input
                className="form-control mx-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mx-1 " type="submit">
              {language === "en" ? "Search" : " ?????? "}
              </button>
            </form>
            <button
                  onClick={handelLangaugeChange}
                  className="btn btn-warning mx-5"
                >
                  {language}
                </button>

          </ul>
        </div>
      </div>
    </nav>
  );
}
