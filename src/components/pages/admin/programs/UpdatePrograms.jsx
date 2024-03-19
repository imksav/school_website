import {React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../AdminNavbar";

export function UpdatePrograms() {

  const handleInput = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]:e.target.value
    }));
    
  }
  const navigate = useNavigate();
  const navigateDefault = () => {
    navigate("/admin/programs");
  };
  const { id } = useParams();
  const [state, setState] = useState({});
  const [data, setData] = useState([]);
  // const [name, setName] = useState("");
  // const [slug, setSlug] = useState("");
  // const [description, setDescription] = useState("");
  // const [level, setLevel] = useState("");
  // const [fee, setFee] = useState("");
  // const [duration, setDuration] = useState("");
  useEffect(() => {
    fetchPrograms();
  }, [id])

  const fetchPrograms = async () => {
    await axios.get("http://127.0.0.1:8000/api/display-programs/"+id)
      .then((response) => {
        setState(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function updatePrograms() {
    console.log(state);
    // console.log(name, slug, description, level, fee, duration);
    if (!state.name || !state.slug || !state.description || !state.level || !state.fee || !state.duration) {
      return alert("Missing fields!!!");
    }
      const formData = new FormData();
      formData.append("name", state.name);
      formData.append("slug", state.slug);
      formData.append("description", state.description);
      formData.append("level", state.level);
      formData.append("fee", state.fee);
      formData.append("duration", state.duration);
      let result = await fetch("http://localhost:8000/api/update-programs/"+id, {
        method: "PUT",
        headers: {"content-type":"multipart/form-data"},
        body: formData,
      });
      console.warn("Update Post: ", result)
      alert("Data Updated to Database!");
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
                  Update Programs
                </h1>
              </div>

            {data ? (
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
                    defaultValue={state.name}
                    // value={data.name}
                    onChange={handleInput}
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
                    defaultValue={state.slug}
                    onChange={handleInput}
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
                    defaultValue={state.description}
                    onChange={handleInput}
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
                    name="level"
                    placeholder="180"
                    defaultValue={state.level}
                    onChange={handleInput}
                  >
                    <option selected>Select Option</option>
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
                    defaultValue={state.fee}
                    onChange={handleInput}
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
                    defaultValue={state.duration}
                    onChange={handleInput}
                  />
                </div>
                {/* Button */}
                <div class="flex items-center justify-start mt-4 gap-x-2">
                  <button
                    type="submit"
                    class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                    onClick={updatePrograms}
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
            ) : (<p>Loading...</p>)}
            </div>
      </div>
                
        </div>
       <div>
      
    </div>
                    
    </>
  )
}