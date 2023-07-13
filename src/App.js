import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Cards from "./Components/Cards/Cards";
import TWI from "./Components/Text with image/TWI";
// import Cards from "./Components/Cards";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Slider />

      <Cards />
      <div>
      <TWI/>
      </div>
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
