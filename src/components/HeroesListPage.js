import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import Heroes from "./Heroes";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchs: state.Searchs
});

const HeroesListPageQuery = {
  text: graphql`
    query HeroesListPageQuery($search: String) {
      heroes(search: $search) {
        ...Heroes_heroes
      }
    }
  `,
  id: graphql`
    query HeroesListPageQuery($heroID: ID!) {
      heroes(id: $heroID) {
        ...Heroes_heroes
      }
    }
  `,
  all: graphql`
    query HeroesListPageQuery {
      heroes {
        ...Heroes_heroes
      }
    }
  `
};
const HeroesListPage = ({ searchs }) => {
  console.log(searchs);
  console.log(HeroesListPageQuery);
  return (
    <QueryRenderer
      environment={environment}
      query={HeroesListPageQuery[searchs.typeSearch]}
      variables={searchs.variable}
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
export default connect(mapStateToProps)(HeroesListPage);
