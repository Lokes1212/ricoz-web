// import React from "react";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//  <header>
//   <nav class="navbar">
//     <ul>
//       <li><a href="/" >Home</a></li>
//       <li><a href="/" >About</a></li>
//       <li><a href="/" >Services</a></li>
//       <li class="Logo">
//         <img src="/" alt="Logo"/>
//       </li>
         
    

  
     
//         <div class="right">
//       <li class="right-nav"><a href="/" >blog</a></li>
//       <li class="right-nav"><a href="/" >Contact</a></li>
//       <button>free Qoute</button>
      

//       </div>
     
        

     
//       </ul>
      
     
   
//   </nav>
//  </header>
  
   
//   );
// }
import React from 'react'
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">&#8942;</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <div class="nav-link disabled">
          <a ></a>
          </div>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
