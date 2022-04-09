// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Module from '../../tendermint-spn-ts-client/cosmos.evidence.v1beta1/module'
import useIgnite from '../useIgnite'
import { unref } from 'vue'

type SendMsgSubmitEvidenceType = typeof Module.prototype.sendMsgSubmitEvidence

type QueryEvidenceType = typeof Module.prototype.queryEvidence
type QueryAllEvidenceType = typeof Module.prototype.queryAllEvidence

type Response = {
  sendMsgSubmitEvidence: SendMsgSubmitEvidenceType

  queryEvidence: QueryEvidenceType
  queryAllEvidence: QueryAllEvidenceType
}

function useModule(): Response {
  // ignite
  let { ignite } = useIgnite()

  let {
    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence
  } = unref(ignite.cosmosEvidenceV1Beta1)

  sendMsgSubmitEvidence = sendMsgSubmitEvidence.bind(
    ignite.cosmosEvidenceV1Beta1
  )

  queryEvidence = queryEvidence.bind(ignite.cosmosEvidenceV1Beta1)

  queryAllEvidence = queryAllEvidence.bind(ignite.cosmosEvidenceV1Beta1)

  return {
    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence
  }
}

export { useModule }
