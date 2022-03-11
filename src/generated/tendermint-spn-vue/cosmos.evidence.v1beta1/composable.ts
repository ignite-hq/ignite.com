// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/cosmos.evidence.v1beta1/module";

type SendMsgSubmitEvidenceType = typeof Module.prototype.sendMsgSubmitEvidence;

type QueryEvidenceType = typeof Module.prototype.queryEvidence;
type QueryAllEvidenceType = typeof Module.prototype.queryAllEvidence;

type Response = {
  $s: Store<"cosmos.evidence.v1beta1", PiniaState, {}, {}>;
  sendMsgSubmitEvidence: SendMsgSubmitEvidenceType;

  queryEvidence: QueryEvidenceType;
  queryAllEvidence: QueryAllEvidenceType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence,
  } = $ignt.CosmosEvidenceV1Beta1;

  return {
    $s,

    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence,
  };
}

export { useModule };
