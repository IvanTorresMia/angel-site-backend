import React from "react";
import Button from "react-bootstrap/Button";
import firstStep from "../../assets/firststep.png";
import allDetails from "../../Utils/WhatYouGetDetails";
import WhatYouGet from "../SubComponents/WhatYouGet";
import { useNavigate } from "react-router-dom";

const BeastMode = () => {
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
    <WhatYouGet details={allDetails.moderateDetails} />
    </>
  );
};

export default BeastMode;
