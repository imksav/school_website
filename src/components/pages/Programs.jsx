import React, { useState, useEffect } from "react";
import { Head } from "../common/Head";
import Navbar from "../common/Navbar";
import axios from "axios";

export const Programs = ({ courses }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/display-programs"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchPrograms();
  }, [courses]);
  return (
    <>
      <Head />
      <Navbar />

      <div>
        <div class="row">
          {
            data.map((item) => (
            <div class="col-sm-6" >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">
                   {item.description}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
         )) }
        </div>
      </div>
    </>
  );
};
export default Programs;
