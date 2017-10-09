import React from "react";
import HeroesContainers from "./components/HeroesContainers";
import MoviesContainers from "./components/MoviesContainers";
import MoviesByHero from "./components/MoviesByHero";
import { Route, Link, withRouter } from "react-router-dom";
import { search } from "./reducers/searchs";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  search: state.Searchs
});
const mapDispatchToProps = dispatch => {
  return {
    onChange: text => {
      dispatch(search(text));
    }
  };
};

const App = ({ search, onChange }) =>
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
    <input
      type={"text"}
      value={search.searchKeyWord}
      placeholder={"type what you want"}
      onChange={e => onChange(e.target.value)}
    />

    <Route exact path="/" component={HeroesContainers} />
    <Route path="/movies" component={MoviesContainers} />
    <Route path="/movie/:id" component={MoviesByHero} />
  </div>;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
