import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { Button, Card } from "react-bootstrap";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Card
      className="text-center gap-4 p-3 mt-3"
      style={{ cursor: "pointer", height: "100%" }}
    >
      <Link to={`/foods/${product.id}`}>
        <div className="justify-content-center align-center">
          <img src={product.image01} alt="" className={styles.image} />
        </div>
        <Card.Title className={styles.title}>{product.title}</Card.Title>
      </Link>

      <div className="align-center justify-content-between">
        <Card.Text className="mb-2 text-muted red ">{product.price}$</Card.Text>
        <Button
          style={{ fontSize: "12px" }}
          variant="danger"
          onClick={() => handleAddToCart(product)}
        >
          Added to cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
