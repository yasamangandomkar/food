import React from "react";
import { Stack, Row, Col } from "react-bootstrap";
import image from "../../assets/images/location.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "./style.module.css";
const Tasty = () => {
  return (
    <Stack style={{ marginTop: "100px" }}>
      <Row>
        <Col md={6}>
          <img src={image} alt="" width={600} />
        </Col>
        <Col md={6}>
          <h1>
            Why <span className="red">Tasty Treat?</span>
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi
            neque magni architecto voluptatum repellat! Hic provident unde, fuga
            veritatis praesentium, laborum placeat porro cumque dolores tempore
            aperiam eum soluta.
          </p>
          <div>
            <h4>
              <AiOutlineCheckCircle color="red" />
              <span> Fresh and tasty foods</span>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              sunt?
            </p>
          </div>
          <div>
            <h4>
              <AiOutlineCheckCircle color="red" />
              <span> Quality support</span>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              sunt?
            </p>
          </div>
          <div>
            <h4>
              <AiOutlineCheckCircle color="red" />
              <span> Order from any location </span>
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              sunt?
            </p>
          </div>
        </Col>
      </Row>
    </Stack>
  );
};

export default Tasty;
