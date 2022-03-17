import { txClient, queryClient, MissingWalletError, registry } from './module'

import { Params } from './module/types/reward/params'
import { RewardPool } from './module/types/reward/reward_pool'

export { Params, RewardPool }

async function initTxClient(vuexGetters) {
  return await txClient(vuexGetters['common/wallet/signer'], {
    addr: vuexGetters['common/env/apiTendermint']
  })
}

async function initQueryClient(vuexGetters) {
  return await queryClient({
    addr: vuexGetters['common/env/apiCosmos']
  })
}

function mergeResults(value, next_values) {
  for (let prop of Object.keys(next_values)) {
    if (Array.isArray(next_values[prop])) {
      value[prop] = [...value[prop], ...next_values[prop]]
    } else {
      value[prop] = next_values[prop]
    }
  }
  return value
}

function getStructure(template) {
  let structure = { fields: [] }
  for (const [key, value] of Object.entries(template)) {
    let field: any = {}
    field.name = key
    field.type = typeof value
    structure.fields.push(field)
  }
  return structure
}

const getDefaultState = () => {
  return {
    Params: {},
    RewardPool: {},
    RewardPoolAll: {},

    _Structure: {
      Params: getStructure(Params.fromPartial({})),
      RewardPool: getStructure(RewardPool.fromPartial({}))
    },
    _Registry: registry,
    _Subscriptions: new Set()
  }
}

// initial state
const state = getDefaultState()

export default {
  namespaced: true,
  state,
  mutations: {
    RESET_STATE(state) {
      Object.assign(state, getDefaultState())
    },
    QUERY(state, { query, key, value }) {
      state[query][JSON.stringify(key)] = value
    },
    SUBSCRIBE(state, subscription) {
      state._Subscriptions.add(JSON.stringify(subscription))
    },
    UNSUBSCRIBE(state, subscription) {
      state._Subscriptions.delete(JSON.stringify(subscription))
    }
  },
  getters: {
    getParams:
      (state) =>
      (params = { params: {} }) => {
        if (!(<any>params).query) {
          ;(<any>params).query = null
        }
        return state.Params[JSON.stringify(params)] ?? {}
      },
    getRewardPool:
      (state) =>
      (params = { params: {} }) => {
        if (!(<any>params).query) {
          ;(<any>params).query = null
        }
        return state.RewardPool[JSON.stringify(params)] ?? {}
      },
    getRewardPoolAll:
      (state) =>
      (params = { params: {} }) => {
        if (!(<any>params).query) {
          ;(<any>params).query = null
        }
        return state.RewardPoolAll[JSON.stringify(params)] ?? {}
      },

    getTypeStructure: (state) => (type) => {
      return state._Structure[type].fields
    },
    getRegistry: (state) => {
      return state._Registry
    }
  },
  actions: {
    init({ dispatch, rootGetters }) {
      console.log('Vuex module: tendermint.spn.reward initialized!')
      if (rootGetters['common/env/client']) {
        rootGetters['common/env/client'].on('newblock', () => {
          dispatch('StoreUpdate')
        })
      }
    },
    resetState({ commit }) {
      commit('RESET_STATE')
    },
    unsubscribe({ commit }, subscription) {
      commit('UNSUBSCRIBE', subscription)
    },
    async StoreUpdate({ state, dispatch }) {
      state._Subscriptions.forEach(async (subscription) => {
        try {
          const sub = JSON.parse(subscription)
          await dispatch(sub.action, sub.payload)
        } catch (e) {
          throw new Error('Subscriptions: ' + e.message)
        }
      })
    },

    async QueryParams(
      { commit, rootGetters, getters },
      {
        options: { subscribe, all } = { subscribe: false, all: false },
        params,
        query = null
      }
    ) {
      try {
        const key = params ?? {}
        const queryClient = await initQueryClient(rootGetters)
        let value = (await queryClient.queryParams()).data

        commit('QUERY', {
          query: 'Params',
          key: { params: { ...key }, query },
          value
        })
        if (subscribe)
          commit('SUBSCRIBE', {
            action: 'QueryParams',
            payload: { options: { all }, params: { ...key }, query }
          })
        return getters['getParams']({ params: { ...key }, query }) ?? {}
      } catch (e) {
        throw new Error(
          'QueryClient:QueryParams API Node Unavailable. Could not perform query: ' +
            e.message
        )
      }
    },

    async QueryRewardPool(
      { commit, rootGetters, getters },
      {
        options: { subscribe, all } = { subscribe: false, all: false },
        params,
        query = null
      }
    ) {
      try {
        const key = params ?? {}
        const queryClient = await initQueryClient(rootGetters)
        let value = (await queryClient.queryRewardPool(key.launchID)).data

        commit('QUERY', {
          query: 'RewardPool',
          key: { params: { ...key }, query },
          value
        })
        if (subscribe)
          commit('SUBSCRIBE', {
            action: 'QueryRewardPool',
            payload: { options: { all }, params: { ...key }, query }
          })
        return getters['getRewardPool']({ params: { ...key }, query }) ?? {}
      } catch (e) {
        throw new Error(
          'QueryClient:QueryRewardPool API Node Unavailable. Could not perform query: ' +
            e.message
        )
      }
    },

    async QueryRewardPoolAll(
      { commit, rootGetters, getters },
      {
        options: { subscribe, all } = { subscribe: false, all: false },
        params,
        query = null
      }
    ) {
      try {
        const key = params ?? {}
        const queryClient = await initQueryClient(rootGetters)
        let value = (await queryClient.queryRewardPoolAll(query)).data

        while (
          all &&
          (<any>value).pagination &&
          (<any>value).pagination.next_key != null
        ) {
          let next_values = (
            await queryClient.queryRewardPoolAll({
              ...query,
              'pagination.key': (<any>value).pagination.next_key
            })
          ).data
          value = mergeResults(value, next_values)
        }
        commit('QUERY', {
          query: 'RewardPoolAll',
          key: { params: { ...key }, query },
          value
        })
        if (subscribe)
          commit('SUBSCRIBE', {
            action: 'QueryRewardPoolAll',
            payload: { options: { all }, params: { ...key }, query }
          })
        return getters['getRewardPoolAll']({ params: { ...key }, query }) ?? {}
      } catch (e) {
        throw new Error(
          'QueryClient:QueryRewardPoolAll API Node Unavailable. Could not perform query: ' +
            e.message
        )
      }
    },

    async sendMsgSetRewards({ rootGetters }, { value, fee = [], memo = '' }) {
      try {
        const txClient = await initTxClient(rootGetters)
        const msg = await txClient.msgSetRewards(value)
        const result = await txClient.signAndBroadcast([msg], {
          fee: { amount: fee, gas: '200000' },
          memo
        })
        return result
      } catch (e) {
        if (e == MissingWalletError) {
          throw new Error(
            'TxClient:MsgSetRewards:Init Could not initialize signing client. Wallet is required.'
          )
        } else {
          throw new Error(
            'TxClient:MsgSetRewards:Send Could not broadcast Tx: ' + e.message
          )
        }
      }
    },

    async MsgSetRewards({ rootGetters }, { value }) {
      try {
        const txClient = await initTxClient(rootGetters)
        const msg = await txClient.msgSetRewards(value)
        return msg
      } catch (e) {
        if (e == MissingWalletError) {
          throw new Error(
            'TxClient:MsgSetRewards:Init Could not initialize signing client. Wallet is required.'
          )
        } else {
          throw new Error(
            'TxClient:MsgSetRewards:Create Could not create message: ' +
              e.message
          )
        }
      }
    }
  }
}
