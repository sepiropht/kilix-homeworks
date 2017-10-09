import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import Heroes from "./Heroes";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchs: state.Searchs
});

const HeroesFilterQuery = {
  text: graphql`
    query HeroesFilterQuery($search: String) {
      heroes(search: $search) {
        ...Heroes_heroes
      }
    }
  `
};
const HeroesFilter = ({ searchs }) => {
  console.log("filterComponent", searchs);
  return (
    <QueryRenderer
      environment={environment}
      query={HeroesFilterQuery[searchs.typeSearch]}
      variables={searchs.variables}
      render={({ error, props }) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        } else if (props) {
          return <Heroes heroes={props.heroes} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};
export default connect(mapStateToProps)(HeroesFilter);
