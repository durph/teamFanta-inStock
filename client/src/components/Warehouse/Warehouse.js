import React, { Component } from "react";
import "./Warehouse.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import Axios from "axios";

class Warehouse extends Component {
  render() {

    return (
      
       <section className="warehouse">
        <div className="warehouse__header">
        <div className="warehouse__header-heading"> Locations </div>
        <input type="text" className="warehouse__header-search" placeholder="Search.."/>
        
        </div>
        
      </section>
    );
  }
}

export default Warehouse;
