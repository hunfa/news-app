import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/">General</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/Business">Business</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/Health">Health</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/Science">Science</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/Sports">Sports</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active"  to="/Technology">Technology</Link>
              </li>
              
              

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
