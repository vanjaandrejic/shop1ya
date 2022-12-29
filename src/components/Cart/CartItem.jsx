import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = props.price.toFixed(2);
  return (
    <div className={classes.container}>
      <h1 className={classes.name}>{props.name}</h1>
      <div className={classes.summary}>
        <span className={classes.amount}>x{props.amount}</span>
        <span className={classes.price}> ${price} </span>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
