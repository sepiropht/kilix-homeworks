import React from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
import Heroes from './Heroes'

const HeroesListPageQuery = graphql`
 query HeroesListPageQuery {
     heroes {
         ...Heroes_heroes
     }
  }
`
const HeroesListPage = () => (
      <QueryRenderer
        environment={environment}
        query={HeroesListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            console.log(props)
            return <Heroes heroes={props.heroes} />
          }
          return <div>Loading</div>
        }}
      />
    )
export default HeroesListPage
