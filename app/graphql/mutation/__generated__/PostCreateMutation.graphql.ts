/**
 * @generated SignedSource<<86e6b18d3c24d1f6c6830a5da2fe2e9c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type PostInput = {
  title?: string | null;
};
export type PostCreateMutation$variables = {
  input: PostInput;
};
export type PostCreateMutation$data = {
  readonly createPost: {
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
export type PostCreateMutation = {
  variables: PostCreateMutation$variables;
  response: PostCreateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PostResult",
    "kind": "LinkedField",
    "name": "createPost",
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
    "name": "PostCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ae992e3be55698cf93601fc836249f5e",
    "id": null,
    "metadata": {},
    "name": "PostCreateMutation",
    "operationKind": "mutation",
    "text": "mutation PostCreateMutation(\n  $input: PostInput!\n) {\n  createPost(input: $input) {\n    ok\n    error\n    data {\n      id\n      title\n      createdAt\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b11583ea146f7de68fbcc17afdccd957";

export default node;
