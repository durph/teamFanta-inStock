import React, { Component } from "react";
import "./NewInventoryItem.scss";
import Switch from "react-switch";
class NewInventoryItem extends Component {
  state = {
    checked: true,
    productVal: '',
    inventoryVal: '',
    lastOrderedVal: new Date().toISOString().split('T')[0],
    cityVal: '',
    countryVal: 'Canada',
    quantityVal: '',
    descriptionVal: ''
  };

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  clickHandler = e => {
    if (e.target.contains(this.refs.modal)) {
      this.props.removeModal();
    } else {
      return;
    }
  };

  cancelHandler = () => {
    this.props.removeModal();
  };

  productChange = (e) => {
    this.setState({
      productVal: e.target.value
    })
  }

  countryChange = (e) => {
    this.setState({
      countryVal: e.target.value
    })
  }
  
  cityChange = (e) => {
    this.setState({
      cityVal: e.target.value
    })
  }
  
  quantityChange = (e) => {
    this.setState({
      quantityVal: e.target.value
    })
  }

  lastOrderedChange = (e) => {
    this.setState({
      lastOrderedVal: e.target.value
    })
  }

  descriptionChange = (e) => {
    this.setState({
      descriptionVal: e.target.value
    })
  }

  componentDidUpdate(pP, pS) {
    if (pP.isModal === false && this.props.isModal === true) {
      this.setState({
        checked: true,
        productVal: '',
        inventoryVal: '',
        lastOrderedVal: new Date().toISOString().split('T')[0],
        cityVal: '',
        countryVal: 'Canada',
        quantityVal: '',
        descriptionVal: ''
      })
    }
  }

  render() {
    return (
      <div
        ref="modal"
        onClick={this.clickHandler}
        className={
          this.props.isModal
            ? "inventory-modal inventory-modal--active"
            : "inventory-modal"
        }
      >
        <div className="inventory-modal-container">
          <div className="inventory-modal__header">
            <h1 className="inventory-modal__header-title">Create New</h1>
          </div>
          <form
            ref="formRef"
            onSubmit={this.props.submitNewItem}
            className="inventory-modal__form"
          >
            <div className="inventory-modal__form-inner-container">
              <label htmlFor="name" className="inventory-modal__form-label">
                Product
              </label>
              <input
                type="text"
                id="name"
                className="inventory-modal__form-input"
                placeholder="Item Name"
                value={this.state.productVal}
                onChange={this.productChange}
              />
              <label
                htmlFor="lastOrdered"
                className="inventory-modal__form-label"
              >
                Last Ordered
              </label>
              <input
                type="date"
                name="lastOrdered"
                id="lastOrdered"
                className="inventory-modal__form-input"
                value={this.state.lastOrderedVal}
                onChange={this.lastOrderedChange}
              />
            </div>
            <div className="inventory-modal__form-inner-container">
              <label htmlFor="city" className="inventory-modal__form-label">
                City
              </label>
              <input
                type="text"
                id="city"
                className="inventory-modal__form-input"
                value={this.state.cityVal}
                onChange={this.cityChange}
                placeholder="City"
              />
              <label htmlFor="location" className="inventory-modal__form-label">
                Country
              </label>
              <select className="inventory-modal__form-dropdown" id="location" value={this.state.countryVal} onChange={this.countryChange}>
                <option
                  className="inventory-modal__form-dropdown-item"
                  value="Canada"
                >
                  Canada
                </option>
                <option
                  className="inventory-modal__form-dropdown-item"
                  value="Not Canada"
                >
                  Not Canada
                </option>
              </select>
            </div>
            <div className="inventory-modal__form-inner-container">
              <label htmlFor="quantity" className="inventory-modal__form-label">
                Quantity
              </label>
              <input
                type="number"
                min="0"
                id="quantity"
                className="inventory-modal__form-input"
                placeholder="0"
                value={this.state.quantityVal}
                onChange={this.quantityChange}
              />
              <label htmlFor="status" className="inventory-modal__form-label">
                Status
              </label>
              <div className="inventory-modal__form-switch-container">
                <p className="inventory-modal__form-switch-text">
                  {this.state.checked ? "InStock" : "Out of Stock"}
                </p>
                <Switch
                  checkedIcon={false}
                  onColor="#69b02d"
                  id="status"
                  onChange={this.handleChange}
                  checked={this.state.checked}
                />
              </div>
            </div>
            <div className="inventory-modal__form-inner-container">
              <label
                htmlFor="description"
                className="inventory-modal__form-label"
              >
                Item Description
              </label>
              <textarea
                type="text"
                id="description"
                className="inventory-modal__form-textarea"
                placeholder="(Optional)"
                value={this.state.descriptionVal}
                onChange={this.descriptionChange}
              />
            </div>
            <div className="inventory-modal__form-btn-container">
              <button
                onClick={this.cancelHandler}
                type="reset"
                className="inventory-modal__form-btn-cancel"
              >
                CANCEL
              </button>
              <button
                onClick={this.props.removeModal}
                type="submit"
                className="inventory-modal__form-btn-save"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewInventoryItem;
