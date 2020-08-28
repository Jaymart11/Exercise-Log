import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="w-100 bg-dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-center w-75 mx-auto">
          <Link className="navbar-brand" to="/">
            Exercise Tracker
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" activeclassname="active" to="/">
                Exercises
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeclassname="active" to="/create">
                Create Exercise log
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeclassname="active" to="/user">
                Create User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
