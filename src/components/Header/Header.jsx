import { Stack, Row, Col, Button } from "react-bootstrap";
import styles from "./Header.module.css";
import header from "../../assets/images/hero.png";
import { AiFillCar } from "react-icons/ai";
const Header = () => {
  return (
    <Stack className={styles.header}>
      <Row>
        <Col className={styles.headerL}>
          <h3>Easy way to an order</h3>
          <h1>
            <span className="red">HUNGRY</span> ? just wait <br /> food at{" "}
            <span className="red"> your door</span>
          </h1>
          <p>
            Own your guest relationship, grow your online sales and maximize
            profits
          </p>
          <div>
            <Button style={{ marginRight: "20px" }} variant="danger">
              Order now{" "}
            </Button>
            <Button variant="outline-danger">See all foods</Button>
          </div>
          <Row style={{ marginTop: "20px" }}>
            <Col sm={12} md={12}>
              <Button
                variant="danger"
                style={{ borderRadius: "100%", margin: "10px" }}
              >
                <AiFillCar size={25} />
              </Button>
              {""}
              <span> No shiping charge</span>
            </Col>
            <Col sm={12}>
              <Button
                variant="danger"
                style={{ borderRadius: "100%", margin: "10px" }}
              >
                <AiFillCar size={25} />
              </Button>
              <span> 100% secure checkout</span>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="text-center">
          <img src={header} alt="" className={styles.headerImg} />
        </Col>
      </Row>
    </Stack>
  );
};

export default Header;
