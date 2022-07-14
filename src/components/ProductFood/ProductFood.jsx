import { Stack, Row, Col, Button, Card } from "react-bootstrap";
import styles from "./style.module.css";
const ProductFood = ({ products }) => {
  console.log(products);

  return (
    <div>
      <Stack>
        <Row className="justify-content-center">
          {products.map((product, index) => (
            <Col key={index} lg={3}>
              <Card className="text-center gap-3 p-3 m-3">
                <div className="justify-content-center align-center">
                  <Card.Img
                    src={product.image01}
                    alt=""
                    className="w-50 h-50"
                  />
                </div>
                <Card.Title className={styles.title}>
                  {product.title}
                </Card.Title>
                <Row className="align-center justify-content-between">
                  <Col>
                    <Card.Text className="mb-2 text-muted red ">
                      {product.price}$
                    </Card.Text>
                  </Col>
                  <Col>
                    <Button style={{ fontSize: "12px" }} variant="danger">
                      Added to cart
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Stack>
    </div>
  );
};

export default ProductFood;
