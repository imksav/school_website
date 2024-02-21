import React from "react";
import { useState } from "react";

function AddBlogs() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [author_details, setAuthorDetails] = useState("");

  async function addBlogs() {
    console.warn(title, description, image, author, author_details);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("description", image);
    formData.append("author", author);
    formData.append("author_details", author_details);
    let result = await fetch("http://localhost:3000/api/addblogs", {
      method: "POST",
      body: formData,
    });
    alert("Data Saved to Database!");
  }
  return (
    <>
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Blogs</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="file"
          name="image"
          placeholder="Select Image"
          className="form-control"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="form-control"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="author_details"
          placeholder="Author Details"
          className="form-control"
          onChange={(e) => setAuthorDetails(e.target.value)}
        />
        <br />
        <button className="btn btn-success" onClick={addBlogs}>
          Add Blog
        </button>
      </div>
    </>
  );
}
export default AddBlogs;
