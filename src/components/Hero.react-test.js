import React from "react";
import Hero from "./Hero";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const heroProps = {
    id: "4",
    picture: "/static/heroes/spiderman.jpg",
    alias: "Spider-Man"
  };
  const component = renderer.create(<Hero hero={heroProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
