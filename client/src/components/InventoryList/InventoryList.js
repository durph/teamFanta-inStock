import React, { Component } from "react";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

class InventoryList extends Component {
  state = {
    dropDown: false
  };

  drop = () => {
    if (this.state.dropDown) this.setState({ dropDown: false });
    else this.setState({ dropDown: true });
  };

  showRemoveBtn = e => {
    if (this.state.dropDown)
      return (
        <button className="inventory__list-entry-item-kebab-delete">
          Delete
        </button>
      );
  };

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
              showRemoveBtn={this.showRemoveBtn}
              drop={this.drop}
            />
          ))}
        </div>
      </>
    );
  }
}

export default InventoryList;
