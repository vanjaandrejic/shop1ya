import React from "react";
import { useState } from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHomeAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const changeClass = () => {
    console.log(window.scrollY);
  };
  changeClass();

  return (
    <header className={`${classes.header} + ${classes.navactive}`}>
      <NavLink to="/" className={classes.logo}>
        Shop1ya
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
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
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
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
