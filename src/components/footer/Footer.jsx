import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiSendPlaneLine } from "react-icons/ri";
import styles from "./style.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="text-center">
          <Col lg={3} xs={6} md={4}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              possimus!
            </p>
          </Col>
          <Col lg={3} xs={6} md={4} className={styles.footerLeft}>
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
          <Col lg={3} md={3} className={styles.footerLeft}>
            <div>
              <h5> Contact</h5>
              <span>Location:ZindaBazar,Sylhet-3100,Bangeladesh</span>

              <div className="my-3">
                <h6>Phone:01712345678</h6>
                <h6>Email:example@gmail.com</h6>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} className={styles.footerCenter}>
            <div>
              <h5> Newsletter</h5>
              <span>Subscribe our newsletter</span>

              <form>
                <div className={styles.form}>
                  <input type="text" placeholder="Enter your email" />
                  <RiSendPlaneLine size={30} />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
