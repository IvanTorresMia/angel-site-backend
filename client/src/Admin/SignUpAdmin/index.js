import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ProgramsContext } from "../../Utils/ProgramsContext";


const SignUpAdmin = () => {

    let [info, setInfo] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        admin: true
      });

      let {FirstName, LastName, Email, Password} = info;


  let { signUpAdmin } = useContext(ProgramsContext);

function handleSubmit(event) {
    event.preventDefault();
    return signUpAdmin(info);
}

function handleChange(event) {
    event.preventDefault();

    setInfo((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  }


    return (
        <>
        <Form className="col-md-6 mx-auto mt-5 mb-5" onSubmit={handleSubmit}>
          <h2 className="mb-4">Sign Up for a Program</h2>

          <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="FirstName"
            value={FirstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="LastName"
            value={LastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="Email"
            value={Email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="Password"
            value={Password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="mt-4" type="submit">
          Submit
        </Button>
        </Form>
        </>
    )
}

export default SignUpAdmin;