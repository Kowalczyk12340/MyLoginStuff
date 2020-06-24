import React from "react";
import { Link } from "react-router-dom";
import "./FrontFooter.css";

const footer = () => {
  return (
    <div className="row">
      <div className="col fixed-bottom bg-muted text-center">
        <p className="lead text-white my-3">
          &copy; 2020
          <br /> Authority Design and Web Project by Marcin Kowalczyk
          <span className=" d-none d-md-inline d-lg-inline text-danger float-right footerBrand">
            <Link to="/login" className="nav-link text-danger">
              Marcin
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default footer;
