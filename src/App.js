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
          <Link to="/movies">All Movies</Link>
        </li>
      </ul>

      <hr />
      <input type={"text"} placeholder={"type what you want"} />
      <Route exact path="/" component={HeroesListPage} />
    </div>
  </Router>;

export default App;
