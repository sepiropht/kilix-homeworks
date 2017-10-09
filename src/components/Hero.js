import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";

const Hero = ({ hero }) =>
  <div>
    <Link to={"/movie/" + hero.id}> movie </Link>
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
