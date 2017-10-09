import React from "react";
import HeroesListPage from "./components/HeroesListPage";
import { Route, Link } from "react-router-dom";
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
    <Route exact path="/" component={HeroesListPage} />
  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
