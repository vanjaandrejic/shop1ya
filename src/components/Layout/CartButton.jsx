import { useContext, useState } from "react";
import React from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartButton = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon icon={faCartShopping} size="lg" />
      <span className={classes.badge}>{numberOfCartItems}</span>
    </div>
  );
};

export default CartButton;
