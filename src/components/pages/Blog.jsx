import React, { useEffect, useState } from "react";
import { Head } from "../common/Head";
import Navbar from "../common/Navbar";
import axios from "axios";

export const Blogs = ({ blogs }) => {
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
  }, [blogs]);
  return (
    <>
      <Head />
      <Navbar />
      <div>
        <h1>Blogs</h1>
        {data.map((item) => (
          <div class="card" key={item.id}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
        <ul></ul>
      </div>
    </>
  );
};
export default Blogs;
