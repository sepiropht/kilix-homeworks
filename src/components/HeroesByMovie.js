import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import Movies from "./Movies";
import { connect } from "react-redux";
import ListHeroes from "./ListHeroes";

const mapStateToProps = state => ({
  searchs: state.Searchs
});

const HeroesByMovieQuery = graphql`
  query HeroesByMovieQuery($id: ID!) {
    movie(id: $id) {
      ...ListHeroes_movie
    }
  }
`;

const HeroesByMovie = ({ searchs, match }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={HeroesByMovieQuery}
      variables={{ id: match.params.id }}
      render={({ error, props }) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        } else if (props) {
          console.log(props);
          return <ListHeroes key={props.movie.__id} movie={props.movie} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default connect(mapStateToProps)(HeroesByMovie);
