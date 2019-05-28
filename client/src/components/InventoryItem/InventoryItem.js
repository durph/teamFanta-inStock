import React from "react";
import { Link } from "react-router-dom";
import './InventoryItem.scss';
import kebabMenu from "../../assets/Icons/SVG/Icon-kebab-default.svg";

const InventoryItem = ({
  item: { id, name, description, quantity, lastOrdered, location, isInstock },removeHandler}
  ) => {
  return (
    <div className="inventory__list-inner-container">
      <Link className="inventory__list-link" to={`/inventory/${id || "id"}`}>
        <ul className="inventory__list-entry">
          <li className="inventory__list-entry-heading">item</li>
          <li className="inventory__list-entry-item-product">{name}</li>
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
          <li className="inventory__list-entry-item">
            {isInstock === true ? "In Stock" : "Out of Stock"}
          </li>
        </ul>
      </Link>
      <span className="inventory__list-entry-item-kebab">
        <img
          src={kebabMenu}
          className="inventory__list-entry-item-kebab-img"
          alt="remove item option"
          id={id}
        />
        <button className="inventory__list-entry-item-kebab-delete" onClick={removeHandler} id={id}>Remove</button>
      </span>
    </div>
  );
};

export default InventoryItem;
