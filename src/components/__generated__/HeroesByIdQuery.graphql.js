/**
 * @flow
 * @relayHash cc6d16da11f881ad6573cdd553a83987
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HeroesByIdQueryResponse = {|
  +hero: ?{| |};
|};
*/


/*
query HeroesByIdQuery(
  $id: ID!
) {
  hero(id: $id) {
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
    "name": "HeroesByIdQuery",
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
  "name": "HeroesByIdQuery",
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
    "name": "HeroesByIdQuery",
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
    ]
  },
  "text": "query HeroesByIdQuery(\n  $id: ID!\n) {\n  hero(id: $id) {\n    ...Heroes_heroes\n    id\n  }\n}\n\nfragment Heroes_heroes on Hero {\n  ...Hero_hero\n}\n\nfragment Hero_hero on Hero {\n  id\n  description\n  alias\n  picture\n}\n"
};

module.exports = batch;
