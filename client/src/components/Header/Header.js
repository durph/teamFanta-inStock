import React, { Component } from "react";
import instock from "../../assets/Logo/Logo-instock.svg";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header__container">
          <div className="header__logo-container">
            <Link to="/Warehouse">
              {" "}
              <img className="header__logo" src={instock} />{" "}
            </Link>
          </div>
          <ul className="header__link-container">
            <li className="header__link">
              <NavLink
                activeClassName="header__container-navlink--active"
                className="header__container-navlink"
                to="/Inventory"
              >
                Inventory
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink
                activeClassName="header__container-navlink--active"
                className="header__container-navlink"
                to="/Warehouse"
              >
                Locations
              </NavLink>
            </li>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
