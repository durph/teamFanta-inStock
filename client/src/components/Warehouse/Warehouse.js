import React, { Component } from "react";
import "./Warehouse.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import Axios from "axios";
import Arrow from "../../assets/Icons/SVG/Icon-arrow-right.svg";
import WarehouseAdder from "../WarehouseAdder/WarehouseAdder.js";
import WarehouseItem from "../WarehouseItem/WarehouseItem";

class Warehouse extends Component {
  state = {
    warehouse: [
      {
        address: {},
        contact: {}
      }
    ],
    isModal: false
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/warehouse/")
      .then(response => {
        console.log(response.data);
        this.setState({ warehouse: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addWarehouseItem = () => {
    this.setState({
      isModal: !this.state.isModal
    });
  };

  submitNewWarehouse = e => {
    e.preventDefault();
    console.log(e.target.description.value);
    Axios.post(`http://localhost:8080/warehouse/`, {
      name: e.target.name,
      id: e.target.id,
      address: e.target.address,
      contact: e.target.contact,
      inventoryCategories: e.target.inventoryCategories
    });
  };

  removeModal = () => {
    this.setState({
      isModal: false
    });
  };

  addWarehouse = e => {
    console.log(e.target);
    this.setState({
      isModal: !this.state.isModal
    })
  };
  render() {
    return (
      <section className={!this.state.isModal ? "warehouse" : "warehouse--no-scroll"}>
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
        {this.state.warehouse.map((warehouse, i) => (
          <WarehouseItem key={i} warehouse={warehouse} />
        ))}

        <div className="warehouse__add-item">
          <img
            src={plusImg}
            alt="add item plus"
            className="warehouse__add-item-img"
            onClick={this.addWarehouse}
          />
        </div>
        <WarehouseAdder
          isModal={this.state.isModal}
          removeModal={this.removeModal}
          submitNewWarehouse={this.submitNewWarehouse}
        />
      </section>
    );
  }
}

export default Warehouse;
