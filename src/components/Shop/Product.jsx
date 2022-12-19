import React from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.product}>
      <h4>{props.name}</h4>
      <h3>{props.title}</h3>
      <h2>{price}</h2>
      <input id='amount' type='number' min='1' max='5' step='1' defaultValue='1'/>
      <button>+ Add</button>
    </div>
  );
};

export default Product;
