import React, { Component } from 'react';

class Inventory extends Component{

    render(){
        //testing routes
        return(
            <>
                <h1>Hello from Inventory</h1>
                <h2>Test ID : {this.props.match.params.id}</h2>
            </>
        )

    }
}

export default Inventory;