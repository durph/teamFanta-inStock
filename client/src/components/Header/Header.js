import React, { Component } from "react";
import instock from "../../assets/Logo/Logo-instock.svg";
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <>
        <header className="header__container">
          <div className="header__logo-container">
            <img className="header__logo" src={instock} />
        </div>
        <ul className="header__link-container">
            <li className="header__link">Inventory</li>
            <li className="header__link">Locations</li>
        </ul>
        </header>
      </>
    );
  }
}

export default Header;
