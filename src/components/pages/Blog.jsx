import React, { useEffect, useState } from "react";
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
      <Navbar />
      <div class="container mt-5">
        <div class="row">
          {data.map((item) =>
          (
            <div class="col-md-4" key={item.id}>
              <div class="card p-3">
                <div class="d-flex flex-row mb-3"><img src={item.image} alt="" width="70" />
                  <div class="d-flex flex-column ml-2"><span>{item.title}</span><span class="text-black-50">{item.author}</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                    </div>
                    <h6>{item.slug}</h6>
                    <div class="d-flex justify-content-between install mt-3"><span>{item.author}</span><span class="text-primary">Full Blog&nbsp;<i class="fa fa-angle-right"></i></span></div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </>
  );
};
export default Blogs;
