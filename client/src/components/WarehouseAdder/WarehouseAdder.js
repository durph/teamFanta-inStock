import React, { Component } from "react";
import "./WarehouseAdder.scss";


export default class WarehouseAdder extends Component {
    render(){
        return(
            <div className = "warehouseadder">
                <div className = "warehouseadder__card">
                    <h1 className = "warehouseadder__card__title">create new</h1>
                    <div className = "warehouseadder__card__formfield"></div>
                       <h5 className ="warehouseadder__card__formfield-label">
                            product 
                        </h5>
                    <div className = "warehouseadder__card__formfield"></div>
                        <h5 className ="warehouseadder__card__formfield-label">
                            last ordered
                        </h5>
                    <div className = "warehouseadder__card__formfield"></div>
                        <h5 className ="warehouseadder__card__formfield-label">
                            city
                        </h5>
                    <div className = "warehouseadder__card__formfield"></div>
                        <h5 className ="warehouseadder__card__formfield-label">
                            country
                        </h5>
                    <div className = "warehouseadder__card__formfield"></div>
                        <h5 className ="warehouseadder__card__formfield-label">
                            quantity
                        </h5>
                    <div className = "warehouseadder__card__formfield"></div>
                        <h5 className ="warehouseadder__card__formfield-label">
                            status
                        </h5>
                    <div className = "warehouseadder__card__formfield"></div>
                        <h5 className ="warehouseadder__card__formfield-label">
                            item description
                        </h5>
                    <div className = "warehouseadder__card__buttons"></div>
                </div>
            </div>
        )
    }
}
