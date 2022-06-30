import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import ApiService from "../../services/ApiService";

import "./signup.css";

function Signup() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.password && data.password !== data.confirmPassword) {
      setErrors(true);
      return;
    }
    ApiService.register(data)
      .then((res) => {
        // console.log(res.data);
        alert("Registered successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div id="signup" className="container-sm shadow">
        <h1 className="title text-center">Register</h1>
        {/* <center>
          <img
            src="https://th.bing.com/th/id/R.d30e6efc528b32dfd235336c984fd7e7?rik=8JGZrCxbsbVkWg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_242741.png&ehk=A9%2foBulshSIGJ67OOYFZaVqv57aHINZJOXo7RhBM0ss%3d&risl=&pid=ImgRaw&r=0"
            alt="profile"
            className="personImg"
          />
        </center> */}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                name="firstName"
                id="firstName"
                required
                type="text"
                placeholder="First name"
                defaultValue={data.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                id="lastName"
                required
                type="text"
                placeholder="Last name"
                defaultValue={data.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              name="username"
              id="username"
              required
              type="text"
              placeholder="Enter Username"
              defaultValue={data.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              name="email"
              id="email"
              // autoComplete="email"
              required
              type="email"
              placeholder="name@gmail.com"
              defaultValue={data.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                name="password"
                id="password"
                required
                type="password"
                placeholder="Enter your password"
                // minLength="8"
                defaultValue={data.password}
                onChange={handleChange}
                // pattern="[0-9a-zA-Z][!@#$%^&*-?].{8,14}"
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-2">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>

              <Form.Control
                name="confirmPassword"
                id="confirmPassword"
                required
                type="password"
                placeholder="Enter your password"
                // minLength="8"
                defaultValue={data.confirmPassword}
                onChange={handleChange}
                isInvalid={errors}
                // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
              />
              {errors && (
                <p className="text-danger mb-1">Password do not match</p>
              )}
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
            <Form.Control
              name="dateOfBirth"
              id="dateOfBirth"
              required
              type="date"
              defaultValue={data.dob}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 checkbox">
            <Form.Label>Gender : </Form.Label>{" "}
            <Form.Check
              required
              inline
              label="Male"
              name="gender"
              type="radio"
              defaultValue={data.gender}
              onChange={(e) => {
                data.gender = "Male";
              }}
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              defaultValue={data.gender}
              onChange={(e) => {
                data.gender = "Female";
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="phone number">Phone Number</Form.Label>
            <Form.Control
              // required
              id="phone number"
              type="tel"
              // pattern="[+91][0-9]{13}"
              // pattern="[0-9]{10}"
              message="please enter correct number"
              name="phoneNumber"
              // placeholder="+919999999999"
              // pattern="[+91][0-9].{11}"
              // maxLength={13}
              title="enter phone number like +919999999999"
              defaultValue={data.phoneNo}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="btn-signup" type="submit">
            Signup
          </Button>{" "}
          <Button as={Link} to="/" variant="danger">
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signup;
