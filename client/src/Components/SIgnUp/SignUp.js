import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ProgramsContext } from "../../Utils/ProgramsContext";

const SignUp = () => {
  let [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    height: "",
    weight: "",
    goalWeight: "",
    goalDescription: "",
    program: "beginner",
  });

  let {
    firstName,
    lastName,
    phoneNumber,
    height,
    weight,
    goalWeight,
    goalDescription,
    program,
  } = info;

  let { addApplicant } = useContext(ProgramsContext);

  function handleChange(event) {
    event.preventDefault();

    setInfo((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    return addApplicant(info);
  }

  return (
    <>
      <Form className="col-md-6 mx-auto mt-5 mb-5" onSubmit={handleSubmit}>
        <h2 className="mb-4">Sign Up for a Program</h2>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="text"
            name="height"
            value={height}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="text"
            name="weight"
            value={weight}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Goal Weight</Form.Label>
          <Form.Control
            type="text"
            name="goalWeight"
            value={goalWeight}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Choose Program</Form.Label><br />
          <select name="program" value={program} onChange={handleChange}>
            <option value="beginner">Beginner</option>
            <option value="moderate">Moderate</option>
            <option value="beastMode">Beast Mode</option>
          </select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tell me about your fitness goals</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="type here"
            style={{ height: "100px" }}
            type="text"
            name="goalDescription"
            value={goalDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="mt-4" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
