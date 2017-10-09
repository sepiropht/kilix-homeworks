/**
 * @flow
 * @relayHash f65e5b34d8221ebc6816552af7a37648
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MoviesListPageQueryResponse = {|
  +heroes: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query MoviesListPageQuery {
  heroes {
    ...Movies_heroes
    id
  }
}

fragment Movies_heroes on Hero {
  ...Movie_hero
}

fragment Movie_hero on Hero {
  movies {
    id
    name
    production_year
    director
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MoviesListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Hero",
        "name": "heroes",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Movies_heroes",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "MoviesListPageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "MoviesListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Hero",
        "name": "heroes",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Hero",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Movie",
                "name": "movies",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "production_year",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "director",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query MoviesListPageQuery {\n  heroes {\n    ...Movies_heroes\n    id\n  }\n}\n\nfragment Movies_heroes on Hero {\n  ...Movie_hero\n}\n\nfragment Movie_hero on Hero {\n  movies {\n    id\n    name\n    production_year\n    director\n  }\n}\n"
};

module.exports = batch;
