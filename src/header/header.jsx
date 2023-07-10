import "./header.css";
import { Link } from "react-router-dom";

// import React from "react";

export default function Header() {
  const navToggleClick = () => {
    document.body.classList.toggle("nav-open");
  };

  const handelNavClose = () => {
    document.body.classList.remove("nav-open");
  };
  return (
    <header>
      <img className="image-logo-black" src="src/assets/image-logo-black.png"></img>
      <div className="navbar">
        <button
          // type="submit"
          onClick={navToggleClick}
          className="nav-toggle"
          id="toggle"
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>

        <nav className="nav">
          <div className="menu-list">
            <Link to="/">
              <span className="span-link" onClick={handelNavClose}>
                {" "}
                HOME
              </span>
            </Link>
            {/* 
            <Link to="/tours/index">
              <span className="span-link" onClick={handelNavClose}>
                {" "}
                BIO
              </span>
            </Link>

            <Link to="/brewery/index">
              <span className="span-link" onClick={handelNavClose}>
                GALLERY
              </span>
            </Link>

            <Link to="/brewery/index">
              <span className="span-link" onClick={handelNavClose}>
                CONTACT
              </span>
            </Link> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
