import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
// import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

// import { motion } from "framer-motion";
import logo from "../../images/logo.png";
import "./header.css";
import { FaShoppingBasket } from "react-icons/fa";
import axios from "axios";

export function Header() {
  const [data, setData] = useState([]);

  const handleOnClick = () => {
    // window.location.href = `https://securegw-stage.paytm.in/order/process?CALLBACK_URL=http%3A%2F%2Flocalhost%3A2021%2Fpgresponse&CHANNEL_ID=WEB&CHECKSUMHASH=o%2FvDrilFKh6yRpFzxe%2FPCIfTZb%2B2xMDXazA3p%2BOkYWWieBG25DWAntGuuyE5AJwWJmDKt7j5IAnUEVJ2viIEZS6MTrqtFZdO6GvnJ4tEBJ4%3D&CUST_ID=6565&EMAIL=vspavan65%40gmail.com&INDUSTRY_TYPE_ID=Retail&MID=fWBMiD30870139377670&MOBILE_NO=9676332701&ORDER_ID=151&TXN_AMOUNT=1&WEBSITE=WEBSTAGING`;
    axios
      .post(
        "http://10.81.4.242:8080/submitPaymentDetail?CUST_ID=123&TXN_AMOUNT=124&ORDER_ID=5646556"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });

    // https://securegw-stage.paytm.in/order/process?CALLBACK_URL=http%3A%2F%2Flocalhost%3A8080%2Fpgresponse&CHANNEL_ID=WEB&CHECKSUMHASH=KilbZb5drcDYpiBVq7yHYSYznqljFcpmF9b4dn7f3HI60Ta%2BM6ItQJ5uV%2BKc%2B9abxssdrDjyZ0sWlIwaWoawybCH8iGjnU4wC9c3JAfLkes%3D&CUST_ID=45&EMAIL=vspavan65%40gmail.com&INDUSTRY_TYPE_ID=Retail&MID=fWBMiD30870139377670&MOBILE_NO=9676332701&ORDER_ID=978&TXN_AMOUNT=1&WEBSITE=WEBSTAGING
  };
  useEffect(() => {
    if (data.CALLBACK_URL) {
      // window.location.href = `https://securegw-stage.paytm.in/order/process?CALLBACK_URL=http%3A%2F%2Flocalhost%3A2021%2Fpgresponse&CHANNEL_ID=WEB&CHECKSUMHASH=o%2FvDrilFKh6yRpFzxe%2FPCIfTZb%2B2xMDXazA3p%2BOkYWWieBG25DWAntGuuyE5AJwWJmDKt7j5IAnUEVJ2viIEZS6MTrqtFZdO6GvnJ4tEBJ4%3D&CUST_ID=6565&EMAIL=vspavan65%40gmail.com&INDUSTRY_TYPE_ID=Retail&MID=fWBMiD30870139377670&MOBILE_NO=9676332701&ORDER_ID=151&TXN_AMOUNT=1&WEBSITE=WEBSTAGING`;
      window.location.href = `https://securegw-stage.paytm.in/order/process?CALLBACK_URL=${data.CALLBACK_URL}&CHANNEL_ID=${data.CHANNEL_ID}&CHECKSUMHASH=${data.CHECKSUMHASH}&CUST_ID=${data.CUST_ID}&EMAIL=${data.EMAIL}&INDUSTRY_TYPE_ID=${data.INDUSTRY_TYPE_ID}&MID=${data.MID}&MOBILE_NO=${data.MOBILE_NO}&ORDER_ID=${data.ORDER_ID}&TXN_AMOUNT=${data.TXN_AMOUNT}&WEBSITE=${data.WEBSITE}`;
    }
  }, [data]);

  const handlefunction = () => {
    sessionStorage.clear();
    alert(`Logout Successful`);
    setToken((data) => (data = sessionStorage.getItem("Access_Token")));
  };
  // eslint-disable-next-line   no-unused-vars
  const [token, setToken] = useState(sessionStorage.getItem("Access_Token"));
  // eslint-disable-next-line   no-unused-vars
  const [cartItems, setCartItems] = useState(1);

  return (
    <div>
      <Navbar className="color-nav" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" className="main-icon" />
              {/* <nobr className="section1">0</nobr>
              <nobr className="section2">MG</nobr> */}
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Link className="m-2" to="/" id="nav-link">
                <HomeIcon className="icon" /> Home
              </Link> */}
            </Nav>
            <Nav id="nav">
              <Button
                // variant="outline-light"
                className="m-2"
                onClick={handleOnClick}
              >
                pay Rs1
              </Button>

              {[null, undefined].includes(token) && (
                <>
                  <Link className="m-2" to="/login" id="nav-link">
                    Login
                    <LoginIcon className="icon" />
                  </Link>
                </>
              )}

              {![null, undefined].includes(token) && (
                <>
                  {/* <Link className="m-2" to="/dashboard" id="nav-link">
                    Dashboard
                  </Link> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      className="toggle"
                      variant="light"
                      id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                    >
                      {/* <img src={profilepic} alt="profile" className="img" /> */}
                      Username
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Row>
                        <Link className="m-2" to="/user/profile" id="nav-link">
                          <ManageAccountsIcon className="icon" /> Profile
                        </Link>
                        <Link className="m-2" to="/user/settings" id="nav-link">
                          <SettingsIcon className="icon" /> Settings
                        </Link>
                        <Link
                          className="m-2"
                          to="/"
                          onClick={handlefunction}
                          id="nav-link"
                        >
                          <LogoutIcon className="icon" />
                          Logout
                        </Link>
                      </Row>
                      {/* <Link to="/" className="cart">
                          <FaShoppingBasket className="cart-icon" />
                          <span className="cart-badge">
                            {cartItems > 0 ? cartItems : ""}
                          </span>
                        </Link> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
              <Link to="/" className="cart">
                <FaShoppingBasket className="cart-icon" />
                <span className="cart-badge">
                  {cartItems > 0 ? cartItems : ""}
                </span>
                {/* <span className="">My basket</span> */}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
