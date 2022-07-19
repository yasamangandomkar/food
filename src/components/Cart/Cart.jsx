import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../features/cartSlice";
import styles from "./style.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);
  const toggleCart = () => {
    dispatch(toggle());
  };
  return (
    <div className={styles.cart}>
      <AiOutlineClose className={styles.close} onClick={toggleCart} />
      <div className="cartItem">
        {products.length === 0 ? (
          <h6 className="mt-9 text-center">no item added to cart</h6>
        ) : (
          products.map((item, index) => <CartItem key={index} item={item} />)
        )}
      </div>
      <div className={styles.cartBottom}>
        <h6>
          Subtotal amount :<span className="red">$1234</span>
        </h6>
        <button>
          <Link to="/checkout">checkout</Link>
        </button>
      </div>
      {/* <div className={styles.overlay}></div> */}
    </div>
  );
};

export default Cart;
