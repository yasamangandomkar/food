import { AiOutlineClose } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
import productImg from "../../assets/images/product_01.1.jpg";
import styles from "./style.module.css";
const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  return (
    <div className={styles.cartItems}>
      <img src={image01} alt="" height={50} width={50} />
      <div className={styles.items}>
        <div className={styles.cartProduct}>
          <div>
            <h6>{title}</h6>
            <p className={styles.title}>
              {quantity}x <span>{totalPrice}</span>
            </p>
          </div>
          <div className={styles.cartBtn}>
            <span>
              <IoIosRemove />
            </span>
            <span className={styles.quantity}>{quantity}</span>
            <span>
              <GrFormAdd />
            </span>{" "}
          </div>
        </div>

        <AiOutlineClose />
      </div>
    </div>
  );
};

export default CartItem;
