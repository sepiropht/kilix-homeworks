/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Movies_heroes = $ReadOnlyArray<{| |}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Movies_heroes",
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Movie_hero",
      "args": null
    }
  ],
  "type": "Hero"
};

module.exports = fragment;
