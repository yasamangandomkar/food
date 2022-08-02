import { Stack, Row, Col } from "react-bootstrap";
import Menu from "../Menu/Menu";
import product from "../../assets/fake-data/Products";
import { useState } from "react";
import ProductCard from "./ProductCard";
const ProductFood = () => {
  const [products, setProducts] = useState(product);
  const filterItem = (category) => {
    const updateItem = product.filter((item) => {
      return item.category === category;
    });

    setProducts(updateItem);
  };

  return (
    <Stack>
      <Menu filterItem={filterItem} product={product} setItem={setProducts} />
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col key={index} xs={6} md={6} lg={3} style={{ marginTop: "1rem" }}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Stack>
  );
};

export default ProductFood;
