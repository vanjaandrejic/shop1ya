import React from "react";
import classes from "./Home.module.css";
import cartImg from "./../../assets/green-shopping-cart-10909.svg";
import Button from "./Button";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>WELCOME TO BEST SHOP EVER SEEN!</h1>
        <h4>
          This shop can change your buisness. This is best shop you can find to
          increase your income.
        </h4>
        <Button text="Shop Now" />
      </div>
      <div className={classes.img}>
        <img src={cartImg} />
      </div>
    </div>
  );
};

export default Home;
