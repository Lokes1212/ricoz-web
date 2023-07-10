import React from "react";
import "./Cards.css";
export default function Cards() {
  return (
    <div id="cardsExampleIndicators">
      {/* <div class="cards-indicators">
    <button type="button" data-bs-target="#cardsExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#cardsExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#cardsExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
      <div class="cards">
        <div class="cards-item">
          <h4 class="cards-heading">heading</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla doloribus fugiat quisquam possimus odio
            eligendi, et cupiditate minima sapiente temporibus, laudantium
            commodi modi, nam sed nihil cum? Minus, in.{" "}
          </p>
        </div>

        <div class="cards-item">
          <h4 class="cards-heading">heading</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla doloribus fugiat quisquam possimus odio
            eligendi, et cupiditate minima sapiente temporibus, laudantium
            commodi modi, nam sed nihil cum? Minus, in.{" "}
          </p>
        </div>

        <div class="cards-item">
          <h4 class="cards-heading">heading</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla doloribus fugiat quisquam possimus odio
            eligendi, et cupiditate minima sapiente temporibus, laudantium
            commodi modi, nam sed nihil cum? Minus, in.{" "}
          </p>
        </div>

        <div class="cards-item">
          <h4 class="cards-heading">heading</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit nulla doloribus fugiat quisquam possimus odio
            eligendi, et cupiditate minima sapiente temporibus, laudantium
            commodi modi, nam sed nihil cum? Minus, in.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
