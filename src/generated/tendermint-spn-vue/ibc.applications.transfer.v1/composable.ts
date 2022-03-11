// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/ibc.applications.transfer.v1/module";

type SendMsgTransferType = typeof Module.prototype.sendMsgTransfer;

type QueryDenomTraceType = typeof Module.prototype.queryDenomTrace;
type QueryDenomTracesType = typeof Module.prototype.queryDenomTraces;
type QueryParamsType = typeof Module.prototype.queryParams;

type Response = {
  $s: Store<"ibc.applications.transfer.v1", PiniaState, {}, {}>;
  sendMsgTransfer: SendMsgTransferType;

  queryDenomTrace: QueryDenomTraceType;
  queryDenomTraces: QueryDenomTracesType;
  queryParams: QueryParamsType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgTransfer,

    queryDenomTrace,

    queryDenomTraces,

    queryParams,
  } = $ignt.IbcApplicationsTransferV1;

  return {
    $s,

    sendMsgTransfer,

    queryDenomTrace,

    queryDenomTraces,

    queryParams,
  };
}

export { useModule };
