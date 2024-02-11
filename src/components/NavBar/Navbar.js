import React from 'react';
import image from "C:/Users/imksa/Desktop/UoW/school_website/src/assets/R.png";

export const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
                 <a class="navbar-brand" href="#">imksav<br />University</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Admission</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
                           </li>
                           <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
                           </li>
                           <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

<div class="container-fluid mt-3">
  <h3>Navbar Forms</h3>
  <p>You can also include forms inside the navigation bar.</p>
</div></div>
  )
}

export default Navbar