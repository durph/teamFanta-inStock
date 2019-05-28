import React, { Component } from "react";
import Axios from "axios";
import "./Inventory.scss";
import InventoryList from "../InventoryList/InventoryList";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";

class Inventory extends Component {
  state = {
    inventory: [{}]
  };

  getInventoryData() {
    Axios.get(`http://localhost:8080/inventory/`)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/errors"); //Navigates to error page on error
      });
  }

  componentDidMount() {
    this.getInventoryData();
  }

  render() {
    return (
      <section className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__header-heading">Inventory</h1>
          <input
            type="text"
            className="inventory__header-search"
            placeholder="Search.."
          />
        </div>
        <InventoryList inventory={this.state.inventory} />
        <div className="inventory__add-item">
            <img
              src={plusImg}
              alt="add item plus"
              className="inventory__add-item-img"
              onClick={this.addInventoryItem}
            />
          </div>
      </section>
    );
  }
}

export default Inventory;
