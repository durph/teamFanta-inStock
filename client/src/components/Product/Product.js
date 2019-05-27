import React, { Component } from "react";
import back_arrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import "./product.scss";
import axios from "axios";
import {Link} from 'react-router-dom';
class Product extends Component {
  state={
    item:{
      "id": "",
      "name": "",
      "description": "",
      "quantity": "",
      "lastOrdered": "",
      "location": "",
      "isInstock": true,
      "categories": "",
      "warehouseId": ""
    }
  }

  changeBg(){
    if(!this.state.item.isInstock){
      return {
        backgroundColor:"red"
      }
    }
    else
      return{
        backgroundColor:"rgb(105, 176, 45)"
      }
  }
  
  componentDidMount(){
    let id  = this.props.match.params.inventoryId;
    axios.get(`http://localhost:8080/inventory/${id}`)
      .then(res => {
        console.log(res);
        this.setState({item:res.data});
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/errors"); //Navigates to error page on error
      });
  }

  render() {
    return (
      <section className="product-page">
        <section className="header">
        <div className="header-top">
        <Link to="/inventory">
          <img src={back_arrow} alt="" className="header-top__icon" />
        </Link>
          <h1 className="header-top__title">{this.state.item.name}</h1>
        </div>
          <div className="header__button">
            <button className="header__button--status" style={this.changeBg()}>{this.state.item.isInstock?"In Stock":"Sold Out"}</button>
          </div>
        </section>
        <section className="main">
          <div className="main__description">
             <label htmlFor="" className="main__description-label">
                ITEM DESCRIPTION
              </label>
              <p className="main__description-content">
              {this.state.item.description}
              </p>
          </div>
          <div className="main__info">
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                ORDERED BY
              </label>
              <span className="main__info-item-content">Mark Saunders(HardCoded)</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                REFERENCE NUMBER
              </label>
              <span className="main__info-item-content">123456(HardCoded)</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                LAST ORDERED
              </label>
              <span className="main__info-item-content">{this.state.item.lastOrdered}</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                LOCATION
              </label>
              <span className="main__info-item-content">{this.state.item.location}</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                QUANTITY
              </label>
              <span className="main__info-item-content">{this.state.item.quantity}</span>
            </div>
            <div className="main__info-item main__info-item-category">
              <label htmlFor="" className="main__info-item-label">
                CATEGORIES
              </label>
              <p className="main__info-item-content main__info-item-content--bottom">
              {this.state.item.categories}
              </p>
            </div>
          </div>
        </section>
        <div className="button">
            <button className="button--edit">EDIT</button>
        </div>
      </section>
    );
  }
}

export default Product;
