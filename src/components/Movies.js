import React from "react";
import Movie from "./Movie";
import { createFragmentContainer, graphql } from "react-relay";

const Movies = ({ heroes }) =>
  <div className="movies">
    {(heroes || []).map(hero => <Movie key={hero.__id} hero={hero} />)}
  </div>;

export default createFragmentContainer(
  Movies,
  graphql`
    fragment Movies_heroes on Hero @relay(plural: true) {
      ...Movie_hero
    }
  `
);
