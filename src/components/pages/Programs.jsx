import React from "react";
import avatar from '../../assets/imksav.png'

export const Programs = () => {
  return (
    <>
      <div className="row">
        <div className="title">
          <h3 style={{textAlign:"center"}}>Our Market Haunting Programs</h3>
        </div>
        <div className="col-4">
          <div class="container mt-3">
            <div class="card" style={{ width: 400 }}>
              <img
                class="card-img-top"
                src={avatar}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="container mt-3">
            <div class="card" style={{ width: 400 }}>
              <img
                class="card-img-top"
                src={avatar}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="container mt-3">
            <div class="card" style={{ width: 400 }}>
              <img
                class="card-img-top"
                src={avatar}
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Programs;
