import React from "react";
import Button from "react-bootstrap/Button";
import firstStep from "../../assets/firststep.png";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "../Carousel";
import  allDetails  from '../../Utils/WhatYouGetDetails'
import WhatYouGet from "../SubComponents/WhatYouGet";

const Beginner = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="beginner-header">
        <div>
          <h1>Let's begin your journey</h1>
          <p>
            The best way to start is by taking the first step. <br />
            Weather it's a big or small one you just want to get started
          </p>
          <Button onClick={() => navigate("/signup")}>Sign up!</Button>
        </div>
        <div>
          <img src={firstStep}></img>
        </div>
      </div>
      <WhatYouGet details={allDetails.beginnerDetails} />
      <div className="carousel-container">
        <h2>Live a Life of Fitness</h2>
        <CarouselComponent />
      </div>
      <div class="call-to-action">
        <div>
          <p>
            I want you to know that my goal here is not to get your money but to
            use whaat I have learned and mastered to make you in the athlete you
            deserve to be
          </p>
        </div>
        <div>
          <Button variant="secondary">Join Now</Button>
        </div>
      </div>
    </>
  );
};

export default Beginner;
