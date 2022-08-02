import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../features/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./style.module.css";
const CarTr = ({ item }) => {
  const { id, image01, title, price, quantity } = item;
  const dispatch = useDispatch();
  const deleteItems = () => {
    dispatch(deleteItem(id));
  };
  return (
    <tr className={styles.tableBody}>
      <td>
        <img src={image01} alt="" width={50} />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}px</td>
      <td>
        <AiOutlineDelete
          onClick={deleteItems}
          cursor="pointer"
          color="red"
          size={25}
        />
      </td>
    </tr>
  );
};

export default CarTr;
