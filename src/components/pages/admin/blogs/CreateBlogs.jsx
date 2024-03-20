import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";


export function CreateBlogs() {
    const navigate = useNavigate();
    const navigateDefault = () => {
      navigate("/admin/blogs");
    };
    // Create Function Parameters
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [author_details, setAuthorDetails] = useState("");

    async function createBlogs() {
      console.warn(title, slug, description, image, author, author_details);
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
      console.warn("Create Post: ", result)
      alert("Data Saved to Database!");
      navigateDefault();
    }
    return (
      <>
        <AdminNavbar />
        <div>
          <div class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
            <div class="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
              <div class="mb-4">
                <h1 class="font-serif text-3xl font-bold text-center underline decoration-gray-400">
                  Create Blogs
                </h1>
              </div>

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
                    onChange={(e) => setTitle(e.target.value)}
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
                    onChange={(e) => setSlug(e.target.value)}
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
                    onChange={(e) => setDescription(e.target.value)}
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
                    onChange={(e) => setImage(e.target.files[0])}
                  >
                  </input>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700" for="author">
                    Author
                  </label>

                  <input
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="author"
                    placeholder="180"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-bold text-gray-700"
                    for="author_details"
                  >
                    Author Details
                  </label>

                  <input
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-red-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="author_details"
                    placeholder="180"
                    onChange={(e) => setAuthorDetails(e.target.value)}
                  />
                </div>
                {/* Button */}
                <div class="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                    onClick={createBlogs}
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
            </div>
          </div>
        </div>
      </>
    );
}
  
export default CreateBlogs;