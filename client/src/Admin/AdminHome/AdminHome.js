import React from "react";
import Stack from "react-bootstrap/Stack";
import { Outlet, Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin Profile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/admin">
                View all
              </Link>
              <Link className="nav-link" to="/admin/deleted">
                Deleted
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Stack gap={3}>
        <Outlet />
      </Stack>
    </>
  );
};

export default AdminHome;
