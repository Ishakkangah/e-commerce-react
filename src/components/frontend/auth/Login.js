import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../../../layouts/frontend/Navbar";

function Login() {
  const Navigate = useNavigate();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: "",
  });

  const handleInput = (e) => {
    e.persist();

    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.post("/api/login", data).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem("auth.token", res.data.token);
        localStorage.setItem("auth.username", res.data.username);
        Navigate("/");
        swal("success", res.data.message, "success");
      } else if (res.data.status === 401) {
        swal("warning", res.data.message, "warning");
      } else {
        setLogin({ ...loginInput, error_list: res.data.validation_errors });
      }
    });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={loginSubmit}>
              <div className="card">
                <div className="card-header">
                  <h2>Login</h2>
                </div>
                <div className="card-body">
                  <div className="form-group mb-2">
                    <label htmlFor="email" className="form-label require">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Masukan email"
                      onChange={handleInput}
                      value={loginInput.email}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                      {loginInput.error_list.email}
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="password" className="form-label require">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="********"
                      onChange={handleInput}
                      value={loginInput.password}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                      {loginInput.error_list.password}
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 shadow-sm"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
