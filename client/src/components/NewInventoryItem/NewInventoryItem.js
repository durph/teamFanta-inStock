import React, { Component } from "react";
import Axios from "axios";
import "./NewInventoryItem.scss";

class NewInventoryItem extends Component {

  render() {
    return (
      <div className={this.props.isModal ? "inventory-modal inventory-modal--active" : "inventory-modal"}>
            <div className="inventory-modal-container">
            <div className="inventory-modal__header">
              <h1 className="inventory-modal__header-title">Create New</h1>
            </div>
              <form className="inventory-modal__form">
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <input type="text" className="inventory-modal__form-input"/>
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <input type="text" className="inventory-modal__form-input"/>
                </div>
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <input type="text" className="inventory-modal__form-input"/>
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <input type="text" className="inventory-modal__form-input"/>
                </div>
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <input type="text" className="inventory-modal__form-input"/>
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <input type="text" className="inventory-modal__form-input"/>
                </div>
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="" className="inventory-modal__form-label"></label>
                  <textarea type="text" className="inventory-modal__form-textarea"/>
                </div>
              </form>
            </div>
          </div>

    )

  }

}




export default NewInventoryItem;