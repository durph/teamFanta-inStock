import React, { Component } from 'react';

class Warehouse extends Component{
    
    render(){
        //testing routes
        return(
            <>
                <h1>Hello from Warehouse</h1>
                <h2>Test ID : {this.props.match.params.warehouseId}</h2>
            </>
        )

    }
}

export default Warehouse;