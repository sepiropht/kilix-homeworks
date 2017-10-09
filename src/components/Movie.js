import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";

const Movie = ({ hero }) => {
  console.log("movie componennt", hero);
  return (
    <div>
      {(hero.movies || []).map((movie, i) =>
        <div key={movie.id}>
          <Link to={"/heroes/" + movie.id}> heroes for this movies </Link>
          {movie.name}
        </div>
      )}
    </div>
  );
};

export default createFragmentContainer(
  Movie,
  graphql`
    fragment Movie_hero on Hero {
      movies {
        id
        name
        production_year
        director
      }
    }
  `
);
