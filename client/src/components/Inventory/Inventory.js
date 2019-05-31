import React, { Component } from "react";
import Axios from "axios";
import "./Inventory.scss";
import InventoryList from "../InventoryList/InventoryList";
import NewInventoryItem from "../NewInventoryItem/NewInventoryItem";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";


class Inventory extends Component {
  state = {
    inventory: [{}],
    isModal: false,
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

  addInventoryItem = () => {
    this.setState({
      isModal: !this.state.isModal
    })
  };

  removeModal = () => {
    this.setState({
      isModal: false
    })
  }

  submitNewItem = (e) => {
    e.preventDefault();
    console.log(e.target.description.value)
    Axios.post(`http://localhost:8080/inventory/`, {
      name: e.target.name,
      description: e.target.description || 'no description',
      quantity: e.target.quantity,
      lastOrdered: e.target.lastOrdered,
      location: e.target.location,
      isInstock: e.target.checked,
      categories: "Generic, Home, Supplies",
      warehouseId: 'W0',
    })
        .then(res => {
          console.log(res.data)
          this.getInventoryData()
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    return (
      <section className={!this.state.isModal ? "inventory" : "inventory inventory--no-scroll"}>
        <div className="inventory__header">
          <h1 className="inventory__header-heading">Inventory</h1>
          <input
            type="text"
            className="inventory__header-search"
            placeholder="Search.."
          />
        </div>
        <InventoryList inventory={this.state.inventory} />
        <div onClick={this.addInventoryItem} className={!this.state.isModal ? "inventory__add-item" : "inventory__add-item inventory__add-item--hide"} >
          
          <img
            src={plusImg}
            alt="add item plus"
            className="inventory__add-item-img"
          />
        </div>
        <NewInventoryItem isModal={this.state.isModal} removeModal={this.removeModal} submitNewItem={this.submitNewItem} />
      </section>
    );
  }
}

export default Inventory;
