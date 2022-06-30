import React from "react";
import { Carousel } from "react-bootstrap";
import pic from "../../images/pic.png";

const Carousels = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block "
            src={pic}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={pic}
            alt="Second slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={pic}
            alt="Third slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
