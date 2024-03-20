import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlogs() {
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    title: "",
    slug: "",
    description: "",
    image: "",
    author: "",
    author_details: "",
  });
     useEffect(() => {
          axios
               .get("http://127.0.0.1:8000/api/display-blogs/" + id)
               .then((res) => {
                    setData({
                         ...data,
                         title: res.data.title,
                         slug: res.data.slug,
                         description: res.data.description,
                         image: res.data.image,
                         author: res.data.author,
                         author_details: res.data.author_details,
                    });
               })
               .catch((err) => console.log(err));
     }, []);
     
     const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8000/api/update-blogs/" + id, data)
      .then((res) => {
             navigate("/admin/blogs/");
      })
      .catch((err) => console.log(err));
  };

  const navigateDefault = () => {
      navigate("/admin/blogs");
    };
  return (
    <div>
      <div>
        <div class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div class="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div class="mb-4">
              <h1 class="font-serif text-3xl font-bold text-center underline decoration-gray-400">
                Update Blogs
              </h1>
            </div>

            {/* {data ? ( */}
            <div class="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              {/* <!-- Title --> */}
              <div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="title"
                >
                  Title
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="title"
                  placeholder="180"
                  // defaultValue={state.name}
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>
              <div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="title"
                >
                  Slug
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="slug"
                  placeholder="180"
                  // defaultValue={state.slug}
                  value={data.slug}
                  onChange={(e) => setData({ ...data, slug: e.target.value })}
                />
              </div>

              {/* <!-- Description --> */}
              <div class="mt-4">
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="password"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="4"
                  placeholder="400"
                  value={data.description}
                  // defaultValue={state.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                ></textarea>
              </div>
              {/* Level */}
              <div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="image"
                >
                  Image
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="file"
                  name="image"
                  placeholder="180"
                  value={data.image}
                  // defaultValue={state.level}
                  onChange={(e) => setData({ ...data, image: e.target.value })}
                >
                </input>
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700" for="fee">
                  Author
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="author"
                  placeholder="180"
                  value={data.author}
                  // defaultValue={state.fee}
                  onChange={(e) => setData({ ...data, author: e.target.value })}
                />
              </div>
              <div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="duration"
                >
                  Author Details
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-red-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="author_details"
                  placeholder="180"
                  value={data.author_details}
                  // defaultValue={state.duration}
                  onChange={(e) =>
                    setData({ ...data, author_details: e.target.value })
                  }
                />
              </div>
              {/* Button */}
              <div class="flex items-center justify-start mt-4 gap-x-2">
                <button
                  type="submit"
                  class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  type="submit"
                  class="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                     onClick={navigateDefault}
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* ) : (<p>Loading...</p>)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBlogs;
