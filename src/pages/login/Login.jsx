import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import ApiService from "../../services/ApiService";
import Login1 from "../../images/Login1.svg";
import "./login.css";

function Login() {
  // eslint-disable-next-line   no-unused-vars
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line   no-unused-vars
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line   no-unused-vars
    const loginData = { userName: username, password: password };

    ApiService.login(loginData)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("Access_Token", res.data.token);
        // const user = localStorage.getItem('user')
        // const username = jwt (res.data.token).sub;
        // console.log(username);
        // sessionStorage.setItem("username", username);
        setErrors(false);
        alert(`Login Successful `);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setErrors(true);
      });
  };
  return (
    <>
      <Header />

      <div id="login">
        <div className="container1">
          <img src={Login1} alt="profile" />
        </div>
        <div className="container2">
          <h1 className="title text-center">OMG</h1>
          <p className="titlelogin">
            <strong>Hello,</strong>
            <br />
            Please Login to <br />
            Your Account!
          </p>
          {/* <center>
          <img
            src="https://th.bing.com/th/id/R.d30e6efc528b32dfd235336c984fd7e7?rik=8JGZrCxbsbVkWg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_242741.png&ehk=A9%2foBulshSIGJ67OOYFZaVqv57aHINZJOXo7RhBM0ss%3d&risl=&pid=ImgRaw&r=0"
            alt="profile"
            className="personImg"
          />
        </center> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>

              <Form.Control
                required
                type="text"
                value={username}
                isInvalid={errors}
                className="shadow"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="name@gmail.com"
              />
            </Form.Group>
            {errors && (
              <p className="text-danger mb-1">
                The provided credentials do not match our records.
              </p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>password</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                className="shadow"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
                // minLength="8"
                // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
              />
            </Form.Group>

            <Button type="submit" className="btn-login" variant="success">
              Login
            </Button>
            {"  "}

            <br />
            <Link className="text-center " to="/forgotPassword">
              Forgot Password?
            </Link>
            {" / "}
            <Link className="text-center" to="/signup">
              Signup
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
