import React, { useState } from "react";
import { Navbar, Container, Nav, Dropdown, Row } from "react-bootstrap";
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

export function Header() {
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
              {/* <Link className="m-2" to="/" id="nav-link">
                About Us
              </Link> */}

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
                  <Link className="m-2" to="/user" id="nav-link">
                    Dashboard
                  </Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="toggle"
                      variant="light"
                      id="dropdown-basic dropdownMenu dropdown-autoclose-true "
                    >
                      {/* <img src={profilepic} alt="profile" className="img" /> */}
                      <p id="nav-link" className="username">
                        username
                      </p>
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
                          //   onClick={handlefunction}
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
