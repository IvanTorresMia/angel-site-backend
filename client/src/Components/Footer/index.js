import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-wraper top-line">
      <div className="footer navbar-dark bg-dark">
        <div className="footer-copyright text-center py-3 text-muted">
          © 2020 Copyright:
          <a href="https://choosealicense.com/licenses/mit/">MIT licenses</a>
        </div>
        <div className="react-footer text-muted">
          {/* <h3>Made with React Js</h3> */}
          <p>Built by Ivan Torres</p>
          <Link
            to="contact"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
