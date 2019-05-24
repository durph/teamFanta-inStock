import React, { Component } from "react";
import { Link } from "react-router-dom";
import kebabMenu from "../../assets/Icons/SVG/Icon-kebab-default.svg";

const InventoryItem = ({
  item: { id, name, description, quantity, lastOrdered, location, isInStock }
}) => {
  return (
    <Link className="inventory__list-link" to="id">
            <ul className="inventory__list-entry">
              <li className="inventory__list-entry-heading inventory__list-entry-heading--with-kebab">
                item
                <img
                  src={kebabMenu}
                  className="inventory__list-entry-heading-kebab"
                  alt="remove item option"
                />
              </li>
              <li className="inventory__list-entry-item-product">
                Product Name here
              </li>
              <li className="inventory__list-entry-item-description">
                Here is a very brief...
              </li>
              <li className="inventory__list-entry-heading">last ordered</li>
              <li className="inventory__list-entry-item">05/24/2018</li>
              <li className="inventory__list-entry-heading">location</li>
              <li className="inventory__list-entry-item">Toronto, CAN</li>
              <li className="inventory__list-entry-heading">quantity</li>
              <li className="inventory__list-entry-item">12,000</li>
              <li className="inventory__list-entry-heading">status</li>
              <li className="inventory__list-entry-item">In Stock</li>
              <li className="inventory__list-entry-item-kebab">
                <img
                  src={kebabMenu}
                  className="inventory__list-entry-item-kebab-img"
                  alt="remove item option"
                />
              </li>
            </ul>
          </Link>
  );
};

export default InventoryItem;
