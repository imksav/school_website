import React from "react";
import { Head } from "../common/Head";
import Navbar from "../common/Navbar";
import axios from 'axios';

import { useState, useEffect } from 'react';
const Events = ({courses}) => {
const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/display-blogs"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [courses])
  return (
    <>
      <Head />
      <Navbar />
      <div>
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4" key={item.id}>    
                <div class="container mt-3">
                  <h2>{item.title}</h2>
                  <div class="card">
                    <div class="card-body">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul></ul>
      </div>
    </>
  );
};

export default Events;