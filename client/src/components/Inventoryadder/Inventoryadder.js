import React, { Component } from "react";




class Inventoryadder extends Component {
    render  () {
        return(
            <div className="createnew__container">
            <div className="createnew__container-title">Create New</div> 
            <form className="form__container">
            <div className="form__container-label-product">Product</div>
            <input type="text" name="product" id="product" value="Item Name"></input>
            </form>
            
            </div>
            
        )
    }
}

export default Inventoryadder;
