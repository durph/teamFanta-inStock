import React, { Component } from "react";
import Axios from "axios";
import "./Inventory.scss";
import InventoryList from "../InventoryList/InventoryList";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import InventoryItem from "../InventoryItem/InventoryItem";
import { NONAME } from "dns";

class Inventory extends Component {
  state = {
    inventory: [{}],
    dropDown: true

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

  drop = (e) => {
      if(e.target.className!=="inventory__list-entry-item-kebab-img"){
        console.log("not here")
        console.log(document.getElementsByClassName("inventory__list-entry-item-kebab-delete"));
        console.log(document.getElementsByClassName("inventory__list-entry-item-kebab-delete").style);
      }
      else{
      console.log('im here');
      let target = e.target.parentNode.firstChild.nextSibling;
      // console.log(this.inv.contains(target));
      let display = target.style.display;
      console.log(target);
      console.log(display);
      if(!display){
        display = 'block';
        target.style.display = "block";
      }
      console.log(display);
      if(display === "none" || !display){
        target.style.display = "block";
      }
      else{
        target.style.display = "none";
      }
    }
  }


  addInventoryItem = e => {
    console.log(e.target)
  };

  render() {
    return (
      <section onClick={this.drop} ref={(inv)=>{return this.inv = inv}} className="inventory">
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
