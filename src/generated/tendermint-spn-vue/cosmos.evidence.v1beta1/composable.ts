// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Ignite } from 'tendermint-spn-ts-client'
import Module from 'tendermint-spn-ts-client/cosmos.evidence.v1beta1/module'

type SendMsgSubmitEvidenceType = typeof Module.prototype.sendMsgSubmitEvidence

type QueryEvidenceType = typeof Module.prototype.queryEvidence
type QueryAllEvidenceType = typeof Module.prototype.queryAllEvidence

type Response = {
  sendMsgSubmitEvidence: SendMsgSubmitEvidenceType

  queryEvidence: QueryEvidenceType
  queryAllEvidence: QueryAllEvidenceType
}

type Params = {
  ignite: Ignite
}

function useModule({ ignite }: Params): Response {
  let {
    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence
  } = ignite.CosmosEvidenceV1Beta1

  sendMsgSubmitEvidence = sendMsgSubmitEvidence.bind(
    ignite.CosmosEvidenceV1Beta1
  )

  queryEvidence = queryEvidence.bind(ignite.CosmosEvidenceV1Beta1)

  queryAllEvidence = queryAllEvidence.bind(ignite.CosmosEvidenceV1Beta1)

  return {
    sendMsgSubmitEvidence,

    queryEvidence,

    queryAllEvidence
  }
}

export { useModule }
