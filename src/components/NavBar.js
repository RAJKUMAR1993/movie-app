import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="text-primary">Movi</span>{" "}
            <span className="text-success">e</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/" className="nav-link mx-2">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/watchlist" className="nav-link mx-2">
                  WatchList
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/watched" className="nav-link mx-2">
                  Watched
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add"
                  className="nav-link mx-3 m-2 btn btn-success badge text-bg-success"
                >
                  <AiOutlinePlus /> Add
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
