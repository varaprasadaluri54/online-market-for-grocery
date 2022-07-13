import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import ApiService from "../../services/ApiService";
export function ForgotPassword() {
  const [data, setData] = React.useState({});
  const [status, setStatus] = React.useState(false);
  const navigate = useNavigate();
  const handleOtp = (e) => {
    e.preventDefault();
    console.log(data);
    ApiService.Otp(data)
      .then((res) => {
        console.log(res);
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
    // eslint-disable-next-line   no-unused-vars
    ApiService.password(data)
      .then((res) => {
        console.log(res);
        alert(`Password changed successfully`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div id="login" className="container-sm ">
        <h1 className="title text-center">Forgot Password</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Phone no</Form.Label>

            <Form.Control
              required
              type="text"
              defaultValue={data.phoneNumber}
              name="phoneNumber"
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
              className="shadow"
              placeholder="+919999999999"
              disabled={status}
            />
          </Form.Group>
          {status ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>otp</Form.Label>
                <Form.Control
                  required
                  type="number"
                  defaultValue={data.otp}
                  className="shadow"
                  onChange={(e) => setData({ ...data, otp: e.target.value })}
                  placeholder="enter otp"
                  // minLength="8"
                  // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  defaultValue={data.newPassword}
                  className="shadow"
                  onChange={(e) =>
                    setData({ ...data, newPassword: e.target.value })
                  }
                  placeholder="enter your password"
                  // minLength="8"
                  // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
                />
              </Form.Group>

              <Button type="submit" className="btn-login" variant="success">
                submit
              </Button>
            </>
          ) : (
            <Button className="btn-login" variant="success" onClick={handleOtp}>
              Send OTP
            </Button>
          )}

          <Link className="text-center" to="/">
            cancel
          </Link>
        </Form>
      </div>
    </>
  );
}
