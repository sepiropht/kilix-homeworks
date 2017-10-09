import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Hero = ({ hero }) =>
  <div>
    show all movies of this hero
    {hero.alias}
  </div>;

export default createFragmentContainer(
  Hero,
  graphql`
    fragment Hero_hero on Hero {
      id
      description
      alias
    }
  `
);
