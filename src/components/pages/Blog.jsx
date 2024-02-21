import React from "react";
import avatar from "../../assets/R.png";
import { Head } from "../common/Head";
import Navbar from "../common/Navbar";

export const Blogs = () => {
  return (
    <>
     
      <Head  />
      <Navbar  />
      <div className="row">
        <div className="title">
          <h3 style={{ textAlign: "center" }}>Our Blogs</h3>
        </div>
        <div className="col-3">
          <div class="card img-fluid" style={{ width: 400 }}>
            <img
              class="card-img-top"
              src={avatar}
              alt="Card image"
              style={{ width: 400 }}
            />
            <div class="card-img-overlay">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">
                Some example text some example text. Some example text some
                example text. Some example text some example text. Some example
                text some example text.
              </p>
              <a href="#" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card img-fluid" style={{ width: 400 }}>
            <img
              class="card-img-top"
              src={avatar}
              alt="Card image"
              style={{ width: 400 }}
            />
            <div class="card-img-overlay">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">
                Some example text some example text. Some example text some
                example text. Some example text some example text. Some example
                text some example text.
              </p>
              <a href="#" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card img-fluid" style={{ width: 400 }}>
            <img
              class="card-img-top"
              src={avatar}
              alt="Card image"
              style={{ width: 400 }}
            />
            <div class="card-img-overlay">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">
                Some example text some example text. Some example text some
                example text. Some example text some example text. Some example
                text some example text.
              </p>
              <a href="#" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card img-fluid" style={{ width: 400 }}>
            <img
              class="card-img-top"
              src={avatar}
              alt="Card image"
              style={{ width: 400 }}
            />
            <div class="card-img-overlay">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">
                Some example text some example text. Some example text some
                example text. Some example text some example text. Some example
                text some example text.
              </p>
              <a href="#" class="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
