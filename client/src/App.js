import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Warehouse from "./components/Warehouse/Warehouse.js";
import Inventory from "./components/Inventory/Inventory.js";
import Product from "./components/Product/Product.js";
import Errors from "./components/Errors/Errors.js";
import Header from "./components/Header/Header.js";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails.js";
import Inventoryadder from "./components/Inventoryadder/Inventoryadder.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/warehouse/:warehouseId"
            component={WarehouseDetails}
          />
          <Route exact path="/inventory/:inventoryId" component={Product} />
          <Route exact path="/warehouse" component={Warehouse} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/test" component={Inventoryadder} />
          <Route
            exact
            path="/"
            render={() => <Redirect from="/" to="/inventory" />}
          />
          <Route path="*" component={Errors} />
        </Switch>
      </Router>
    );
  }
}

export default App;
