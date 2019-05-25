import React, { Component } from "react";
import { Link } from "react-router-dom";
import kebabMenu from "../../assets/Icons/SVG/Icon-kebab-default.svg";

const InventoryItem = ({
  item: { id, name, description, quantity, lastOrdered, location, isInStock }
}) => {
  return (
    <Link className="inventory__list-link" to={id}>
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
                {name}
              </li>
              <li className="inventory__list-entry-item-description">
                {description}
              </li>
              <li className="inventory__list-entry-heading">last ordered</li>
              <li className="inventory__list-entry-item">{lastOrdered}</li>
              <li className="inventory__list-entry-heading">location</li>
              <li className="inventory__list-entry-item">{location}</li>
              <li className="inventory__list-entry-heading">quantity</li>
              <li className="inventory__list-entry-item">{quantity}</li>
              <li className="inventory__list-entry-heading">status</li>
              <li className="inventory__list-entry-item">{isInStock === true ? 'In Stock' : 'Out of Stock'}</li>
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
