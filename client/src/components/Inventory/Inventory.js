import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Inventory.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
// import kebabMenu from "../../assets/Icons/SVG/Icon-kebab-default.svg";
import InventoryItem from "../InventoryItem/InventoryItem";

class Inventory extends Component {
  state = {
    inventory: [{}]
  };

  getInventoryData(warehouseId) {
    let id = warehouseId ? warehouseId : "";
    Axios.get(`http://localhost:8080/inventory/${id}`)
      .then(res => {
        if (id) {
          this.setState({
            inventory: [this.res.data]
          });
        } else {
          this.setState({
            inventory: this.res.data
          });
        }
      })
      .catch(err => {
        console.log(err);
        // this.props.history.push('/errors')
      });
  }

  componentDidMount() {
    if (this.props.match.params.warehouseId) {
      this.getInventoryData(this.props.match.params.warehouseId);
    } else {
      this.getInventoryData();
    }
  }

  showRemoveBtn = e => {
    console.log(e.target);
  };

  addInventoryItem = (e) => {

  }

  render() {
    //testing routes
    return (
      <section className="inventory">
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
          {this.state.inventory.map( (item, i) => <InventoryItem key={i} item={item} showRemoveBtn={this.showRemoveBtn} />)}
          {/* <Link className="inventory__list-link" to="id">
            <ul className="inventory__list-entry">
              <li className="inventory__list-entry-heading inventory__list-entry-heading--with-kebab">
                item
                <img
                  src={kebabMenu}
                  className="inventory__list-entry-heading-kebab"
                  alt="remove item option"
                />
              </li>
              <li className="inventory__list-entry-item-product">
                Product Name here
              </li>
              <li className="inventory__list-entry-item-description">
                Here is a very brief...
              </li>
              <li className="inventory__list-entry-heading">last ordered</li>
              <li className="inventory__list-entry-item">05/24/2018</li>
              <li className="inventory__list-entry-heading">location</li>
              <li className="inventory__list-entry-item">Toronto, CAN</li>
              <li className="inventory__list-entry-heading">quantity</li>
              <li className="inventory__list-entry-item">12,000</li>
              <li className="inventory__list-entry-heading">status</li>
              <li className="inventory__list-entry-item">In Stock</li>
              <li className="inventory__list-entry-item-kebab">
                <img
                  src={kebabMenu}
                  className="inventory__list-entry-item-kebab-img"
                  alt="remove item option"
                />
              </li>
            </ul>
          </Link> */}
          <div className="inventory__add-item">
            <img
              src={plusImg}
              alt="add item plus"
              className="inventory__add-item-img"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Inventory;
