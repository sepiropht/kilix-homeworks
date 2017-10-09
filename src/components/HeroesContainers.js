import React from "react";
import HeroesListPage from "./HeroesListPage";
import HeroesFilter from "./HeroesFilter";
import HeroesById from "./HeroesById";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  search: state.Searchs
});

const HeroesContainers = ({ search }) => {
  if (search.typeSearch === "all") return <HeroesListPage />;
  if (search.typeSearch === "text") return <HeroesFilter />;
  return <HeroesById />;
};
export default connect(mapStateToProps)(HeroesContainers);
