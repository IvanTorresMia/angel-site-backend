import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ProgramsContext } from "../../Utils/ProgramsContext";

const ViewOne = () => {
  let params = useParams();

  let navigate = useNavigate();

  let { getApplicant } = useContext(ProgramsContext);

  let [applicant, setApplicant] = useState();

  let [error, setError] = useState();

  useEffect(() => {
    setError(null);
    async function fetch() {
      await getApplicant(parseInt(params.id))
        .then((applicant) => setApplicant(applicant))
        .catch((message) => setError(message));
    }

    fetch();
  }, [params.id, getApplicant]);

  function loading() {
    return (
      <div className="w-25 text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  function errorMessage() {
    return (
      <Alert variant="danger">
        There was an error attempting to load this contact: {error}
      </Alert>
    );
  }


  function applicantCard() {
    let {
      ApplicantId,
      FirstName,
      LastName,
      PhoneNumber,
      Height,
      weight,
      GoalWeight,
      GoalDescription,
      Program,
    } = applicant;
    return (
      <Card className="align-self-center w-25 mt-5">
        <Card.Body>
          <Card.Title>{`${FirstName} ${LastName}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Height: {Height}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Weight: {weight}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Goal Weight: {GoalWeight}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
           Phone Number: {PhoneNumber}
          </Card.Subtitle>
          <Card.Text>
            <strong>Goal Description:</strong> <span>{GoalDescription}</span>
          </Card.Text>
          <Card.Text>Program: {Program}</Card.Text>
          <Button variant="secondary" onClick={() => navigate("/admin")}>
            Go back to all
          </Button>
        </Card.Body>
      </Card>
    );
  }

  if (error) return errorMessage();
  if (applicant === undefined) return loading();
  return applicant.ApplicantId !== parseInt(params.id) ? loading() : applicantCard();
};

export default ViewOne;
