import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHomeAlt } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Shop1ya</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHomeAlt} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth">Account</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
