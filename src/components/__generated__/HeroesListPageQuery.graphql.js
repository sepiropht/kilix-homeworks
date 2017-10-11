/**
 * @flow
 * @relayHash ad462b41b91895a76bbe8e7a08b0f0ce
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
query HeroesListPageQuery {
  heroes {
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
  picture
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HeroesListPageQuery",
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
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "HeroesListPageQuery",
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
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HeroesListPageQuery {\n  heroes {\n    ...Heroes_heroes\n    id\n  }\n}\n\nfragment Heroes_heroes on Hero {\n  ...Hero_hero\n}\n\nfragment Hero_hero on Hero {\n  id\n  description\n  alias\n  picture\n}\n"
};

module.exports = batch;
