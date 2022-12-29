import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import CartButton from "./CartButton";

const Navigation = () => {
  return (
    <header className={`${classes.header} + ${classes.navactive}`}>
      <NavLink to="/" className={classes.logo}>
        SHOP1YA
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon icon={faHomeAlt} size="lg" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon icon={faUser} size="lg" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <CartButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
