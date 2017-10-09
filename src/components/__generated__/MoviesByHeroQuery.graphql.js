/**
 * @flow
 * @relayHash 9c940d469f73ebdf46a1e4ab301eed71
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MoviesByHeroQueryResponse = {|
  +hero: ?{| |};
|};
*/


/*
query MoviesByHeroQuery(
  $id: ID!
) {
  hero(id: $id) {
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
    "name": "MoviesByHeroQuery",
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
        "concreteType": "Hero",
        "name": "hero",
        "plural": false,
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
  "name": "MoviesByHeroQuery",
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
    "name": "MoviesByHeroQuery",
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
        "concreteType": "Hero",
        "name": "hero",
        "plural": false,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query MoviesByHeroQuery(\n  $id: ID!\n) {\n  hero(id: $id) {\n    ...Movies_heroes\n    id\n  }\n}\n\nfragment Movies_heroes on Hero {\n  ...Movie_hero\n}\n\nfragment Movie_hero on Hero {\n  movies {\n    id\n    name\n    production_year\n    director\n  }\n}\n"
};

module.exports = batch;
