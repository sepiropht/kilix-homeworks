import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";

const Hero = ({ hero }) => <SingleHero hero={hero} />;
export const SingleHero = ({ hero }) =>
  <div className="hero">
    <Link to={"/movie/" + hero.id}> Films où il apparaît </Link>
    <img src={hero.picture} alt="hero" />
    <span>
      {hero.alias}
    </span>
  </div>;
export default createFragmentContainer(
  Hero,
  graphql`
    fragment Hero_hero on Hero {
      id
      description
      alias
      picture
    }
  `
);
