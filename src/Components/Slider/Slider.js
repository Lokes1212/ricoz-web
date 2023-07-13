import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://pbs.twimg.com/ext_tw_video_thumb/1644061537936592900/pu/img/4qnya8Jz7LUm-zKS?format=jpg&name=large"
              class="d-block w-100"
              alt="first "
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://pbs.twimg.com/ext_tw_video_thumb/1644061537936592900/pu/img/4qnya8Jz7LUm-zKS?format=jpg&name=large"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="https://pbs.twimg.com/ext_tw_video_thumb/1644061537936592900/pu/img/4qnya8Jz7LUm-zKS?format=jpg&name=large" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
