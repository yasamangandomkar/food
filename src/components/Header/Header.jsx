import { Stack, Row, Col, Button } from "react-bootstrap";
import styles from "./Header.module.css";
import header from "../../assets/images/hero.png";
import { AiFillCar } from "react-icons/ai";
const Header = () => {
  return (
    <Stack>
      <Row className="align-center" style={{ marginTop: "100px" }}>
        <Col className={styles.headerL}>
          <h3>Easy way to an order</h3>
          <h1>
            <span className="red">HUNGRY</span> ? just wait <br /> food at{" "}
            <span className="red"> your door</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            vitae
          </p>
          <div>
            <Button style={{ marginRight: "20px" }} variant="danger">
              Order now{" "}
            </Button>
            <Button variant="outline-danger">See all foods</Button>
          </div>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <Button
                variant="danger"
                style={{ borderRadius: "100%", marginRight: "10px" }}
              >
                <AiFillCar size={25} />
              </Button>
              {""}
              No shiping charge
            </Col>
            <Col>
              <Button
                variant="danger"
                style={{ borderRadius: "100%", marginRight: "10px" }}
              >
                <AiFillCar size={25} />
              </Button>
              100% secure checkout
            </Col>
          </Row>
        </Col>
        <Col className={styles.headerR}>
          <img src={header} alt="" style={{ width: "500px" }} />
        </Col>
      </Row>
    </Stack>
  );
};

export default Header;
