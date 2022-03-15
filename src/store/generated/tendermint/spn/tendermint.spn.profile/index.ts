import { txClient, queryClient, MissingWalletError , registry} from './module'

import { Coordinator } from "./module/types/profile/coordinator"
import { CoordinatorDescription } from "./module/types/profile/coordinator"
import { CoordinatorByAddress } from "./module/types/profile/coordinator"
import { Validator } from "./module/types/profile/validator"
import { ValidatorDescription } from "./module/types/profile/validator"
import { ValidatorByOperatorAddress } from "./module/types/profile/validator"


export { Coordinator, CoordinatorDescription, CoordinatorByAddress, Validator, ValidatorDescription, ValidatorByOperatorAddress };

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
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
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
				Validator: {},
				ValidatorAll: {},
				ValidatorByOperatorAddress: {},
				Coordinator: {},
				CoordinatorAll: {},
				CoordinatorByAddress: {},
				
				_Structure: {
						Coordinator: getStructure(Coordinator.fromPartial({})),
						CoordinatorDescription: getStructure(CoordinatorDescription.fromPartial({})),
						CoordinatorByAddress: getStructure(CoordinatorByAddress.fromPartial({})),
						Validator: getStructure(Validator.fromPartial({})),
						ValidatorDescription: getStructure(ValidatorDescription.fromPartial({})),
						ValidatorByOperatorAddress: getStructure(ValidatorByOperatorAddress.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
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
				getValidator: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Validator[JSON.stringify(params)] ?? {}
		},
				getValidatorAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ValidatorAll[JSON.stringify(params)] ?? {}
		},
				getValidatorByOperatorAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ValidatorByOperatorAddress[JSON.stringify(params)] ?? {}
		},
				getCoordinator: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Coordinator[JSON.stringify(params)] ?? {}
		},
				getCoordinatorAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CoordinatorAll[JSON.stringify(params)] ?? {}
		},
				getCoordinatorByAddress: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.CoordinatorByAddress[JSON.stringify(params)] ?? {}
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
			console.log('Vuex module: tendermint.spn.profile initialized!')
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
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryValidator({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidator( key.address)).data
				
					
				commit('QUERY', { query: 'Validator', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidator', payload: { options: { all }, params: {...key},query }})
				return getters['getValidator']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidator API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidatorAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidatorAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryValidatorAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ValidatorAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidatorAll', payload: { options: { all }, params: {...key},query }})
				return getters['getValidatorAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidatorAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryValidatorByOperatorAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryValidatorByOperatorAddress( key.operatorAddress)).data
				
					
				commit('QUERY', { query: 'ValidatorByOperatorAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryValidatorByOperatorAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getValidatorByOperatorAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryValidatorByOperatorAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCoordinator({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCoordinator( key.coordinatorID)).data
				
					
				commit('QUERY', { query: 'Coordinator', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCoordinator', payload: { options: { all }, params: {...key},query }})
				return getters['getCoordinator']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCoordinator API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCoordinatorAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCoordinatorAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await queryClient.queryCoordinatorAll({...query, 'pagination.key':(<any> value).pagination.next_key})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'CoordinatorAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCoordinatorAll', payload: { options: { all }, params: {...key},query }})
				return getters['getCoordinatorAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCoordinatorAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryCoordinatorByAddress({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryCoordinatorByAddress( key.address)).data
				
					
				commit('QUERY', { query: 'CoordinatorByAddress', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryCoordinatorByAddress', payload: { options: { all }, params: {...key},query }})
				return getters['getCoordinatorByAddress']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryCoordinatorByAddress API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCreateCoordinator({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCoordinator(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCoordinator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCoordinator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCoordinatorAddress({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCoordinatorAddress(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCoordinatorAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCoordinatorAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateCoordinatorDescription({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCoordinatorDescription(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCoordinatorDescription:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCoordinatorDescription:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgDisableCoordinator({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDisableCoordinator(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDisableCoordinator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDisableCoordinator:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgUpdateValidatorDescription({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidatorDescription(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidatorDescription:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateValidatorDescription:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgAddValidatorOperatorAddress({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddValidatorOperatorAddress(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddValidatorOperatorAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddValidatorOperatorAddress:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCreateCoordinator({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreateCoordinator(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgCreateCoordinator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgCreateCoordinator:Create Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgUpdateCoordinatorAddress({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCoordinatorAddress(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCoordinatorAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCoordinatorAddress:Create Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgUpdateCoordinatorDescription({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateCoordinatorDescription(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateCoordinatorDescription:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateCoordinatorDescription:Create Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgDisableCoordinator({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgDisableCoordinator(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgDisableCoordinator:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgDisableCoordinator:Create Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgUpdateValidatorDescription({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgUpdateValidatorDescription(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgUpdateValidatorDescription:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgUpdateValidatorDescription:Create Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgAddValidatorOperatorAddress({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgAddValidatorOperatorAddress(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgAddValidatorOperatorAddress:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgAddValidatorOperatorAddress:Create Could not create message: ' + e.message)
					
				}
			}
		},
		
	}
}
