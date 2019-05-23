import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Inventory.scss";
// import InventoryItem from "../InventoryItem/InventoryItem";

class Inventory extends Component {
  state = {
    inventory: [{}]
  };

  getWarehouseData() {
    Axios.get("http://localhost:8080/inventory")
      .then(res => {
        this.setState({
          inventory: this.res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getWarehouseData();
  }

  render() {
    //testing routes
    return (
      <section className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__header-heading">Inventory</h1>
          <input
            type="text"
            className="inventory__header-search"
            placeholder="search"
          />
          <ul className="inventory__header-list">
            <li className="inventory__header-list-heading">item</li>
            <li className="inventory__header-list-heading">last ordered</li>
            <li className="inventory__header-list-heading">location</li>
            <li className="inventory__header-list-heading">quantity</li>
            <li className="inventory__header-list-heading">status</li>
          </ul>
        </div>

        <div className="inventory__list-container">
          {/* {this.state.inventory.map( (item, i) => <InventoryItem key={i} item={item} />)} */}
          <Link className="inventory__list-link" to="id">
            <ul className="inventory__list-entry">
              <li className="inventory__list-entry-heading">item</li>
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
            </ul>
          </Link>
        </div>
      </section>
    );
  }
}

export default Inventory;
