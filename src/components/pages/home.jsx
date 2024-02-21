import React from "react";
import "../pages/home.css";
import logo from '../../assets/R.png';
import { Head } from "../common/Head";
import Navbar from "../common/Navbar";

export const Home = () => {
  return (
    <>
      <Head />
      <Navbar />
      <div className="row">
         
                 <div className="col">
          <div className="card">
            <div className="card-body text-white">
              <img
                src={ logo}
              alt="imksav"
              height={50}
              width={50}
            />
            <p className="text-black">
              Welcome to your most awaited{" "}
              <span className="text-white">University</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

<div className="card-body bg-success">
            
          </div>