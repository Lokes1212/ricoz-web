import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Cards from "./Components/Cards";
// import Cards from "./Components/Cards";

const App = () => {
  return (
    <>
  <div>
   <Navbar/>
   </div >
   <Slider/>
   
   <Cards/>
      
    {/* <div> 
      <div class="dropdown" >
        <button   
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" type="button">
              Dropdown item
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Dropdown item
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Dropdown item
            </button>
          </li>
        </ul>
      </div>
    </div> */}
    
    </>
  );
};

export default App;
