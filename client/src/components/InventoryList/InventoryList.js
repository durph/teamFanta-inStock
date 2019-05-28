import React, { Component } from "react";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import Axios from 'axios';
class InventoryList extends Component {
  state = {
    delete:false
  };

  removeHandler = (e) => {
    const update = this.props.update;
    Axios.delete(`http://localhost:8080/inventory/delete/${e.target.id}`)
      .then((response=>{
        this.props.update();
      }))
      .catch(err=>{
        console.error.apply(err);
      })
  }

  addInventoryItem = e => {
    console.log(e.target);
  };

  render() {
    return (
      <>
        <div className="inventory__header">
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
          {this.props.inventory.map((item, i) => (
            <InventoryItem
              key={i}
              item={item}
              removeHandler={this.removeHandler}
            />
          ))}
        </div>
      </>
    );
  }
}

export default InventoryList;
