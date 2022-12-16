import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Shop1ya</div>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
