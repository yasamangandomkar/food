import { Stack, Row, Col, Button, Card } from "react-bootstrap";
import Menu from "../Menu/Menu";
import styles from "./style.module.css";
import product from "../../assets/fake-data/Products";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
const ProductFood = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(product);
  const filterItem = (category) => {
    const updateItem = product.filter((item) => {
      return item.category === category;
    });

    setProducts(updateItem);
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Stack>
      <Menu filterItem={filterItem} product={product} setItem={setProducts} />
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col key={index} sm={6} md={6} lg={3}>
            <Card
              className="text-center gap-3 p-3 mt-3"
              style={{ cursor: "pointer" }}
            >
              <div className="justify-content-center align-center">
                <Card.Img
                  src={product.image01}
                  alt=""
                  className={styles.image}
                />
              </div>
              <Card.Title className={styles.title}>{product.title}</Card.Title>
              <Row className="align-center justify-content-between">
                <Col>
                  <Card.Text className="mb-2 text-muted red ">
                    {product.price}$
                  </Card.Text>
                </Col>
                <Col>
                  <Button
                    style={{ fontSize: "12px" }}
                    variant="danger"
                    onClick={() => handleAddToCart(product)}
                  >
                    Added to cart
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Stack>
  );
};

export default ProductFood;
