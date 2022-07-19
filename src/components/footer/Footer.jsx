import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiSendPlaneLine } from "react-icons/ri";
import styles from "./style.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg={3}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              possimus!
            </p>
          </Col>
          <Col lg={3} className={styles.footerLeft}>
            <div>
              <h5>Delivery Time</h5>
              <h6>Sunday-Thursday</h6>
              <span>10:00 am - 11:00pm</span>
            </div>
            <div className="my-3">
              <h6>Friday-sunday</h6>
              <span>off day</span>
            </div>
          </Col>
          <Col lg={3} className={styles.footerLeft}>
            <div>
              <h5> Contact</h5>
              <span>Location:ZindaBazar,Sylhet-3100,Bangeladesh</span>

              <div className="my-3">
                <h6>Phone:01712345678</h6>
                <h6>Email:example@gmail.com</h6>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <h5> Newsletter</h5>
              <span>Subscribe our newsletter</span>

              <form>
                <input type="text" placeholder="Enter your email" />
                <RiSendPlaneLine />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
