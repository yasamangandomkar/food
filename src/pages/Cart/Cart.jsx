import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CarTr from "./CarTr";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(cartItems);
  return (
    <section className={styles.cart}>
      <Row>
        <Col className="h-full">
          {cartItems.length === 0 ? (
            <h5>cart is empty</h5>
          ) : (
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CarTr item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          )}
          <div className="mt-4">
            <h6>
              Subtotal: $<span className="cart__subtotal">{totalAmount}</span>
            </h6>
            <p>Taxes and shipping will calculate at checkout</p>
            <div className={styles.button}>
              <Button variant="danger" className=" m-4">
                <Link to="/foods">Continue Shopping</Link>
              </Button>
              <Button className="mx-4 " variant="danger">
                <Link to="/checkout">Proceed to checkout</Link>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Cart;
