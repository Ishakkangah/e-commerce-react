import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";

import MasterLayout from "./layouts/admin/MasterLayout";
import routes from "./routes/routes";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />

          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<MasterLayout />}>
            {routes
              .filter((route) => route.component)
              .map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            <Route index element={<Navigate to="/admin/dashboard" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
