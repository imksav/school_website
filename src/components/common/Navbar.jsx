import React from 'react'
import {  Link } from "react-router-dom";
import Aboutus from '../pages/Aboutus';

export const Navbar = () => {
  return (
       <div class="navbar">
            <div className="logo">
                 <h1>kash</h1>
            <span>University</span></div>     
            <ul>
                 <li><a href="/home"> Home</a></li>
                 <li><Link to="/about">About us</Link></li>
                 <li><a href="#"> Programs</a> </li>
                 <li><a href="#"> Blogs</a></li>
                 <li><a href="#"> Download</a></li>
                 <li><a href="#"> Team</a></li>
                 <li><a href="#"> Gallery</a></li>
                 <li><Link to="/contact">Contact Us</Link></li>

            </ul>           
</div>            
  )
}
export default Navbar