import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'; 

import Home from './pages/Home';
import Warehouse from './pages/Warehouse';
import Inventory from './pages/Inventory';


class App extends Component {
 
  render() {
    return (
    <Router>
      <Switch>
        <Route path="/warehouse/:id" component={Warehouse}/>
        <Route path = "/inventory/:id" component={Inventory}/>
        <Route exact path="/warehouse" component={Warehouse}/>
        <Route exact path="/inventory" component={Inventory}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
    )
  }
}


export default App;
