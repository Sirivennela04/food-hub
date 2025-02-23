import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fas fa-utensils me-2"></i>
          Food Hub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">Recipes</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/my-recipes">My Recipes</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/add-recipe">Share Recipe</Link>
            </li>
          </ul>
          <div className="d-flex">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                <Link to="/signup" className="btn btn-outline-light">Sign Up</Link>
              </>
            ) : (
              <button className="btn btn-outline-light" onClick={() => {
                localStorage.removeItem('isLoggedIn'); 
                window.location.reload();
              }}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;