import React, { Component } from "react";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import "./Warehouse.scss";
import WarehouseAdder from "../WarehouseAdder/WarehouseAdder.js";
class Warehouse extends Component {
    state = {
        RenderAdder: true
    };
    addWarehouse = e =>{
        console.log("clicked");
        this.setState(prevstate =>({RenderAdder: !prevstate.RenderAdder}))
    } 
  render() {
    //testing routes
    return (
      <>
        <h1>Hello from Warehouse</h1>
        <h2>Test ID : {this.props.match.params.warehouseId}</h2>
          <div className="warehouse__add-item">
            <img
              src={plusImg}
              alt="add item plus"
              className="warehouse__add-item-img"
              onClick ={this.addWarehouse} 
                    />
          </div>
        {(this.state.RenderAdder? <WarehouseAdder /> : "")}
      </>
    );
  }
}

export default Warehouse;
