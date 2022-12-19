import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cartitems}>
      {[
        {
          id: 1,
          name: "Product 1",
          title: "This is product 1 title",
          price: 10.0,
        },
        {
          id: 3,
          name: "Product 3",
          title: "This is product 3 title",
          price: 12.0,
        },
        {
          id: 4,
          name: "Product 4",
          title: "This is product 4 title",
          price: 13.0,
        },
        {
          id: 6,
          name: "Product 6",
          title: "This is product 6 title",
          price: 15.0,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div className={classes.main}>
      {cartItems}
      <div className={classes.total}>
        <span>TOTAL AMOUT</span>
        <span>36.52</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
