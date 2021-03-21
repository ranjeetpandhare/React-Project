import React from "react";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

              {/* Login page */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">
               Login
              </NavLink>
            </li>

            {/* Home page */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
               Home
              </NavLink>
            </li>
            
            {/* Add user page */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/adduser">
                AddUser
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
        <h1>Welcome to Home Page</h1>
      </div>
    </nav>
  );
};

export default Home;
