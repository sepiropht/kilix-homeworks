/**
 * @flow
 * @relayHash 5c44657938d5d36fcdcab91a74a1e2c6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HeroesListPageQueryResponse = {|
  +heroes: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query HeroesListPageQuery(
  $search: String
) {
  heroes(search: $search) {
    ...Heroes_heroes
    id
  }
}

fragment Heroes_heroes on Hero {
  ...Hero_hero
}

fragment Hero_hero on Hero {
  id
  description
  alias
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeroesListPageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "String"
          }
        ],
        "concreteType": "Hero",
        "name": "heroes",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Heroes_heroes",
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
  "name": "HeroesListPageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "HeroesListPageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "String"
          }
        ],
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
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HeroesListPageQuery(\n  $search: String\n) {\n  heroes(search: $search) {\n    ...Heroes_heroes\n    id\n  }\n}\n\nfragment Heroes_heroes on Hero {\n  ...Hero_hero\n}\n\nfragment Hero_hero on Hero {\n  id\n  description\n  alias\n}\n"
};

module.exports = batch;
