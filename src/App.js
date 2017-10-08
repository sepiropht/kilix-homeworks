import React from "react";
import HeroesListPage from "./components/HeroesListPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">All Heroes</Link>
        </li>
        <li>
          <Link to="/about">Heroes by Name</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={HeroesListPage} />
    </div>
  </Router>;

export default App;
