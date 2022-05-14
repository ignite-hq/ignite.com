/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CampaignCampaign {
  /** @format uint64 */
  campaignID?: string
  campaignName?: string

  /** @format uint64 */
  coordinatorID?: string

  /** @format int64 */
  createdAt?: string

  /** @format uint64 */
  mainnetID?: string
  mainnetInitialized?: boolean
  totalSupply?: V1Beta1Coin[]
  allocatedShares?: V1Beta1Coin[]

  /** @format byte */
  metadata?: string
}

export interface CampaignCampaignChains {
  /** @format uint64 */
  campaignID?: string
  chains?: string[]
}

export interface CampaignCampaignSummary {
  campaign?: CampaignCampaign
  hasMostRecentChain?: boolean
  mostRecentChain?: CampaignMostRecentChain
  incentivized?: boolean
  rewards?: V1Beta1Coin[]
  rewardsDistributed?: boolean
  previousRewards?: V1Beta1Coin[]
}

export interface CampaignMainnetAccount {
  /** @format uint64 */
  campaignID?: string
  address?: string
  shares?: V1Beta1Coin[]
}

export interface CampaignMainnetAccountBalance {
  /** @format uint64 */
  campaignID?: string
  address?: string
  coins?: V1Beta1Coin[]
}

export interface CampaignMainnetVestingAccount {
  /** @format uint64 */
  campaignID?: string
  address?: string
  vestingOptions?: CampaignShareVestingOptions
}

export interface CampaignMostRecentChain {
  /** @format uint64 */
  launchID?: string
  launchTriggered?: boolean
  sourceURL?: string
  sourceHash?: string

  /** @format uint64 */
  requestNb?: string

  /** @format uint64 */
  validatorNb?: string
}

export type CampaignMsgAddSharesResponse = object

export type CampaignMsgAddVestingOptionsResponse = object

export type CampaignMsgBurnVouchersResponse = object

export interface CampaignMsgCreateCampaignResponse {
  /** @format uint64 */
  campaignID?: string
}

export type CampaignMsgEditCampaignResponse = object

export interface CampaignMsgInitializeMainnetResponse {
  /** @format uint64 */
  mainnetID?: string
}

export type CampaignMsgMintVouchersResponse = object

export type CampaignMsgRedeemVouchersResponse = object

export type CampaignMsgUnredeemVouchersResponse = object

export type CampaignMsgUpdateTotalSupplyResponse = object

/**
 * Params defines the set of params for the campaign module.
 */
export interface CampaignParams {
  totalSupplyRange?: CampaignTotalSupplyRange
  campaignCreationFee?: V1Beta1Coin[]
}

export interface CampaignQueryAllCampaignResponse {
  campaign?: CampaignCampaign[]

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse
}

export interface CampaignQueryAllMainnetAccountBalanceResponse {
  mainnetAccountBalance?: CampaignMainnetAccountBalance[]

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse
}

export interface CampaignQueryAllMainnetAccountResponse {
  mainnetAccount?: CampaignMainnetAccount[]

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse
}

export interface CampaignQueryAllMainnetVestingAccountResponse {
  mainnetVestingAccount?: CampaignMainnetVestingAccount[]

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse
}

export interface CampaignQueryAuctionsOfCampaignResponse {
  auctionIDs?: string[]
}

export interface CampaignQueryCampaignSummariesResponse {
  campaignSummaries?: CampaignCampaignSummary[]

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse
}

export interface CampaignQueryCampaignSummaryResponse {
  campaignSummary?: CampaignCampaignSummary
}

export interface CampaignQueryGetCampaignChainsResponse {
  campaignChains?: CampaignCampaignChains
}

export interface CampaignQueryGetCampaignResponse {
  campaign?: CampaignCampaign
}

export interface CampaignQueryGetMainnetAccountBalanceResponse {
  mainnetAccountBalance?: CampaignMainnetAccountBalance
}

export interface CampaignQueryGetMainnetAccountResponse {
  mainnetAccount?: CampaignMainnetAccount
}

export interface CampaignQueryGetMainnetVestingAccountResponse {
  mainnetVestingAccount?: CampaignMainnetVestingAccount
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CampaignQueryParamsResponse {
  /** Params defines the set of params for the campaign module. */
  params?: CampaignParams
}

export interface CampaignQueryTotalSharesResponse {
  /** @format uint64 */
  totalShares?: string
}

export interface CampaignShareDelayedVesting {
  totalShares?: V1Beta1Coin[]
  vesting?: V1Beta1Coin[]

  /** @format int64 */
  endTime?: string
}

export interface CampaignShareVestingOptions {
  delayedVesting?: CampaignShareDelayedVesting
}

export interface CampaignTotalSupplyRange {
  minTotalSupply?: string
  maxTotalSupply?: string
}

export interface ProtobufAny {
  '@type'?: string
}

export interface RpcStatus {
  /** @format int32 */
  code?: number
  message?: string
  details?: ProtobufAny[]
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string
  amount?: string
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string

  /** @format uint64 */
  total?: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, 'body' | 'bodyUsed'>
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = ''
  private securityData: SecurityDataType = null as any
  private securityWorker: null | ApiConfig<SecurityDataType>['securityWorker'] =
    null
  private abortControllers = new Map<CancelToken, AbortController>()

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]

