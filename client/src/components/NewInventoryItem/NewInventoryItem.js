import React, { Component } from "react";
import "./NewInventoryItem.scss";
import Switch from 'react-switch'
class NewInventoryItem extends Component {
  state = {
    checked: true,
    leaveModal: true
  }

  handleChange =() => {
    this.setState({ checked: !this.state.checked });
  }

  // offLeaveModal() {
  //   this.setState({
  //     leaveModal: !this.setState.leaveModal
  //   })
  // }

  // onLeaveModal () {
  //   this.setState({
  //     leaveModal: true
  //   })
  // }

  clickHandler = (e) => {
    if(e.target.contains(this.refs.modal)) {
      this.props.removeModal();
      this.refs.formRef.reset();
    } else {
      return;
    }
  }

  cancelHandler = () => {
    this.props.removeModal();
    this.refs.formRef.reset();
  }

  render() {
    return (
      <div ref="modal" onClick={this.clickHandler} className={this.props.isModal ? "inventory-modal inventory-modal--active" : "inventory-modal"}>
          <div  className="inventory-modal-container">
            <div className="inventory-modal__header">
              <h1 className="inventory-modal__header-title">Create New</h1>
            </div>
              <form ref="formRef" onSubmit={this.props.submitNewItem} className="inventory-modal__form">
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="name" className="inventory-modal__form-label">Product</label>
                  <input type="text" id="name" className="inventory-modal__form-input" placeholder="Item Name"/>
                  <label htmlFor="lastOrdered" className="inventory-modal__form-label">Last Ordered</label>
                  <input type="date" id="lastOrdered" className="inventory-modal__form-input" />
                </div>
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="city" className="inventory-modal__form-label">City</label>
                  <input type="text" id="city" className="inventory-modal__form-input" placeholder="City" />
                  <label htmlFor="country" className="inventory-modal__form-label">Country</label>
                  <select className="inventory-modal__form-dropdown" id="country">
                    <option className="inventory-modal__form-dropdown-item" value="Canada">Canada</option>
                    <option className="inventory-modal__form-dropdown-item" value="Not Canada">Not Canada</option>
                  </select>
                </div>
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="quantity" className="inventory-modal__form-label">Quantity</label>
                  <input type="number" id="quantity" className="inventory-modal__form-input" placeholder="0" />
                  <label htmlFor="status" className="inventory-modal__form-label">Status</label>
                  <div className="inventory-modal__form-switch-container">
                    <p className="inventory-modal__form-switch-text">{this.state.checked ? 'InStock' : 'Out of Stock'}</p>
                    <Switch checkedIcon={false} onColor="#69b02d" id="status" onChange={this.handleChange} checked={this.state.checked} />
                  </div>
                </div>
                <div className="inventory-modal__form-inner-container">
                  <label htmlFor="description" className="inventory-modal__form-label">Item Description</label>
                  <textarea type="text" id="description" className="inventory-modal__form-textarea" placeholder="(Optional)" />
                </div>
                <div className="inventory-modal__form-btn-container">
                  <button onClick={this.cancelHandler} className="inventory-modal__form-btn-cancel">CANCEL</button>
                  <button type='submit' className="inventory-modal__form-btn-save">SAVE</button>
                </div>
              </form>
            </div>
          </div>

    )

  }

}




export default NewInventoryItem;