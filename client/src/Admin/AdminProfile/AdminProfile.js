import React, { useEffect, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ProgramsContext } from "../../Utils/ProgramsContext";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  let [admin, setAdmin] = useState([]);

  let { getProfile } = useContext(ProgramsContext);

  useEffect(() => {
    let userToken = JSON.parse(localStorage.getItem("userInfo")) || [];
    async function fetch() {
      console.log(userToken);
      await getProfile(userToken).then((res) => {
        setAdmin(res[0]);
      });
    }

    fetch();
  }, []);

  const applicantList = (applicants) => {
    if (applicants === null) return;

    return applicants.map((applicant, i) => (
      <Card key={i} className="col-md-6 mx-auto mt-1 mb-5 admin-card">
        <Card.Body>
          <Card.Title>{`${applicant.FirstName} ${applicant.LastName}`}</Card.Title>
          <Card.Subtitle>
            <strong>Program: </strong> <span>{applicant.Program}</span>
          </Card.Subtitle>
          <Button variant="secondary" className="admin-button">
            <Link to={`view-one/${applicant.ApplicantId}`}>View Details</Link>
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div className="admin-profile">
      <h1>Welcome: {`${admin.FirstName} ${admin.LastName}`}</h1>
      <ProgramsContext.Consumer>
        {({ applicants }) => applicantList(applicants)}
      </ProgramsContext.Consumer>
    </div>
  );
};

export default AdminProfile;

// mysql://b03df51dba9a36:6e743ed6@us-cdbr-east-05.cleardb.net/heroku_720b08a83cfb595?reconnect=true
