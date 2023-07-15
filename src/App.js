import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import Cards from "./Components/Cards/Cards";
import TWI from "./Components/Text with image/TWI";
import Sub from "./Subscribe/Sub";
import Footer from "./Components/Footer/Footer";





const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Slider />

      <Cards />
      
      <TWI/>
      <Sub/>
      <Footer/>
      
      

      
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
