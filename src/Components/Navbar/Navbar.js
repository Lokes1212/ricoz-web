import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg --bs-success-text-emphasis">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class=".text-dark">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item  left_nav">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item  left_nav">
                  <a class="nav-link " href="/">
                    About
                  </a>
                </li>
                <li class="nav-item left_nav">
                  <a class="nav-link" href="/">
                    Services
                  </a>
                </li>

                <li class="nav-item center_nav">
                  <a class="nav-link" href="/">
                    <img
                      src="https://picsum.photos/200"
                      alt="Logo"
                      width="100"
                      height="50"
                    />
                  </a>
                </li>

                <li class="nav-item right_nav">
                  <a class="nav-link " href="/">
                    Blog
                  </a>
                </li>
                <li class="nav-item right_nav">
                  <a class="nav-link " href="/">
                    Contact
                  </a>
                </li>
                <li class="nav-item right_nav">
                  <button class="nav-link ">Free Quote</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
