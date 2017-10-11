/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ListHeroes_movie = {|
  +id: ?string;
  +heroes: ?$ReadOnlyArray<?{|
    +id: ?string;
    +description: ?string;
    +alias: string;
    +picture: ?string;
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListHeroes_movie",
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
  "type": "Movie"
};

module.exports = fragment;
