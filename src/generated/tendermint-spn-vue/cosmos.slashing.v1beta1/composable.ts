// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/cosmos.slashing.v1beta1/module";

type SendMsgUnjailType = typeof Module.prototype.sendMsgUnjail;

type QueryParamsType = typeof Module.prototype.queryParams;
type QuerySigningInfoType = typeof Module.prototype.querySigningInfo;
type QuerySigningInfosType = typeof Module.prototype.querySigningInfos;

type Response = {
  $s: Store<"cosmos.slashing.v1beta1", PiniaState, {}, {}>;
  sendMsgUnjail: SendMsgUnjailType;

  queryParams: QueryParamsType;
  querySigningInfo: QuerySigningInfoType;
  querySigningInfos: QuerySigningInfosType;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {
    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos,
  } = $ignt.CosmosSlashingV1Beta1;

  return {
    $s,

    sendMsgUnjail,

    queryParams,

    querySigningInfo,

    querySigningInfos,
  };
}

export { useModule };
