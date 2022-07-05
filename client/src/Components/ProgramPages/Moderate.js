import React from "react";
import Button from "react-bootstrap/Button";
import moderatePng from "../../assets/Moderate.png";
import { useNavigate } from "react-router-dom";
import WhatYouGet from "../SubComponents/WhatYouGet";
import allDetails from "../../Utils/WhatYouGetDetails";

const Moderate = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="beginner-header">
        <div>
          <h1>Let's improve your athetitism</h1>
          <p>
            Weather you feel like you are hitting a wall or just want to see how
            far you can go. <br /> I can help you.
          </p>
          <Button onClick={() => navigate("/signup")}>Sign up!</Button>
        </div>
        <div>
          <img src={moderatePng}></img>
        </div>
      </div>
    <WhatYouGet details={allDetails.moderateDetails} />
    </>
  );
};

export default Moderate;



// used engine x server apache
