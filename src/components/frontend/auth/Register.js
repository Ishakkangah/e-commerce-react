import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert";

function Register() {
  const Navigate = useNavigate();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post("/api/register", data).then((res) => {
        if (res.data.status === 200) {
          console.log("berhasil");
          localStorage.setItem("auth.token", res.data.token);
          localStorage.setItem("auth.username", res.data.username);
          swal("Good job!", res.data.message, "success");
          Navigate("/");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2>Register</h2>
              </div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-2">
                    <label htmlFor="name" className="form-label require">
                      Fullname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Masukan Nama"
                      onChange={handleInput}
                      value={registerInput.name}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                      {registerInput.error_list.name}
                    </div>
                  </div>
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
                      value={registerInput.email}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                      {registerInput.error_list.email}
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
                      value={registerInput.password}
                    />
                    <div id="emailHelp" className="form-text text-danger">
                      {registerInput.error_list.password}
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 shadow-sm"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
