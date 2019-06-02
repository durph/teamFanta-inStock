import React, { Component } from "react";
import "./Warehouse.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import Axios from "axios";
import WarehouseItem from "../WarehouseItem/WarehouseItem";


class Warehouse extends Component {
  state = {
    warehouses: [
      {
        address: {},
        contact: {}
      }
    ]
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/warehouse/")
      .then(response => {
        this.setState({ warehouses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <section className="warehouse">
        <div className="warehouse__header">
          <div className="warehouse__header-heading"> Locations </div>
          <input
            type="text"
            className="warehouse__header-search"
            placeholder="Search.."
          />
        </div>

        <ul className="warehouse__headings">
          <li className="warehouse__headings-list">Warehouse</li>
          <li className="warehouse__headings-list">Contact</li>
          <li className="warehouse__headings-list">Contact Information</li>
          <li className="warehouse__headings-list">Categories</li>
        </ul>

        {this.state.warehouses.map((warehouse, i) => (
          <WarehouseItem key={i} warehouse={warehouse} />
        ))}

        <>
          <div className="warehouse__add-item">
            <img
              src={plusImg}
              alt="add item plus"
              className="warehouse__add-item-img"
              onClick={this.addWarehouse}
            />
          </div>
        </>
      </section>
    );
  }
}

export default Warehouse;
