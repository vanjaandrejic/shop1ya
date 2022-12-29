import React from "react";
import { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes.cartitems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  return (
    <div className={classes.main}>
      {cartItems}
      <div className={classes.total}>
        <span>TOTAL AMOUT</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        {hasItems ? <button>Order</button> : <p>NO ITEMS IN CART</p>}
      </div>
    </div>
  );
};

export default Cart;
