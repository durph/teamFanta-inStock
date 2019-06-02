import React, { Component } from "react";
import Axios from "axios";
import shortid from "shortid";
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
    let isInstock = e.target.status.value === 'on' ? true : false
    e.preventDefault();
    Axios.post(`http://localhost:8080/inventory/`, {
      id: shortid.generate(),
      name: e.target.name.value,
      description: e.target.description.value || 'no description',
      quantity: e.target.quantity.value,
      lastOrdered: e.target.lastOrdered.value,
      location: e.target.location.value,
      isInstock: isInstock,
      categories: "Generic, Home, Supplies",
      warehouseId: 'W0'
    })
        .then(res => {
          this.getInventoryData()
        })
        .catch(err => {
          console.log(err);
          alert('No empty fields allowed. Please resubmit this form with all fields filled out unless otherwise indicated.')
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
