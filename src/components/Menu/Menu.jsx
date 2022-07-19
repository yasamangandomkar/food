import React from "react";
import Burger from "../../assets/images/hamburger.png";
import Pizza from "../../assets/images/pizza.png";
import Bread from "../../assets/images/fried-potatoes.png";
import styles from "./style.module.css";
const Menu = ({ filterItem, setItem, product }) => {
  const menuItems = [
    { category: "Bread", image: Bread },
    { category: "Pizza", image: Pizza },
    { category: "Burger", image: Burger },
  ];

  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={() => setItem(product)}>
        All
      </button>
      {menuItems.map((menu, index) => (
        <button
          className={styles.menuButton}
          key={index}
          onClick={() => filterItem(menu.category)}
        >
          (<img className={styles.image} src={menu.image} alt="" />)
          <span> {menu.category}</span>
        </button>
      ))}
    </div>
  );
};

export default Menu;
