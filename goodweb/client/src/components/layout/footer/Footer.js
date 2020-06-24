import React from "react";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small special-color-dark">
        <div className="footer-copyright text-center py-3">
          &copy; 2020
          <br /> Authority Design and Web Project by Marcin Kowalczyk
          <br /> - Wszelkie Prawa Zastrzeżone
          <Link to="/">
            <span className="ml-2">Marcin</span>
          </Link>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AppFooter;
