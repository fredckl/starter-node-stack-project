/**
 * @generated SignedSource<<a7546e6698a3e2789fe5331111be0cf9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PostsQuery$variables = {};
export type PostsQuery$data = {
  readonly posts: {
    readonly ok: boolean | null;
    readonly error: string | null;
    readonly data: ReadonlyArray<{
      readonly id: string;
      readonly title: string | null;
      readonly createdAt: string | null;
      readonly updatedAt: string | null;
    } | null> | null;
  } | null;
};
export type PostsQuery = {
  variables: PostsQuery$variables;
  response: PostsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PostsResult",
    "kind": "LinkedField",
    "name": "posts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ecf2dd2ff221d7a1142ed019d6eab222",
    "id": null,
    "metadata": {},
    "name": "PostsQuery",
    "operationKind": "query",
    "text": "query PostsQuery {\n  posts {\n    ok\n    error\n    data {\n      id\n      title\n      createdAt\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1324a0a60a4b98b073cca478dabdf93d";

export default node;
