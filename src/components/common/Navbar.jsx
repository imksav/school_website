import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/R.png";

// export const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <a class="navbar-brand" href="#">Navbar</a>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item active">
//         <a class="nav-link" href="#"><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
//       </li>
//           <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     // <nav class="navbar navbar-expand-sm bg-light">
//     //   <div class="container-fluid">
//     //     <a class="navbar-brand" href="https://www.chennaisuperkings.com/">
//     //       <img
//     //         src={logo}
//     //         alt="Avatar Logo"
//     //         width={100}
//     //         height={100}
//     //         class="rounded-pill"
//     //       />
//     //     </a>
//     //     <ul class="navbar-nav">
//     //       <li class="nav-item">
//     //         <Link to="/">Home</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/about">About us</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/programs">Programs</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/blogs">Blogs</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/events">Events</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/teams">Teams</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/downloads">Downloads</Link>
//     //       </li>
//     //       <li class="nav-item">
//     //         <Link to="/contact">Contact Us</Link>
//     //       </li>
          
//     //     </ul>
        
//     //   </div>
      
//     // </nav>
//   );
// };
// export default Navbar;





function BasicExample() {
  return (
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
        <a class="navbar-brand">
          <img src={logo} width={50} alt="" srcset="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
              <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
                  <Link to="/about" class="nav-link">About</Link>
        </li>
        <li class="nav-item">
                  <Link to="/programs" class="nav-link">Programs</Link>
            </li>
            <li class="nav-item">
                  <Link to="/blogs" class="nav-link">Blogs</Link>
            </li>
            <li class="nav-item">
                  <Link to="/contact" class="nav-link">Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"/>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default BasicExample;