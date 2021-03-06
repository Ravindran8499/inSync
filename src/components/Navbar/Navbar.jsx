import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.utils";

const Navbar = (props) => {
  const [country, setCountry] = useState("in");
  const [countryChange, setCountryChange] = useState(props.country);

  const navigate = useNavigate();

  const handleCountry = (event) => {
    var country = event.target.value;
    setCountryChange(country);
    setCountry(country);
    console.log(country);

    navigate(`/${country}`, { replace: true });
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  const logout = () => {
    auth.signOut().then(() => {
      navigate("/");
    });
  };
  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/${props.country}`}>
          InSync
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
        <div
          className={`collapse navbar-collapse text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to={`/${props.country}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${props.country}/business`}>
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${props.country}/entertainment`}>
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${props.country}/health`}>
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${props.country}/science`}>
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${props.country}/sports`}>
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${props.country}/technology`}>
                Technology
              </Link>
            </li>
          </ul>

          <div
            class={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } px-2 mx-2`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {props.btnText}
            </label>
          </div>

          <div className="row">
            <div className="nav-item col my-auto">
              <select
                onChange={handleCountry}
                className="form-select form-select-sm "
                aria-label="Default select example"
                defaultValue={props.country}
              >
                <option value="in">IND</option>
                <option value="us">USA</option>
                <option value="gb">UK</option>
              </select>
            </div>
            <div className="nav-item col my-auto">
              <button className="btn btn-info btn-sm" onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
