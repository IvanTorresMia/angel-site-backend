import React from "react";

const WhatYouGet = ({ details }) => {
  if (details === null) {
    return;
  } else {
    return (
      <div className="what-you-get">
        <h1>What you get</h1>
        <div>
          {details.map((d, i) => (
            <div className="wyg-card" key={i}>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default WhatYouGet;
