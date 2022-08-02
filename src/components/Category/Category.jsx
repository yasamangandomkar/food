import { Row, Stack, Col } from "react-bootstrap";
import category1 from "../../assets/images/category-01.png";
import category2 from "../../assets/images/category-02.png";
import category3 from "../../assets/images/category-03.png";
import category4 from "../../assets/images/category-04.png";
import styles from "./style.module.css";
const Category = () => {
  const images = [
    { image: category1, description: "Fast food" },
    { image: category2, description: "Pizza" },
    { image: category3, description: "Asian Food" },
    { image: category4, description: "Row Meat" },
  ];
  return (
    <Stack>
      <Row className="justify-content-center mt-20 ">
        {images.map((img, index) => (
          <Col key={index} xs={4} lg={2} className={styles.category}>
            <img className={styles.image} key={index} src={img.image} alt="" />
            <span className="m-2">{img.description}</span>
          </Col>
        ))}
      </Row>
    </Stack>
  );
};

export default Category;
