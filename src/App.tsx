import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Books from "./screens/books/Books";
import Orders from "./screens/orders/Orders";
import Teachers from "./screens/teachers/Teachers";
import Classrooms from "./screens/classrooms/Classrooms";
import Homepage from "./screens/homepage/Homepage";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/classrooms">Classrooms</Link>
            </li>
          </ul>
        </nav>

        <Switch>
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
