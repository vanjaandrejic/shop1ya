import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return <div className={classes.container}>
    <div className={classes.text}>
        <h1>Welcome to the best shop you ever seen.</h1>
        <h4>This shop can change your buisness.
             This is best shop you can find to increase your income.</h4>
             <button>Shop Now</button>
    </div>
    <div className={classes.img}></div>
  </div>;
};

export default Home;
