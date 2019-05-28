import React, { Component } from "react";
import Axios from "axios";
import "./Inventory.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import InventoryItem from "../InventoryItem/InventoryItem";
import { NONAME } from "dns";

class Inventory extends Component {
  state = {
    inventory: [{}],
    dropDown: true
  };

  getInventoryData(inventoryId) {
    let id = inventoryId ? inventoryId : "";
    Axios.get(`http://localhost:8080/inventory/${id}`)
      .then(res => {
        if (id) {
          this.setState({
            inventory: [res.data]
          });
        } else {
          this.setState({
            inventory: res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/errors"); //Navigates to error page on error
      });
  }

  componentDidMount() {
    if (this.props.match.params.inventoryId) {
      this.getInventoryData(this.props.match.params.inventoryId);
    } else if (this.props.match.params.warehouseId) {
      this.getInventoryData(this.props.match.params.warehouseId);
    } else {
      this.getInventoryData();
    }
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
          <ul className="inventory__header-list">
            <li className="inventory__header-list-heading inventory__header-list-heading--wide">
              item
            </li>
            <li className="inventory__header-list-heading">last ordered</li>
            <li className="inventory__header-list-heading">location</li>
            <li className="inventory__header-list-heading">quantity</li>
            <li className="inventory__header-list-heading">status</li>
          </ul>
        </div>

        <div className="inventory__list-container">
          {this.state.inventory.map((item, i) => (
            <InventoryItem
              key={i}
              item={item}
              showRemoveBtn={this.showRemoveBtn}
              drop = {this.drop}
            />
          ))}
          <div className="inventory__add-item">
            <img
              src={plusImg}
              alt="add item plus"
              className="inventory__add-item-img"
              onClick={this.addInventoryItem}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Inventory;
