import { AiOutlineClose } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart, deleteItem, removeItem } from "../../features/cartSlice";

import styles from "./style.module.css";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrese = () => {
    dispatch(removeItem(id));
  };
  const handleDelete = () => {
    dispatch(deleteItem(id));
  };
  const handleIncrease = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const { id, title, price, image01, quantity, totalPrice } = item;
  return (
    <div className={styles.cartItems}>
      <img src={image01} alt="" height={50} width={50} />
      <div className={styles.items}>
        <div className={styles.cartProduct}>
          <div>
            <h6>{title}</h6>
            <p className={styles.title}>
              {quantity}x <span>{totalPrice}$</span>
            </p>
          </div>
          <div className={styles.cartBtn}>
            <span>
              <IoIosRemove onClick={handleDecrese} />
            </span>
            <span className={styles.quantity}>{quantity}</span>
            <span>
              <GrFormAdd onClick={handleIncrease} />
            </span>{" "}
          </div>
        </div>

        <AiOutlineClose onClick={handleDelete} />
      </div>
    </div>
  );
};

export default CartItem;
