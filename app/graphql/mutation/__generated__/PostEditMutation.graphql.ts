/**
 * @generated SignedSource<<c879a0550975cf01249febddd0050f32>>
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
export type PostEditMutation$variables = {
  input: PostInput;
  id: string;
};
export type PostEditMutation$data = {
  readonly updatePost: {
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
export type PostEditMutation = {
  variables: PostEditMutation$variables;
  response: PostEditMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "PostResult",
    "kind": "LinkedField",
    "name": "updatePost",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostEditMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostEditMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b71e5b048cd86c20e44850a8ee3548ec",
    "id": null,
    "metadata": {},
    "name": "PostEditMutation",
    "operationKind": "mutation",
    "text": "mutation PostEditMutation(\n  $input: PostInput!\n  $id: ID!\n) {\n  updatePost(input: $input, id: $id) {\n    ok\n    error\n    data {\n      id\n      title\n      createdAt\n      updatedAt\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ee9942733a45a4ad275eaee28252915c";

export default node;
