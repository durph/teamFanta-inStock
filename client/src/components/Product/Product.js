import React, { Component } from "react";
import back_arrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import "./product.scss";
class Product extends Component {
  render() {
    //testing routes
    return (
      <section className="all">
        <section className="header">
        <div className="header-top">
          <img src={back_arrow} alt="" className="header-top__icon" />
          <h1 className="header-top__title">Product Name</h1>
        </div>
          <div className="header__button">
            <button className="header__button--status">In Stock</button>
          </div>
        </section>
        <section className="main">
          <div className="main__description">
             <label htmlFor="" className="main__description-label">
                ITEM DESCRIPTION
              </label>
              <p className="main__description-content">
                Here is a more detailed summary of the product
                name, it’s uses, industries and possible attributes
                that could be used to describe the product.
              </p>
          </div>
          <div className="main__info">
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                ORDERED BY
              </label>
              <span className="main__info-item-content">Mark Saunders</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                REFERENCE NUMBER
              </label>
              <span className="main__info-item-content">JK2020FD7811201</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                LAST ORDERED
              </label>
              <span className="main__info-item-content">5/24/2018</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                LOCATION
              </label>
              <span className="main__info-item-content">Toronto, CAN</span>
            </div>
            <div className="main__info-item">
              <label htmlFor="" className="main__info-item-label">
                QUANTITY
              </label>
              <span className="main__info-item-content">12000</span>
            </div>
            <div className="main__info-item main__info-item-category">
              <label htmlFor="" className="main__info-item-label">
                CATEGORIES
              </label>
              <p className="main__info-item-content main__info-item-content--bottom">
                Industrial, Automotive, Heavy, Mechanical, Engineering,
                Transportation, Sales
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
