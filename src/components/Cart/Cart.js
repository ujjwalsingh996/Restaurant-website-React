import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>

      {cartCtx.items.map((item) => (
        <li className={classes.meal}>
          <h4>Dish: {item.name}, Price: {item.price}, Quantity: {item.quantity}</h4>
        </li>
      ))}
    </ul>
  );
  let amount = 0;
  cartCtx.items.forEach(
    (item) => (amount = Math.round(amount + Number(item.price)))
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
