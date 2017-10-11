import React from "react";
import HeroesContainers from "./components/HeroesContainers";
import MoviesContainers from "./components/MoviesContainers";
import MoviesListPage from "./components/MoviesListPage";
import MoviesByHero from "./components/MoviesByHero";
import HeroesByMovie from "./components/HeroesByMovie";
import { Route, Link, withRouter } from "react-router-dom";
import { search } from "./reducers/searchs";
import { connect } from "react-redux";
import "./App.css";
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
    <header>
      <h1>Heroes</h1>
      <input
        type={"text"}
        value={search.searchKeyWord}
        placeholder={"recherche par id ou nom"}
        onChange={e => onChange(e.target.value)}
      />
      <nav>
        <ul>
          <li>
            <Link to="/">All Heroes</Link>
          </li>
          <li>
            <Link to="/movies">All Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="content">
      <Route exact path="/" component={HeroesContainers} />
      <Route path="/movies" component={MoviesListPage} />
      <Route path="/movie/:id" component={MoviesByHero} />
      <Route path="/heroes/:id" component={HeroesByMovie} />
    </div>
  </div>;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
