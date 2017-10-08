import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Hero = ({ hero }) =>
  <div>
    {" "}{hero.alias}{" "}
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
