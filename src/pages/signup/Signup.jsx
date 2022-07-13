import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import ApiService from "../../services/ApiService";

import "./signup.css";

function Signup() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();

  const handleOtp = (e) => {
    e.preventDefault();
    ApiService.sendOtp(data)
      .then((res) => {
        alert("Otp send");
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
        setStatus(false);
      });
  };

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
        alert(JSON.stringify(error?.response?.data));
      });
  };
  return (
    <>
      <Header />
      <div id="signup" className="container-sm shadow">
        <h1 className="title text-center">Register</h1>
        {status ? (
          <>
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
                <Form.Label htmlFor="userName">Username</Form.Label>
                <Form.Control
                  name="userName"
                  id="userName"
                  required
                  type="text"
                  placeholder="Enter Username"
                  defaultValue={data.userName}
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
                  name="dob"
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
                  required
                  id="phone number"
                  type="tel"
                  message="please enter correct number"
                  name="phoneNumber"
                  // placeholder="+919999999999"
                  // pattern="[+91][0-9].{11}"
                  // maxLength={13}
                  title="enter phone number like +919999999999"
                  defaultValue={data.phoneNumber}
                  onChange={handleChange}
                  disabled
                  // readOnly
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="otp">Otp</Form.Label>
                <Form.Control
                  id="otp"
                  type="number"
                  message="please enter otp"
                  name="userOtp"
                  title="enter otp"
                  defaultValue={data.userOtp}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="btn-signup" type="submit">
                Signup
              </Button>
            </Form>
          </>
        ) : (
          <Form onSubmit={handleOtp}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone number">Phone Number</Form.Label>
              <Form.Control
                required
                id="phone number"
                type="tel"
                // pattern="[+91][0-9]{13}"
                // pattern="[0-9]{10}"
                message="please enter correct number"
                name="phoneNumber"
                // placeholder="+919999999999"
                pattern="[+91][0-9].{11}"
                maxLength={13}
                title="enter phone number like +919999999999"
                defaultValue={data.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="btn-signup" type="submit">
              Get Otp
            </Button>
          </Form>
        )}{" "}
        <Button as={Link} to="/" variant="danger">
          Cancel
        </Button>
      </div>
    </>
  );
}

export default Signup;
