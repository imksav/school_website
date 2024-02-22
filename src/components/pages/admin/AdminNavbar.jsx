import React from "react";
import { Link } from "react-router-dom";

export const AdminNavbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-light">
      <div class="container-fluid">
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/admin">Home</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/admin/add_programs">Add Programs</Link>
              </li>
               <li className="nav-item">
                <Link to="/admin/add_blogs">Add Blogs</Link>
              </li>
              
            </ul>
          </li>
        </ul>
        {/* <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/admin">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/add_programs">Add Programs</Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/add_blogs">Add Blogs</Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/add_events">Add Events</Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/add_teams">Add Teams</Link>
          </li>
          <li class="nav-item">
            <Link to="/admin/add_downloads">Add Downloads</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};
export default AdminNavbar;
