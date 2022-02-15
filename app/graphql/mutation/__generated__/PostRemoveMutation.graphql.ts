/**
 * @generated SignedSource<<0cef4e2f8a8a5482a6c3d25e6d01d576>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PostRemoveMutation$variables = {
  id: string;
};
export type PostRemoveMutation$data = {
  readonly removePost: {
    readonly ok: boolean | null;
    readonly error: string | null;
    readonly data: {
      readonly id: string;
      readonly title: string | null;
      readonly createdAt: string | null;
      readonly updatedAt: string | null;
    } | null;
  } | null;
};
export type PostRemoveMutation = {
  variables: PostRemoveMutation$variables;
  response: PostRemoveMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "PostResult",
    "kind": "LinkedField",
    "name": "removePost",
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
        "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostRemoveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostRemoveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "21655af5d037942367b9a9974610c090",
    "id": null,
    "metadata": {},
    "name": "PostRemoveMutation",
    "operationKind": "mutation",
    "text": "mutation PostRemoveMutation(\n  $id: ID!\n) {\n  removePost(id: $id) {\n    ok\n    error\n    data {\n      id\n      title\n      createdAt\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d897b814f7e4c76ad1e0209590499cfc";

export default node;
