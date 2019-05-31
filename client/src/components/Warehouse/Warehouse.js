import React, { Component } from "react";
import "./Warehouse.scss";
import plusImg from "../../assets/Icons/SVG/Icon-add.svg";
import Axios from "axios";
import Arrow from "../../assets/Icons/SVG/Icon-arrow-right.svg"


class Warehouse extends Component {
    
  state = { 
    warehouse: [{
      address:{},
      contact:{}
    }], 
      }


      componentDidMount() {
        
        
        Axios.get('http://localhost:8080/warehouse/')
        .then(response => {
          
          console.log(response.data);
          this.setState({ warehouse: response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }


  render() {
    

    return (
      
       <section className="warehouse">
        <div className="warehouse__header">
        <div className="warehouse__header-heading"> Locations </div>
        <input type="text" className="warehouse__header-search" placeholder="Search.."/>
        </div>

        <ul className="warehouse__headings">
          <li className="warehouse__headings-list">Warehouse</li>
          <li className="warehouse__headings-list">Contact</li>
          <li className="warehouse__headings-list">Contact Information</li>
          <li className="warehouse__headings-list">Categories</li>
        </ul>
        {this.state.warehouse.map(({address, contact, name, inventoryCategories} ) => {
          console.log(address.street);
          console.log(contact);
          return( <>
        <div className="warehouse__info-container">
        <div className="warehouse__listing">
        <div className="warehouse__listing-nameandaddress">
        <div className="warehouse__listing-nameandaddress-name">{name}</div>
        <div className="warehouse__listing-nameandaddress-address">{address.street}</div>
        </div>
        <div className="warehouse__listing-info">
        <div className="warehouse__listing-info-nameandadd">
        <div className="warehouse__listing-info-nameandadd-name">{contact.name}</div>
        <div className="warehouse__listing-info-nameandadd-position">{contact.title}</div>
        </div>
        <div className="warehouse__listing-info-contact">
        <div className="warehouse__listing-info-contact-phone">{contact.phone}</div>
        <div className="warehouse__listing-info-contact-email">{contact.email}</div>
        </div>
        <div className="warehouse__listing-info-product">
        <div className="warehouse__listing-info-product-items">{inventoryCategories}</div>
        </div>
        </div>
        </div>
        <div className="warehouse__listing-info-product-arrow"><img src={Arrow}></img></div>
        </div>
        </>
        )})}
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
          </>
          </section>
          
    
    );
  }
}

export default Warehouse;
