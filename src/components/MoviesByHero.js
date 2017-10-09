import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";
import Movies from "./Movies";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  searchs: state.Searchs
});

const MoviesByHeroQuery = graphql`
  query MoviesByHeroQuery($id: ID!) {
    hero(id: $id) {
      ...Movies_heroes
    }
  }
`;

const MoviesByHero = ({ searchs, match }) => {
  console.log("filterComponent", match);
  return (
    <QueryRenderer
      environment={environment}
      query={MoviesByHeroQuery}
      variables={{ id: match.params.id }}
      render={({ error, props }) => {
        if (error) {
          return (
            <div>
              {error.message}
            </div>
          );
        } else if (props) {
          return <Movies heroes={[props.hero]} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
};
export default connect(mapStateToProps)(MoviesByHero);
