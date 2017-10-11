import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { SingleHero } from "./Hero";

const ListHeroes = props => {
  console.log("listHeroes", props);
  return (
    <div className="heroes">
      {(props.movie.heroes || [])
        .map((hero, index) => <SingleHero key={hero.id} hero={hero} />)}
    </div>
  );
};

export default createFragmentContainer(
  ListHeroes,
  graphql`
    fragment ListHeroes_movie on Movie {
      id
      heroes {
        id
        description
        alias
        picture
      }
    }
  `
);
