import { Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Products from "../../assets/fake-data/Products";
import ProductCard from "../../components/ProductFood/ProductCard";
import { addToCart } from "../../features/cartSlice";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = Products.find((item) => item.id === id);
  const relatedProduct = Products.filter(
    (item) => item.category === product.category
  );

  const [previewImg, setPreviewImg] = useState(product.image01);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    setPreviewImg(product.image01);
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Row className="my-5 justify-content-center align-items-center">
      <Col
        xs={12}
        md={2}
        lg={2}
        style={{ cursor: "pointer" }}
        className={styles.menu}
      >
        <div onClick={() => setPreviewImg(product.image01)}>
          <img src={product.image01} alt="" width={100} />
        </div>
        <div onClick={() => setPreviewImg(product.image02)}>
          <img src={product.image02} alt="" width={100} />
        </div>
        <div onClick={() => setPreviewImg(product.image03)}>
          <img alt="" width={100} src={product.image03} />
        </div>
      </Col>
      <Col xs={12} md={4} lg={4} className={styles.image}>
        <img src={previewImg} alt="" />
      </Col>
      <Col lg={6} md={6} className={styles.product}>
        <div>
          <h2>{product.title}</h2>
          <p className="red">
            price:<span className="p-2">${product.price}</span>
          </p>
          <p className="mb-4">
            Category:<span className={styles.category}>{product.category}</span>
          </p>
          <Button variant="danger" onClick={handleAddToCart}>
            added to cart
          </Button>
        </div>
      </Col>
      <Col lg={12} className={styles.tabs}>
        <div className={styles.tab}>
          <h6
            className={` ${tab === "desc" ? "red" : ""}`}
            onClick={() => setTab("desc")}
          >
            Description
          </h6>
          <h6
            className={` ${tab === "rev" ? "red" : ""}`}
            onClick={() => setTab("rev")}
          >
            Review
          </h6>
        </div>
        {tab === "desc" ? (
          <div className={styles.tabContent}>
            <p>{product.desc}</p>
          </div>
        ) : (
          <div className={styles.tabContent}>
            {" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              quas eos illum dolorem magni inventore reprehenderit, maiores
              provident suscipit molestiae eligendi tempora sint nobis,
              laboriosam a quaerat at ut voluptate. Magnam veniam, vero
              reiciendis, deserunt architecto accusamus quos error quaerat vitae
              molestias dolores numquam expedita? Ut libero expedita tempore
              minus, id quae molestias sunt omnis odio quisquam perferendis
              maiores quidem. Magnam consequuntur neque aperiam accusantium eum
              architecto, aliquam, suscipit placeat tenetur adipisci, illo
              eligendi facilis. Fugiat autem accusantium pariatur ipsa delectus
              ducimus, id quo doloribus voluptas aliquid cum, neque odit!
            </p>
          </div>
        )}
        <Col lg={12}>
          <h2 className="my-5">you might also like</h2>
        </Col>

        <Row>
          {relatedProduct.map((item, index) => (
            <Col xs={6} md={6} lg={3}>
              <ProductCard product={item} key={index} />
            </Col>
          ))}
        </Row>

        <div className={styles.container}>
          <form className={styles.form}>
            <div>
              <input type="text" placeholder="enter your name" required />
            </div>
            <div>
              <input type="text" placeholder="enter your password" required />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="enter your email"
                rows={6}
                required
              />
            </div>
            <Button type="submit" variant="danger">
              send
            </Button>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default FoodDetails;
