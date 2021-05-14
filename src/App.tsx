import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./screens/books/Books";
import Orders from "./screens/orders/Orders";
import Teachers from "./screens/teachers/Teachers";
import Classrooms from "./screens/classrooms/Classrooms";
import Homepage from "./screens/homepage/Homepage";
import AddOrder from "./screens/orders/AddOrder";


import Navbar from "./shared/navbar/Navbar";
import OrderDetail from "./screens/orderDetail/OrderDetail";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/orders/:orderId">
            <OrderDetail />
          </Route>
          <Route path="/orders/addOrder">
            <AddOrder />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/teachers">
            <Teachers />
          </Route>
          <Route path="/classrooms">
            <Classrooms />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
