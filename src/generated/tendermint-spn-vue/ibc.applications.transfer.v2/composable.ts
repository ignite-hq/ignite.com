// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Store } from "pinia";
import { usePiniaStore, PiniaState } from "./";

import { Ignite } from "tendermint-spn-ts-client";
import Module from "tendermint-spn-ts-client/ibc.applications.transfer.v2/module";

type Response = {
  $s: Store<"ibc.applications.transfer.v2", PiniaState, {}, {}>;
};

type Params = {
  $ignt: Ignite;
};

function useModule({ $ignt }: Params): Response {
  let $s = usePiniaStore();

  let {} = $ignt.IbcApplicationsTransferV2;

  return {
    $s,
  };
}

export { useModule };
