import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/R.png";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://www.chennaisuperkings.com/">
          <img
            src={logo}
            alt="Avatar Logo"
            width={100}
            height={100}
            class="rounded-pill"
          />
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about">About us</Link>
          </li>
          <li class="nav-item">
            <Link to="/programs">Programs</Link>
          </li>
          <li class="nav-item">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li class="nav-item">
            <Link to="/events">Events</Link>
          </li>
          <li class="nav-item">
            <Link to="/teams">Teams</Link>
          </li>
          <li class="nav-item">
            <Link to="/downloads">Downloads</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          
        </ul>
        
      </div>
      
    </nav>
  );
};
export default Navbar;
