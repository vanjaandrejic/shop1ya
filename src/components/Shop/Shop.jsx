import React from "react";
import ProductList from "./ProductList";
import classes from './Shop.module.css';
import Home from '../Layout/Home';

const Shop = () => {
  return (
    <div className={classes.container}>
      <Home />
      <ProductList />
    </div>
  );
};

export default Shop;
