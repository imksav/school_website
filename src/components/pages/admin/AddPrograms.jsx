import React from "react";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

function AddPrograms() {
  const [name, setName] = useState("");
  const [slung, setSlung] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [fee, setFee] = useState("");
  const [duration, setDuration] = useState("");

  async function addPrograms() {
    console.warn(name, slung, description, level, fee, duration);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slung", slung);
    formData.append("description", description);
    formData.append("level", level);
    formData.append("fee", fee);
    formData.append("duration", duration);
    let result = await fetch("http://localhost:8000/api/create-programs", {
      method: "POST",
      body: formData,
    });
    alert("Data Saved to Database!");
  }
  return (
    <>
      <AdminNavbar />
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Programs</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="slung"
          placeholder="Slung"
          className="form-control"
          onChange={(e) => setSlung(e.target.value)}
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
          type="text"
          name="level"
          placeholder="Level"
          className="form-control"
          onChange={(e) => setLevel(e.target.value)}
        />
        {/* <select
          name="level"
          className="form-control"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="Pre School">Pre School</option>
          <option value="Primary Level">Primary Level</option>
          <option value="Secondary Level">Secondary Level</option>
          <option value="+2">+2 Level</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Masters">Masters</option>
          <option value="PHD">PHD</option>
        </select> */}
        <br />
        <input
          type="text"
          name="fee"
          placeholder="Fee"
          className="form-control"
          onChange={(e) => setFee(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          className="form-control"
          onChange={(e) => setDuration(e.target.value)}
        />
        <br />
        <button className="btn btn-success" onClick={addPrograms}>
          Add Program
        </button>
      </div>
    </>
  );
}
export default AddPrograms;
