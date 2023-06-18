import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div class="container">
                <Link class="navbar-brand" to="#">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/collection">Collection</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;