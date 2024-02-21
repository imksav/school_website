import React, { useEffect, useState } from "react";
// import AdminNavbar from "./AdminNavbar";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  });
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
       result = await result.json();
       localStorage.setItem("user-info",JSON.stringify(result))
       navigate("/admin/add_programs");
  }
  return (
    <div>
      {/* <AdminNavbar /> */}
      <div className="col-sm-6 offset-sm-3">
        <br />
        <br />
        <h1>Login</h1>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <select name="" className="form-control">
          <option value="Super Admin">Super Admin</option>
          <option value="Admin / Teacher">Admin / Teacher</option>
          <option value="Student / Parent">Student / Parent</option>
        </select>
        <br />
        { <button className="btn btn-primary" type="submit" onClick={login}>
          Log In
        </button>}
      </div>
    </div>
  );
}
export default Login;
