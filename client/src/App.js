import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Warehouse from "./components/Warehouse/Warehouse.js";
import Inventory from "./components/Inventory/Inventory.js";
import Errors from "./components/Errors/Errors.js";
import Header from "./components/Header/Header.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/warehouse/:warehouseId" component={Warehouse} />
          <Route exact path="/inventory/:inventoryId" component={Inventory} />
          <Route exact path="/warehouse" component={Warehouse} />
          <Route exact path="/inventory" component={Inventory} />
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
