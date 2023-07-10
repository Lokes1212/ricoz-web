import React from 'react'

export default function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg --bs-success-text-emphasis">
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class=".text-dark">
  <div  class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link "  href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Services</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      </div>
    </div>
    <nav class="navbar bg-body-tertiary">
  <div class="containerr">
    <a class="navbar-brand" href="/">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </a>
  </div>
</nav>
    
   
  </div>
</nav>
    </div>
  )
}
