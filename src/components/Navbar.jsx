import React from 'react';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand " href="#">Hikayat</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
            
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Category</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;