    return (
      encodeURIComponent(key) +
      '=' +
      encodeURIComponent(
        Array.isArray(value)
          ? value.join(',')
          : typeof value === 'number'
          ? value
          : `${value}`
      )
    )
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    )
    return keys
      .map((key) =>
        typeof query[key] === 'object' && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key])
        return data
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  }

  private mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  private createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = 'json',
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      (secure &&
        this.securityWorker &&
        this.securityWorker(this.securityData)) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]

    return fetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
          ...(requestParams.headers || {})
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data
          } else {
            r.error = data
          }
          return r
        })
        .catch((e) => {
          r.error = e
          return r
        })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title campaign/campaign.proto
 * @version version not set
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAuctionsOfCampaign
   * @summary Queries a list of auction IDs of a campaign
   * @request GET:/tendermint/spn/campaign/auctions_of_campaign/{campaignID}
   */
  queryAuctionsOfCampaign = (campaignID: string, params: RequestParams = {}) =>
    this.request<CampaignQueryAuctionsOfCampaignResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/auctions_of_campaign/${campaignID}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryCampaignAll
   * @summary Queries a list of campaign items.
   * @request GET:/tendermint/spn/campaign/campaign
   */
  queryCampaignAll = (
    query?: {
      'pagination.key'?: string
      'pagination.offset'?: string
      'pagination.limit'?: string
      'pagination.count_total'?: boolean
      'pagination.reverse'?: boolean
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryAllCampaignResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/campaign`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryCampaign
   * @summary Queries a campaign by id.
   * @request GET:/tendermint/spn/campaign/campaign/{campaignID}
   */
  queryCampaign = (campaignID: string, params: RequestParams = {}) =>
    this.request<CampaignQueryGetCampaignResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/campaign/${campaignID}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryCampaignChains
   * @summary Queries a campaignChains by index.
   * @request GET:/tendermint/spn/campaign/campaign_chains/{campaignID}
   */
  queryCampaignChains = (campaignID: string, params: RequestParams = {}) =>
    this.request<CampaignQueryGetCampaignChainsResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/campaign_chains/${campaignID}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryCampaignSummaries
   * @summary Queries a list of campaign summaries
   * @request GET:/tendermint/spn/campaign/campaign_summary
   */
  queryCampaignSummaries = (
    query?: {
      'pagination.key'?: string
      'pagination.offset'?: string
      'pagination.limit'?: string
      'pagination.count_total'?: boolean
      'pagination.reverse'?: boolean
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryCampaignSummariesResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/campaign_summary`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryCampaignSummary
   * @summary Queries a campaign summary
   * @request GET:/tendermint/spn/campaign/campaign_summary/{campaignID}
   */
  queryCampaignSummary = (campaignID: string, params: RequestParams = {}) =>
    this.request<CampaignQueryCampaignSummaryResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/campaign_summary/${campaignID}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryMainnetAccountAll
   * @summary Queries a list of mainnetAccount items.
   * @request GET:/tendermint/spn/campaign/mainnet_account/{campaignID}
   */
  queryMainnetAccountAll = (
    campaignID: string,
    query?: {
      'pagination.key'?: string
      'pagination.offset'?: string
      'pagination.limit'?: string
      'pagination.count_total'?: boolean
      'pagination.reverse'?: boolean
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryAllMainnetAccountResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/mainnet_account/${campaignID}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryMainnetAccount
   * @summary Queries a mainnetAccount by index.
   * @request GET:/tendermint/spn/campaign/mainnet_account/{campaignID}/{address}
   */
  queryMainnetAccount = (
    campaignID: string,
    address: string,
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryGetMainnetAccountResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/mainnet_account/${campaignID}/${address}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryMainnetAccountBalanceAll
   * @summary Queries a list of mainnetAccountBalance items.
   * @request GET:/tendermint/spn/campaign/mainnet_account_balance/{campaignID}
   */
  queryMainnetAccountBalanceAll = (
    campaignID: string,
    query?: {
      'pagination.key'?: string
      'pagination.offset'?: string
      'pagination.limit'?: string
      'pagination.count_total'?: boolean
      'pagination.reverse'?: boolean
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryAllMainnetAccountBalanceResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/mainnet_account_balance/${campaignID}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryMainnetAccountBalance
   * @summary Queries a mainnetAccountBalance by index.
   * @request GET:/tendermint/spn/campaign/mainnet_account_balance/{campaignID}/{address}
   */
  queryMainnetAccountBalance = (
    campaignID: string,
    address: string,
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryGetMainnetAccountBalanceResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/mainnet_account_balance/${campaignID}/${address}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryMainnetVestingAccountAll
   * @summary Queries a list of mainnetVestingAccount items.
   * @request GET:/tendermint/spn/campaign/mainnet_vesting_account/{campaignID}
   */
  queryMainnetVestingAccountAll = (
    campaignID: string,
    query?: {
      'pagination.key'?: string
      'pagination.offset'?: string
      'pagination.limit'?: string
      'pagination.count_total'?: boolean
      'pagination.reverse'?: boolean
    },
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryAllMainnetVestingAccountResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/mainnet_vesting_account/${campaignID}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryMainnetVestingAccount
   * @summary Queries a mainnetVestingAccount by index.
   * @request GET:/tendermint/spn/campaign/mainnet_vesting_account/{campaignID}/{address}
   */
  queryMainnetVestingAccount = (
    campaignID: string,
    address: string,
    params: RequestParams = {}
  ) =>
    this.request<CampaignQueryGetMainnetVestingAccountResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/mainnet_vesting_account/${campaignID}/${address}`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params queries the parameters of the module.
   * @request GET:/tendermint/spn/campaign/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<CampaignQueryParamsResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/params`,
      method: 'GET',
      format: 'json',
      ...params
    })

  /**
   * No description
   *
   * @tags Query
   * @name QueryTotalShares
   * @summary Queries the TotalShares value
   * @request GET:/tendermint/spn/campaign/total_shares
   */
  queryTotalShares = (params: RequestParams = {}) =>
    this.request<CampaignQueryTotalSharesResponse, RpcStatus>({
      path: `/tendermint/spn/campaign/total_shares`,
      method: 'GET',
      format: 'json',
      ...params
    })
}
