import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import Movies from "./Movies";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchs: state.Searchs
});

const MoviesListPageQuery = {
  all: graphql`
    query MoviesListPageQuery {
      heroes {
        ...Movies_heroes
      }
    }
  `
};
const MoviesListPage = ({ searchs }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={MoviesListPageQuery.all}
      render={({ error, props }) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        } else if (props) {
          return <Movies heroes={props.heroes} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};
export default connect(mapStateToProps)(MoviesListPage);
