import React from "react";
import { Col, Row } from "react-bootstrap";
// import homeimg from "../images/homeimg.jpg";
import { NavLink } from "react-router-dom";

import "./card.css";

const Cards = (props) => {
  return (
    <>
      <div className="card">
        <Row>
          <Col xs={8}>
            <div className="card-img">
              <img
                src={props?.imgSource}
                alt="service1"
                className="imagecontainer"
              />
            </div>
          </Col>
          <Col xs={4} className="card-body">
            <h2>{props?.title1}</h2>
            <p>{props?.desc1}</p>
            <div className="btnBox">
              <div className="btn">
                <NavLink to="/about" className="readMore">
                  {props?.btnService}
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cards;
