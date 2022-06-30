import React from "react";
import { Button } from "react-bootstrap";
import "./twoSection.css";
const TwoSections = (props) => {
  return (
    <div className="two-section">
      <div className="two-section1 ">
        <img src={props.imgSource} alt="test" />
      </div>
      <div className="two-section2">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        {props.btnService ? <Button>props?.btnService</Button> : ""}
      </div>
    </div>
  );
};

export default TwoSections;
