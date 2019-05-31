import React from "react";
import { Link } from "react-router-dom";
import "./WarehouseItem.scss";
import Arrow from "../../assets/Icons/SVG/Icon-arrow-right.svg";

const WarehouseItem = ({
  warehouse: { id, address, contact, name, inventoryCategories }
}) => {
  return (
    <Link className="warehouse__list-link" to={`/warehouse/${id || "id"}`}>
      <div className="warehouse__info-container">
        <div className="warehouse__listing">
          <div className="warehouse__listing-nameandaddress">
            <div className="warehouse__listing-nameandaddress-name">{name}</div>
            <div className="warehouse__listing-nameandaddress-address">
              {address.street}
            </div>
          </div>
          <div className="warehouse__listing-info">
            <div className="warehouse__listing-info-nameandadd">
              <div className="warehouse__listing-info-nameandadd-name">
                {contact.name}
              </div>
              <div className="warehouse__listing-info-nameandadd-position">
                {contact.title}
              </div>
            </div>
            <div className="warehouse__listing-info-contact">
              <div className="warehouse__listing-info-contact-phone">
                {contact.phone}
              </div>
              <div className="warehouse__listing-info-contact-email">
                {contact.email}
              </div>
            </div>
            <div className="warehouse__listing-info-product">
              <div className="warehouse__listing-info-product-items">
                {inventoryCategories}
              </div>
            </div>
          </div>
        </div>
        <div className="warehouse__listing-info-product-arrow">
          <img src={Arrow} />
        </div>
      </div>
    </Link>
  );
};

export default WarehouseItem;
