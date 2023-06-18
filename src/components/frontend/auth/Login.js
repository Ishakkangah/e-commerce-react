import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";

function Login() {
  return (
    <div className="container">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
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
                  />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
