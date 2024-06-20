import React from "react";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/saveStocks"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              View Saved Stocks
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/viewSavedStocks"
              className={(navData) => (navData.isActive ? styles.active : "")}
            ></NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
