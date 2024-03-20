import React, { useEffect } from "react";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";
import axios from "axios";


export const AdminBlogs = ({ blogs }) => {
  // 
   const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [blogs]);

  // delete operation
  async function deleteOperation(id) {
    let result = await fetch(
      "http://127.0.0.1:8000/api/delete-blogs/" + id,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    console.warn(result);

    // immediate call to data after delete function
    getData();
  }

  // load all data from api
  async function getData() {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/display-blogs"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    fetchBlogs();
  }

  // 
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [author_details, setAuthorDetails] = useState("");

  async function addBlogs() {
    console.warn(title, description, image, author, author_details);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("author", author);
    formData.append("author_details", author_details);
    let result = await fetch("http://localhost:8000/api/create-blogs", {
      method: "POST",
      body: formData,
    });
    alert("Data Saved to Database!");
  }
  return (
    <>
      <AdminNavbar />
      <div class="container max-w-7xl mx-auto mt-8">
        <div class="mb-4">
          <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">
            Blogs Index
          </h1>
          <div class="flex justify-end">
            <Link to="/admin/blogs/create-blogs">
              <button class="px-4 py-2 rounded-md bg-primary no-underline hover:bg-amber-400 text-white">
                Create Blogs
              </button>
            </Link>
          </div>
        </div>
      <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      ID
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Title
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Slug
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Description
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Image
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Author
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Author Details
                    </th>
                    <th
                      class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50"
                      colspan="3"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white">
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div class="flex items-center">{item.id}</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div class="text-sm leading-5 text-gray-900">
                          {item.title}
                        </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.slug}</p>
                      </td>

                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.description}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.image}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.author}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.author_details}</p>
                      </td>
                      <td class="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
                        <Link
                          to={`/admin/blogs/display-blogs/${item.id}`}
                        >
                        {/* View Icon */}
                       <button>
                        <a href="#" class="text-gray-600 hover:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          </a>
                          </button>
                          </Link>
                      </td>
                      {/* Edit Icon */}
                      <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                        <Link
                          to={`/admin/blogs/update-blogs/${item.id}`}
                        >
                          <button>
                            <a
                              href="#"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </a>
                          </button>
                        </Link>
                      </td>
                      {/* Delete Icon */}
                      <td
                        class="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 "
                        onClick={() => deleteOperation(item.id)}
                      >
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-red-600 hover:text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminBlogs;



/*
<div className="col-sm-6 offset-sm-3">
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
          name="slug"
          placeholder="Slug"
          className="form-control"
          onChange={(e) => setSlug(e.target.value)}
        />
        <br />
        <textarea
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
      */