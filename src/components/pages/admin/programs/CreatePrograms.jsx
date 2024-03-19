import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";


export function CreatePrograms() {
    const navigate = useNavigate();
    const navigateDefault = () => {
      navigate("/admin/programs");
    };
    // Create Function Parameters
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("");
    const [fee, setFee] = useState("");
    const [duration, setDuration] = useState("");

    async function createPrograms() {
      console.warn(name, slug, description, level, fee, duration);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("slug", slug);
      formData.append("description", description);
      formData.append("level", level);
      formData.append("fee", fee);
      formData.append("duration", duration);
      let result = await fetch("http://localhost:8000/api/create-programs", {
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
                  Create Programs
                </h1>
              </div>

              <div class="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
                {/* <!-- Title --> */}
                <div>
                  <label
                    class="block text-sm font-bold text-gray-700"
                    for="title"
                  >
                    Name
                  </label>

                  <input
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="name"
                    placeholder="180"
                    onChange={(e) => setName(e.target.value)}
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
                    for="level"
                  >
                    Level
                  </label>

                  <select
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="email"
                    placeholder="180"
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option selected>Choose Level</option>
                    <option value="PreSchool">Pre School</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="+2">+2</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="PHD">PHD</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700" for="fee">
                    Fee
                  </label>

                  <input
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="fee"
                    placeholder="180"
                    onChange={(e) => setFee(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-bold text-gray-700"
                    for="duration"
                  >
                    Duration
                  </label>

                  <input
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-red-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    name="duration"
                    placeholder="180"
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                {/* Button */}
                <div class="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                    onClick={createPrograms}
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
  
export default CreatePrograms;