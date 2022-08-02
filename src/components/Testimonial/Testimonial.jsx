import { Col, Row, Stack } from "react-bootstrap";
import image from "../../assets/images/network.png";
import TestimonialSlider from "../Slider/TestimonialSlider";
import styles from "./style.module.css";
const Testimonial = () => {
  return (
    <Stack>
      <Row className={styles.testimonial}>
        <Col lg={6}>
          <h5 className="red">Testimonial</h5>
          <h1>
            What Our <span className="red">Customer</span> are saying
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            consequatur.
          </p>
          <TestimonialSlider />
        </Col>
        <Col lg={6}>
          <img src={image} alt="" className={styles.image} />
        </Col>
      </Row>
    </Stack>
  );
};

export default Testimonial;
