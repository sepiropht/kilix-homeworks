import React from "react";
import Hero from "./Hero";
import { createFragmentContainer, graphql } from "react-relay";

const Heroes = ({ heroes }) =>
  <div className="heroes">
    {(heroes || []).map(hero => <Hero key={hero.__id} hero={hero} />)}
  </div>;

export default createFragmentContainer(
  Heroes,
  graphql`
    fragment Heroes_heroes on Hero @relay(plural: true) {
      ...Hero_hero
    }
  `
);
