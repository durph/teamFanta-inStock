import React, { Component } from "react";
import "./WarehouseAdder.scss";


export default class WarehouseAdder extends Component {
    render(){
        return(
            <div className = "warehouseadder">
                <div className = "warehouseadder__card">
                    <h1 className = "warehouseadder__card__title">create new</h1>
                        <form class = "warehouseadder__card__form>
                            <div className = "warehouseadder__card__formfield"></div>
                               <label className ="warehouseadder__card__formfield-label">
                                    product 
                                </label>
                            <div className = "warehouseadder__card__formfield"></div>
                                <label className ="warehouseadder__card__formfield-label">
                                    last ordered
                                </label>
                            <div className = "warehouseadder__card__formfield"></div>
                                <label className ="warehouseadder__card__formfield-label">
                                    city
                                </label>
                            <div className = "warehouseadder__card__formfield"></div>
                                <label className ="warehouseadder__card__formfield-label">
                                    country
                                </label>
                            <div className = "warehouseadder__card__formfield"></div>
                                <label className ="warehouseadder__card__formfield-label">
                                    quantity
                                </label>
                            <div className = "warehouseadder__card__formfield"></div>
                                <label className ="warehouseadder__card__formfield-label">
                                    status
                                </label>
                            <div className = "warehouseadder__card__formfield"></div>
                                <label className ="warehouseadder__card__formfield-label">
                                    item description
                                </label>
                            <div className = "warehouseadder__card__buttons"></div>
                        </form>
                </div>
            </div>
        )
    }
}
