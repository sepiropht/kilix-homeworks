import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import Heroes from "./Heroes";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchs: state.Searchs
});

const HeroesByIdQuery = graphql`
  query HeroesByIdQuery($id: ID!) {
    hero(id: $id) {
      ...Heroes_heroes
    }
  }
`;

const HeroesById = ({ searchs }) => {
  console.log("filterComponent", searchs);
  return (
    <QueryRenderer
      environment={environment}
      query={HeroesByIdQuery}
      variables={searchs.variables}
      render={({ error, props }) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        } else if (props) {
          console.log(props);
          return <Heroes heroes={[props.hero]} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};
export default connect(mapStateToProps)(HeroesById);
