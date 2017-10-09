import React from "react";
import MoviesListPage from "./MoviesListPage";
import HeroesFilter from "./HeroesFilter";
import HeroesById from "./HeroesById";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  search: state.Searchs
});

const MoviesContainers = ({ search }) => {
  // if (search.typeSearch === "all") return <HeroesListPage />;
  //if (search.typeSearch === "text") return <HeroesFilter />;
  return <MoviesListPage />;
};
export default connect(mapStateToProps)(MoviesContainers);
