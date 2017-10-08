/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Heroes_heroes = $ReadOnlyArray<{| |}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Heroes_heroes",
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Hero_hero",
      "args": null
    }
  ],
  "type": "Hero"
};

module.exports = fragment;
