import React, { Component } from "react";
import "./WarehouseAdder.scss";
import Switch from 'react-switch'


export default class WarehouseAdder extends Component {
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
      <div ref="modal" onClick={this.clickHandler} className={this.props.isModal ? "warehouse-modal warehouse-modal--active" : "warehouse-modal"}>
          <div  className="warehouse-modal-container">
            <div className="warehouse-modal__header">
              <h1 className="warehouse-modal__header-title">Create New</h1>
            </div>
              <form ref="formRef" onSubmit={this.props.submitNewItem} className="warehouse-modal__form">
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="WarehouseName" className="warehouse-modal__form-label">Warehouse Name</label>
                  <input type="text" id="WarehouseName" className="warehouse-modal__form-input" placeholder="Warehouse Name"/>
                  <label htmlFor="WarehouseAddress" className="warehouse-modal__form-label">Address</label>
                  <input type="text" id="WarehouseAddress" className="warehouse-modal__form-input" />
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="contactTitle" className="warehouse-modal__form-label">Contact Title</label>
                  <input type="text" id="contactTitle" className="warehouse-modal__form-input" placeholder="Title" />
                  <label htmlFor="ContactPhone" className="warehouse-modal__form-label">Contact Phone #</label>
                  <input type="text" id="ContactPhone" className="warehouse-modal__form-input" />
                </div>
                <div className="warehouse-modal__form-inner-container--column">
                  <label htmlFor="contactEmail" className="warehouse-modal__form-label">Contact email</label>
                  <input type="number" id="contactEmail" className="warehouse-modal__form-input" placeholder="youremail@domain.com" />
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="categories" className="warehouse-modal__form-label">Warehouse Categories</label>
                  <textarea type="text" id="categories" className="warehouse-modal__form-textarea" placeholder="categories" />
                </div>
                <div className="warehouse-modal__form-btn-container">
                  <button onClick={this.cancelHandler} className="warehouse-modal__form-btn-cancel">CANCEL</button>
                  <button type='submit' className="warehouse-modal__form-btn-save">SAVE</button>
                </div>
              </form>
            </div>
          </div>

    )

  }
}
