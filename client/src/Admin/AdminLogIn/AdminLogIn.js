import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ProgramsContext } from "../../Utils/ProgramsContext";
import { useNavigate } from "react-router-dom";

const AdminLogIn = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
    admin: true,
  });

  let navigate = useNavigate();

  let { password, email, admin } = user;

  let { login } = useContext(ProgramsContext);

  function handleChange(event) {
    event.preventDefault();
    setUser((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    login(user).then((res) => {
      localStorage.setItem("userInfo", JSON.stringify(res));
      navigate("/admin");
    });
  }

  return (
    <>
      <Form className="col-md-6 mx-auto mt-5 mb-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="mt-4" type="submit">
          LogIn
        </Button>
      </Form>
    </>
  );
};

export default AdminLogIn;
