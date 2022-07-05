import React from "react";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

const Programs = ({ programsData }) => {

  let navigate = useNavigate();



  return (
    <div className="programs-wrapper">
      <h1>Get Started</h1>
      <Row className="programs">
        {programsData.map((program, i) => (
          <div key={i}>
            <h2>{program.name}</h2>
            <h5>{program.description}</h5>
            <span>${program.price}</span>
            <ul>
              {program.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button onClick={() => navigate(program.url)} >Learn more</button>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Programs;
