/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type repositoryQueryVariables = {||};
export type repositoryQueryResponse = {|
  +repository: ?{|
    +name: string
  |}
|};
export type repositoryQuery = {|
  variables: repositoryQueryVariables,
  response: repositoryQueryResponse,
|};
*/


/*
query repositoryQuery {
  repository(owner: "snowwshiro", name: "snowwshiro") {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "snowwshiro"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "snowwshiro"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "repositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"snowwshiro\",owner:\"snowwshiro\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "repositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"snowwshiro\",owner:\"snowwshiro\")"
      }
    ]
  },
  "params": {
    "cacheID": "040c23e52477344d0efcabcf714c8593",
    "id": null,
    "metadata": {},
    "name": "repositoryQuery",
    "operationKind": "query",
    "text": "query repositoryQuery {\n  repository(owner: \"snowwshiro\", name: \"snowwshiro\") {\n    name\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b75dbb9a72142f335872f9804b9bfad';

module.exports = node;
