import React, { Component } from "react";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";
import Axios from 'axios';
class InventoryList extends Component {
  state = {
    idToShow:"",
    classNameToShow:""
  };

  removeHandler = (e) => {
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

  showDropDown = (e) => {
    this.setState({idToShow:e.target.id});
    this.setState({classNameToShow:e.target.className});
  } 

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
              showDropDown = {this.showDropDown}
              idToShow = {this.state.idToShow}
              classNameToShow={this.state.classNameToShow}
              clickImg = {this.props.clickImg}
            />
          ))}
        </div>
      </>
    );
  }
}

export default InventoryList;
