import React from "react";
import { Link } from "react-router-dom";
import Aboutus from "../pages/Aboutus";
import logo from "../../assets/imksav.png";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="http://keshavbhandari.com.np">
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
    //        <div class="navbar">
    //             <div className="logo">
    //                  <h1>kash</h1>
    //             <span>University</span></div>
    //             <ul>
    //                  <li><Link to="/">Home</Link></li>
    //                  <li><Link to="/about">About us</Link></li>
    //                  <li><a href="#"> Programs</a> </li>
    //                  <li><a href="#"> Blogs</a></li>
    //                  <li><a href="#"> Download</a></li>
    //                  <li><a href="#"> Team</a></li>
    //                  <li><a href="#"> Gallery</a></li>
    //                  <li><Link to="/contact">Contact Us</Link></li>

    //             </ul>
    // </div>
  );
};
export default Navbar;
