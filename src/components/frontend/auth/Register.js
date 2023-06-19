import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../../layouts/frontend/Navbar";

function Register() {
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
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
        if ((res.status = 200)) {
          console.log("berhasil");
        } else {
          console.log(res.data.validation_errors);
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
              <form onChange={registerSubmit}>
                <div className="card-body">
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
                  </div>
                  <div className="form-group mb-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 shadow-sm"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
