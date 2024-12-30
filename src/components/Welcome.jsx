import React from "react";
import { Carousel } from "react-bootstrap";
import Logo1 from "../assets/imagen1.png";
import Logo2 from "../assets/imagen2.png";
import Logo3 from "../assets/imagen3.png";

function Welcome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img class="d-block w-100" src={Logo1} alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src={Logo2} alt="First slide"></img>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src={Logo3} alt="First slide"></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default Welcome;
