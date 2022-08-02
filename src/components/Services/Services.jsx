import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { service } from "./serviceData";
const Services = () => {
  const services = service;
  return (
    <>
      <Stack className="col-md-5 mx-auto text-center " gap={3}>
        <div>
          <h5 className="red">What we serve</h5>
          <h1>
            Just sit back at home <br />
            we will
            <span className="red"> take care</span>
          </h1>
          <p className="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div></div>
      </Stack>
      <Stack className="mt-20">
        <Row className="justify-content-center" gap={3}>
          {services.map((service, index) => (
            <Col key={index} xs={6} md={5} lg={3} className="text-center">
              <img src={service.imgUrl} alt="" className="w-50" />
              <h5 className="my-3">{service.title}</h5>
              <p className="gray">{service.text}</p>
            </Col>
          ))}
        </Row>
      </Stack>
    </>
  );
};

export default Services;
