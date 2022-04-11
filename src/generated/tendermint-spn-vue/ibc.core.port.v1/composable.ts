// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/ibc.core.port.v1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type Response = {}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {} = unref(ignite.ibcCorePortV1)

  return {}
}

export { useModule }
