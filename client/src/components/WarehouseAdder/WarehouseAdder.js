import React, { Component } from "react";
import "./WarehouseAdder.scss";


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

 resetHandler = ()=> {
     this.refs.formRef.reset();
 }

  render() {
    return (
      <div ref="modal" onClick={this.clickHandler} className={this.props.isModal ? "warehouse-modal warehouse-modal--active" : "warehouse-modal"}>
          <div  className="warehouse-modal-container">
            <div className="warehouse-modal__header">
              <h1 className="warehouse-modal__header-title">Create New</h1>
            </div>
              <form ref="formRef" onSubmit={this.props.submitNewWarehouse} className="warehouse-modal__form">
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="WarehouseName" className="warehouse-modal__form-label">Warehouse Name</label>
                  <input type="text" id="WarehouseName" className="warehouse-modal__form-input" placeholder="Warehouse Name" required pattern = "[a-zA-Z].*"/>
                  <label htmlFor="WarehouseAddress" className="warehouse-modal__form-label">Street address</label>
                  <input type="text" id="WarehouseAddress" className="warehouse-modal__form-input"required pattern = "[0-9].*[a-zA-Z]" />
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="Suite" className="warehouse-modal__form-label">Suite (optional)</label>
                  <input type="text" id="Suite" className="warehouse-modal__form-input"/>
                  <label htmlFor="City" className="warehouse-modal__form-label">City</label>
                  <input type="text" id="City" className="warehouse-modal__form-input"required pattern = "[a-zA-Z]*" />
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="Province" className="warehouse-modal__form-label">Province</label>
                  <input type="text" id="Province" className="warehouse-modal__form-input"required pattern = "[a-zA-Z]*" />
                  <label htmlFor="PostalCode" className="warehouse-modal__form-label">postal code</label>
                  <input type="text" id="PostalCode" className="warehouse-modal__form-input"required pattern = "[A-Za-z0-9]*" />
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="ContactName" className="warehouse-modal__form-label">Contact name</label>
                  <input type="text" id="ContactName" className="warehouse-modal__form-input" placeholder="Name"required pattern = "[a-zA-Z]*" />
                  <label htmlFor="ContactTitle" className="warehouse-modal__form-label">title</label>
                  <input type="text" id="ContactTitle" className="warehouse-modal__form-input" placeholder="title"required pattern = "[a-zA-Z]*"/>
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="ContactPhone" className="warehouse-modal__form-label">phone#</label>
                  <input type="text" id="ContactPhone" className="warehouse-modal__form-input" placeholder="phone"required pattern ="[0-9\-]*" />
                  <label htmlFor="ContactEmail" className="warehouse-modal__form-label">email</label>
                  <input type="text" id="ContactEmail" className="warehouse-modal__form-input" placeholder="you@yourdomain.com"required pattern ="[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]*"/>
                </div>
                <div className="warehouse-modal__form-inner-container">
                  <label htmlFor="categories" className="warehouse-modal__form-label">Warehouse Categories</label>
                  <textarea type="text" id="categories" className="warehouse-modal__form-textarea" placeholder="categories"required pattern =".*" />
                </div>
                <div className="warehouse-modal__form-btn-container">
                  <button type = 'reset'onClick={this.cancelHandler} className="warehouse-modal__form-btn-cancel">CANCEL</button>
                  <button type='submit' className="warehouse-modal__form-btn-save">SAVE</button>
                </div>
              </form>
            </div>
          </div>

    )

  }
}
