import React, { Component } from "react";
import back_arrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import "./WarehouseDetails.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import InventoryList from "../InventoryList/InventoryList";

class WarehouseDetails extends Component {
  state = {
    warehouse: {
      address: {},
      contact: {}
    },
    inventory: [],
    clickImg:true,
    update:false
  };

  clickOn = (e) => {
    if(!e.target.className.includes("inventory__list-entry-item-kebab-img")){
      this.setState({clickImg:false});
    }
    else{
      this.setState({clickImg:true});
    }
  }

  update = () => {
    axios
      .get(
        `http://localhost:8080/warehouse/${this.props.match.params.warehouseId.toUpperCase()}`
      )
      .then(res => {
        this.setState({
          warehouse: res.data.warehouse,
          inventory: res.data.warehouseInventory
        });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/errors");
      });
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/warehouse/${this.props.match.params.warehouseId.toUpperCase()}`
      )
      .then(res => {
        this.setState({
          warehouse: res.data.warehouse,
          inventory: res.data.warehouseInventory
        });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/errors");
      });
  }

  render() {
    const { name, address, contact } = this.state.warehouse;
    return (
      <div onClick={this.clickOn}>
        <main  className="warehouse-details">
          <div className="warehouse-details__header">
            <Link to="/warehouse" className="warehouse-details__header-back">
              <img
                src={back_arrow}
                alt="back arrow"
                className="warehouse-details__header-back-img"
              />
            </Link>
            <h1 className="warehouse-details__header-heading">{name}</h1>
          </div>
          <section className="warehouse-details__info">
            <ul className="warehouse-details__info-list">
              <li className="warehouse-details__info-list-label">Address</li>
              <li className="warehouse-details__info-list-item">
                {address.street}
              </li>
              <li className="warehouse-details__info-list-item">
                {address.suiteNum}
              </li>
              <li className="warehouse-details__info-list-item">
                {address.city}, {address.province}
              </li>
              <li className="warehouse-details__info-list-item">
                {address.postal}
              </li>
            </ul>
            <ul className="warehouse-details__info-list">
              <li className="warehouse-details__info-list-label">Contact</li>
              <li className="warehouse-details__info-list-item">
                {contact.name}
              </li>
              <li className="warehouse-details__info-list-item">
                {contact.title}
              </li>
              <li className="warehouse-details__info-list-item">
                {contact.phone}
              </li>
              <li className="warehouse-details__info-list-item">
                {contact.email}
              </li>
            </ul>
          </section>
        </main>
        <section className="warehouse-details__inventory-list-container">
          <InventoryList inventory={this.state.inventory} clickImg={this.state.clickImg} update={this.update} />
        </section>
      </div>
    );
  }
}

export default WarehouseDetails;
