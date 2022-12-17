import React from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={classes.card}>
      <div className="title">
        <h4>{props.name}</h4>
      </div>
      <div className="desc">
        <h3>{props.title}</h3>
      </div>
      <div className="controls">
        <h2>{props.price}</h2>
        <button>BUY</button>
      </div>
    </div>
  );
};

export default Product;
