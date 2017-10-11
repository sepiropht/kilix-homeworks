/**
 * @flow
 * @relayHash bfe00fb3d1efb0f19f5d48f02425fb28
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HeroesByMovieQueryResponse = {|
  +movie: ?{| |};
|};
*/


/*
query HeroesByMovieQuery(
  $id: ID!
) {
  movie(id: $id) {
    ...ListHeroes_movie
    id
  }
}

fragment ListHeroes_movie on Movie {
  id
  heroes {
    id
    description
    alias
    picture
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeroesByMovieQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Movie",
        "name": "movie",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListHeroes_movie",
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
  "name": "HeroesByMovieQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "HeroesByMovieQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": "Movie",
        "name": "movie",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "alias",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "picture",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HeroesByMovieQuery(\n  $id: ID!\n) {\n  movie(id: $id) {\n    ...ListHeroes_movie\n    id\n  }\n}\n\nfragment ListHeroes_movie on Movie {\n  id\n  heroes {\n    id\n    description\n    alias\n    picture\n  }\n}\n"
};

module.exports = batch;
