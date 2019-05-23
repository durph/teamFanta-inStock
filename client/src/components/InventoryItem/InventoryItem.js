import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const InventoryItem = ({ id, name, description, quantity, lastOrdered, location, isInStock }) => {
// function InventoryItem (props) {
class InventoryItem extends Component {

    render() {
        return(
            <Link className="inventory__list-link" to='id'>
                <ul className="inventory__list-entry">
                    <li className="inventory__list-entry-heading">item</li>
                    <li className="inventory__list-entry-item-product">{this.props.name}</li>
                    <li className="inventory__list-entry-item-description">{this.props.description}</li>
                    <li className="inventory__list-entry-heading">last ordered</li>
                    <li className="inventory__list-entry-item">{this.props.lastOrdered}</li>
                    <li className="inventory__list-entry-heading">location</li>
                    <li className="inventory__list-entry-item">{this.props.location}</li>
                    <li className="inventory__list-entry-heading">quantity</li>
                    <li className="inventory__list-entry-item">{this.props.quantity}</li>
                    <li className="inventory__list-entry-heading">status</li>
                    <li className="inventory__list-entry-item">{this.props.isInStock ? "In Stock" : "Out of Stock"}</li>
                </ul>
            </Link>
        )
    }
}

export default InventoryItem;