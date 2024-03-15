import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { Link, useParams, NavLink } from "react-router-dom";
export const AdminProgram = ({ programs }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [programs]);

  // const navigate = useNavigate();
  // const navigateUpdate = (id) => {
  //   alert(id);
  //   // navigate("/admin/programs/update-programs/"+id);
  // };


  async function deleteOperation(id) {
    let result = await fetch(
      "http://127.0.0.1:8000/api/delete-programs/" + id,
      {
        method: "DELETE",
      }
    );
    result = await result.json();
    console.warn(result);
    getData();
  }

  async function getData() {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/display-programs"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };
    fetchPrograms();
  }
  return (
    <>
      <AdminNavbar />
      <div class="container max-w-7xl mx-auto mt-8">
        <div class="mb-4">
          <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">
            Programs Index
          </h1>
          <div class="flex justify-end">
            <Link to="/admin/programs/create-programs">
              <button class="px-4 py-2 rounded-md bg-primary no-underline hover:bg-amber-400 text-white">
                Create Programs
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
                      Name
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Slug
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Description
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Level
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Fee
                    </th>
                    <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Duration
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
                          {item.name}
                        </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.slug}</p>
                      </td>

                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.description}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.level}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.fee}</p>
                      </td>
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <p>{item.duration}</p>
                      </td>
                      <td class="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                        {/* View Icon */}
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
                      </td>
                      {/* Edit Icon */}
                      <td class="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                        <NavLink to={`/admin/programs/update-programs/${item.id}`}
          
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
        </NavLink>
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
};

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
  const [state, setState] = useState({

  })
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

  // Adding Programs Functions are here
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


  export default AdminProgram
