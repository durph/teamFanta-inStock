import React, { Component } from "react";
import "./Warehouse.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import Axios from "axios";
<<<<<<< HEAD
import Arrow from "../../assets/Icons/SVG/Icon-arrow-right.svg"
=======
import WarehouseItem from "../WarehouseItem/WarehouseItem";
>>>>>>> 3492dafcda35cec85b58d0ef3e4e73da204ae9e6

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
        console.log(response.data);
        this.setState({ warehouses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addWarehouse = e => {
    console.log(e.target);
  };
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
