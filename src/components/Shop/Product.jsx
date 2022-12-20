import { React, useRef, useState, useContext } from "react";
import classes from "./Product.module.css";
import Button from "../Layout/Button";
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const AddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const addHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    AddToCartHandler(enteredAmountNumber);
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.product}>
      <h4>{props.name}</h4>
      <h3>{props.title}</h3>
      <h2>{price}</h2>
      <input
        ref={amountInputRef}
        id="amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <Button onClick={addHandler} text="+Add" />
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </div>
  );
};

export default Product;
