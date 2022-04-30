import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [country, setCountry] = useState("in");

  const handleCountry = (event) => {
    var country = event.target.value;
    console.log(country);
    setCountry(country);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/${country}`}>
          InShorts
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to={`/${country}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${country}/business`}>
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${country}/entertainment`}>
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${country}/health`}>
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${country}/science`}>
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${country}/sports`}>
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${country}/technology`}>
                Technology
              </Link>
            </li>
          </ul>
          <ul>
            <select
              onClick={handleCountry}
              className="form-select form-select-sm "
              aria-label="Default select example"
            >
              <option value="in">IND</option>
              <option value="us">USA</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;