// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { Registry } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import axios from 'axios'
import { EventEmitter } from 'events'
import ReconnectingWebSocket from 'reconnecting-websocket'
import { Module as CosmosAuthV1Beta1, msgTypes as CosmosAuthV1Beta1MsgTypes } from './cosmos.auth.v1beta1'
import { Module as CosmosBankV1Beta1, msgTypes as CosmosBankV1Beta1MsgTypes } from './cosmos.bank.v1beta1'
import { Module as CosmosBaseTendermintV1Beta1, msgTypes as CosmosBaseTendermintV1Beta1MsgTypes } from './cosmos.base.tendermint.v1beta1'
import { Module as CosmosCrisisV1Beta1, msgTypes as CosmosCrisisV1Beta1MsgTypes } from './cosmos.crisis.v1beta1'
import { Module as CosmosDistributionV1Beta1, msgTypes as CosmosDistributionV1Beta1MsgTypes } from './cosmos.distribution.v1beta1'
import { Module as CosmosEvidenceV1Beta1, msgTypes as CosmosEvidenceV1Beta1MsgTypes } from './cosmos.evidence.v1beta1'
import { Module as CosmosGovV1Beta1, msgTypes as CosmosGovV1Beta1MsgTypes } from './cosmos.gov.v1beta1'
import { Module as CosmosMintV1Beta1, msgTypes as CosmosMintV1Beta1MsgTypes } from './cosmos.mint.v1beta1'
import { Module as CosmosParamsV1Beta1, msgTypes as CosmosParamsV1Beta1MsgTypes } from './cosmos.params.v1beta1'
import { Module as CosmosSlashingV1Beta1, msgTypes as CosmosSlashingV1Beta1MsgTypes } from './cosmos.slashing.v1beta1'
import { Module as CosmosStakingV1Beta1, msgTypes as CosmosStakingV1Beta1MsgTypes } from './cosmos.staking.v1beta1'
import { Module as CosmosTxV1Beta1, msgTypes as CosmosTxV1Beta1MsgTypes } from './cosmos.tx.v1beta1'
import { Module as CosmosUpgradeV1Beta1, msgTypes as CosmosUpgradeV1Beta1MsgTypes } from './cosmos.upgrade.v1beta1'
import { Module as CosmosVestingV1Beta1, msgTypes as CosmosVestingV1Beta1MsgTypes } from './cosmos.vesting.v1beta1'
import { Module as IbcApplicationsTransferV1, msgTypes as IbcApplicationsTransferV1MsgTypes } from './ibc.applications.transfer.v1'
import { Module as IbcCoreChannelV1, msgTypes as IbcCoreChannelV1MsgTypes } from './ibc.core.channel.v1'
import { Module as IbcCoreClientV1, msgTypes as IbcCoreClientV1MsgTypes } from './ibc.core.client.v1'
import { Module as IbcCoreConnectionV1, msgTypes as IbcCoreConnectionV1MsgTypes } from './ibc.core.connection.v1'
import { Module as IbcCorePortV1, msgTypes as IbcCorePortV1MsgTypes } from './ibc.core.port.v1'
import { Module as TendermintFundraising, msgTypes as TendermintFundraisingMsgTypes } from './tendermint.fundraising'
import { Module as TendermintSpnCampaign, msgTypes as TendermintSpnCampaignMsgTypes } from './tendermint.spn.campaign'
import { Module as TendermintSpnLaunch, msgTypes as TendermintSpnLaunchMsgTypes } from './tendermint.spn.launch'
import { Module as TendermintSpnMonitoringc, msgTypes as TendermintSpnMonitoringcMsgTypes } from './tendermint.spn.monitoringc'
import { Module as TendermintSpnMonitoringp, msgTypes as TendermintSpnMonitoringpMsgTypes } from './tendermint.spn.monitoringp'
import { Module as TendermintSpnParticipation, msgTypes as TendermintSpnParticipationMsgTypes } from './tendermint.spn.participation'
import { Module as TendermintSpnProfile, msgTypes as TendermintSpnProfileMsgTypes } from './tendermint.spn.profile'
import { Module as TendermintSpnReward, msgTypes as TendermintSpnRewardMsgTypes } from './tendermint.spn.reward'


const registry = new Registry([
  ...CosmosAuthV1Beta1MsgTypes,
  ...CosmosBankV1Beta1MsgTypes,
  ...CosmosBaseTendermintV1Beta1MsgTypes,
  ...CosmosCrisisV1Beta1MsgTypes,
  ...CosmosDistributionV1Beta1MsgTypes,
  ...CosmosEvidenceV1Beta1MsgTypes,
  ...CosmosGovV1Beta1MsgTypes,
  ...CosmosMintV1Beta1MsgTypes,
  ...CosmosParamsV1Beta1MsgTypes,
  ...CosmosSlashingV1Beta1MsgTypes,
  ...CosmosStakingV1Beta1MsgTypes,
  ...CosmosTxV1Beta1MsgTypes,
  ...CosmosUpgradeV1Beta1MsgTypes,
  ...CosmosVestingV1Beta1MsgTypes,
  ...IbcApplicationsTransferV1MsgTypes,
  ...IbcCoreChannelV1MsgTypes,
  ...IbcCoreClientV1MsgTypes,
  ...IbcCoreConnectionV1MsgTypes,
  ...IbcCorePortV1MsgTypes,
  ...TendermintFundraisingMsgTypes,
  ...TendermintSpnCampaignMsgTypes,
  ...TendermintSpnLaunchMsgTypes,
  ...TendermintSpnMonitoringcMsgTypes,
  ...TendermintSpnMonitoringpMsgTypes,
  ...TendermintSpnParticipationMsgTypes,
  ...TendermintSpnProfileMsgTypes,
  ...TendermintSpnRewardMsgTypes,
  
])

interface Environment {
  chainID?: string;
  chainName?: string;
  apiURL: string;
  rpcURL: string;
  wsURL: string;
  prefix?: string
}

interface EnvironmentStatus {
  apiConnected: boolean
  rpcConnected: boolean
  wsConnected: boolean
}

interface IgniteParams {
  env: Environment;
}

class Ignite {
    private _env: Environment
    private _envStatus: EnvironmentStatus = {
        apiConnected: false,
        rpcConnected: false,
        wsConnected: false
    }
    private _ws?: WebSocketClient
    private _signer?: SigningStargateClient
    private _addr?: string

    public CosmosAuthV1Beta1: CosmosAuthV1Beta1;
    public CosmosBankV1Beta1: CosmosBankV1Beta1;
    public CosmosBaseTendermintV1Beta1: CosmosBaseTendermintV1Beta1;
    public CosmosCrisisV1Beta1: CosmosCrisisV1Beta1;
    public CosmosDistributionV1Beta1: CosmosDistributionV1Beta1;
    public CosmosEvidenceV1Beta1: CosmosEvidenceV1Beta1;
    public CosmosGovV1Beta1: CosmosGovV1Beta1;
    public CosmosMintV1Beta1: CosmosMintV1Beta1;
    public CosmosParamsV1Beta1: CosmosParamsV1Beta1;
    public CosmosSlashingV1Beta1: CosmosSlashingV1Beta1;
    public CosmosStakingV1Beta1: CosmosStakingV1Beta1;
    public CosmosTxV1Beta1: CosmosTxV1Beta1;
    public CosmosUpgradeV1Beta1: CosmosUpgradeV1Beta1;
    public CosmosVestingV1Beta1: CosmosVestingV1Beta1;
    public IbcApplicationsTransferV1: IbcApplicationsTransferV1;
    public IbcCoreChannelV1: IbcCoreChannelV1;
    public IbcCoreClientV1: IbcCoreClientV1;
    public IbcCoreConnectionV1: IbcCoreConnectionV1;
    public IbcCorePortV1: IbcCorePortV1;
    public TendermintFundraising: TendermintFundraising;
    public TendermintSpnCampaign: TendermintSpnCampaign;
    public TendermintSpnLaunch: TendermintSpnLaunch;
    public TendermintSpnMonitoringc: TendermintSpnMonitoringc;
    public TendermintSpnMonitoringp: TendermintSpnMonitoringp;
    public TendermintSpnParticipation: TendermintSpnParticipation;
    public TendermintSpnProfile: TendermintSpnProfile;
    public TendermintSpnReward: TendermintSpnReward;
    

    constructor({ env }: IgniteParams) {
        this._env = env;
        this.CosmosAuthV1Beta1 = new CosmosAuthV1Beta1(
         this._env.apiURL
        );
        this.CosmosBankV1Beta1 = new CosmosBankV1Beta1(
         this._env.apiURL
        );
        this.CosmosBaseTendermintV1Beta1 = new CosmosBaseTendermintV1Beta1(
         this._env.apiURL
        );
        this.CosmosCrisisV1Beta1 = new CosmosCrisisV1Beta1(
         this._env.apiURL
        );
        this.CosmosDistributionV1Beta1 = new CosmosDistributionV1Beta1(
         this._env.apiURL
        );
        this.CosmosEvidenceV1Beta1 = new CosmosEvidenceV1Beta1(
         this._env.apiURL
        );
        this.CosmosGovV1Beta1 = new CosmosGovV1Beta1(
         this._env.apiURL
        );
        this.CosmosMintV1Beta1 = new CosmosMintV1Beta1(
         this._env.apiURL
        );
        this.CosmosParamsV1Beta1 = new CosmosParamsV1Beta1(
         this._env.apiURL
        );
        this.CosmosSlashingV1Beta1 = new CosmosSlashingV1Beta1(
         this._env.apiURL
        );
        this.CosmosStakingV1Beta1 = new CosmosStakingV1Beta1(
         this._env.apiURL
        );
        this.CosmosTxV1Beta1 = new CosmosTxV1Beta1(
         this._env.apiURL
        );
        this.CosmosUpgradeV1Beta1 = new CosmosUpgradeV1Beta1(
         this._env.apiURL
        );
        this.CosmosVestingV1Beta1 = new CosmosVestingV1Beta1(
         this._env.apiURL
        );
        this.IbcApplicationsTransferV1 = new IbcApplicationsTransferV1(
         this._env.apiURL
        );
        this.IbcCoreChannelV1 = new IbcCoreChannelV1(
         this._env.apiURL
        );
        this.IbcCoreClientV1 = new IbcCoreClientV1(
         this._env.apiURL
        );
        this.IbcCoreConnectionV1 = new IbcCoreConnectionV1(
         this._env.apiURL
        );
        this.IbcCorePortV1 = new IbcCorePortV1(
         this._env.apiURL
        );
        this.TendermintFundraising = new TendermintFundraising(
         this._env.apiURL
        );
        this.TendermintSpnCampaign = new TendermintSpnCampaign(
         this._env.apiURL
        );
        this.TendermintSpnLaunch = new TendermintSpnLaunch(
         this._env.apiURL
        );
        this.TendermintSpnMonitoringc = new TendermintSpnMonitoringc(
         this._env.apiURL
        );
        this.TendermintSpnMonitoringp = new TendermintSpnMonitoringp(
         this._env.apiURL
        );
        this.TendermintSpnParticipation = new TendermintSpnParticipation(
         this._env.apiURL
        );
        this.TendermintSpnProfile = new TendermintSpnProfile(
         this._env.apiURL
        );
        this.TendermintSpnReward = new TendermintSpnReward(
         this._env.apiURL
        );
        
    }

    public signIn(client: SigningStargateClient, addr: string): Ignite {
        this._signer = client
        this._addr = addr

        this.CosmosAuthV1Beta1.withSigner(client, addr)
        this.CosmosBankV1Beta1.withSigner(client, addr)
        this.CosmosBaseTendermintV1Beta1.withSigner(client, addr)
        this.CosmosCrisisV1Beta1.withSigner(client, addr)
        this.CosmosDistributionV1Beta1.withSigner(client, addr)
        this.CosmosEvidenceV1Beta1.withSigner(client, addr)
        this.CosmosGovV1Beta1.withSigner(client, addr)
        this.CosmosMintV1Beta1.withSigner(client, addr)
        this.CosmosParamsV1Beta1.withSigner(client, addr)
        this.CosmosSlashingV1Beta1.withSigner(client, addr)
        this.CosmosStakingV1Beta1.withSigner(client, addr)
        this.CosmosTxV1Beta1.withSigner(client, addr)
        this.CosmosUpgradeV1Beta1.withSigner(client, addr)
        this.CosmosVestingV1Beta1.withSigner(client, addr)
        this.IbcApplicationsTransferV1.withSigner(client, addr)
        this.IbcCoreChannelV1.withSigner(client, addr)
        this.IbcCoreClientV1.withSigner(client, addr)
        this.IbcCoreConnectionV1.withSigner(client, addr)
        this.IbcCorePortV1.withSigner(client, addr)
        this.TendermintFundraising.withSigner(client, addr)
        this.TendermintSpnCampaign.withSigner(client, addr)
        this.TendermintSpnLaunch.withSigner(client, addr)
        this.TendermintSpnMonitoringc.withSigner(client, addr)
        this.TendermintSpnMonitoringp.withSigner(client, addr)
        this.TendermintSpnParticipation.withSigner(client, addr)
        this.TendermintSpnProfile.withSigner(client, addr)
        this.TendermintSpnReward.withSigner(client, addr)
        

        return this
    }

    public signOut() {
        this._signer = undefined
        this._addr = undefined
    }

    public connectWS(ws?: WebSocketClient): Ignite {
        if (this._ws) {
            this._ws.close()
        }

        if (ws) {
            this._ws = ws
        } else {
            this._ws = new WebSocketClient({ env: this._env })
        }

        // @ts-ignore
        this._ws.on('chain-id', (id) => {
            this._env.chainID = id
        })
        // @ts-ignore
        this._ws.on('chain-name', (name) => {
            this._env.chainName = name
        })
        // @ts-ignore
        this._ws.on('api-status', (connected) => {
            this._envStatus.apiConnected = connected
        })
        // @ts-ignore
        this._ws.on('rpc-status', (connected) => {
            this._envStatus.rpcConnected = connected
        })
        // @ts-ignore
        this._ws.on('ws-status', (connected) => {
            this._envStatus.wsConnected = connected
        })

        this._ws.connect()

        return this
    }

    get ws(): WebSocketClient | undefined {
        return this._ws
    }

    get env(): Environment {
        return this._env
    }

    get envStatus(): EnvironmentStatus {
        return this._envStatus
    }

    get signer(): SigningStargateClient | undefined {
        return this._signer
    }

    get addr(): string | undefined {
        return this._addr
    }
}

interface WebSocketParams {
  refresh?: number
  env: Environment
}

class WebSocketClient extends EventEmitter {
    private _refresh: number
    private _env: Environment
    private _socket: ReconnectingWebSocket
    private _timer: number

    constructor({ env, refresh = 5000 }: WebSocketParams) {
        super()
        this._env = env
        this._refresh = refresh
    }

    public close() {
        clearInterval(this._timer)
        this._timer = undefined
        this._socket.close()
    }

    public connect() {
        this._socket = new ReconnectingWebSocket(this._env.wsURL)
        this.sendBeacon()
        this._timer = setInterval(() => this.sendBeacon(), this._refresh)

        this._socket.onopen = this.onOpen.bind(this)
        this._socket.onmessage = this.onMessage.bind(this)
        this._socket.onerror = this.onError.bind(this)
        this._socket.onclose = this.onClose.bind(this)
    }

    private async sendBeacon(): Promise<void> {
        if (this._env.apiURL) {
            try {
                const status: any = await axios.get(this._env.apiURL + '/node_info')
                this.emit('chain-id', status.data.node_info.network)
                status.data.application_version.name
                    ? this.emit('chain-name', status.data.application_version.name)
                    : this.emit('chain-name', status.data.node_info.network)
                this.emit('api-status', true)
            } catch (error) {
                if (!error.response) {
                    this.emit('api-status', false)
                    console.error(new Error('WebSocketClient: API Node unavailable'))
                } else {
                    this.emit('api-status', true)
                }
            }
        }
        if (this._env.rpcURL) {
            try {
                await axios.get(this._env.rpcURL)
                this.emit('rpc-status', true)
            } catch (error) {
                if (!error.response) {
                    console.error(new Error('WebSocketClient: RPC Node unavailable'))
                    this.emit('rpc-status', false)
                } else {
                    this.emit('rpc-status', true)
                }
            }
        }
    }

    private onError(): void {
        console.error(new Error('WebSocketClient: Could not connect to websocket.'))
    }

    private onClose(): void {
        this.emit('ws-status', false)
    }

    private onOpen(): void {
        this.emit('ws-status', true)
        this._socket.send(
            JSON.stringify({
                jsonrpc: '2.0',
                method: 'subscribe',
                id: '1',
                params: ["tm.event = 'NewBlock'"]
            })
        )
    }

    private onMessage(msg): void {
        const result = JSON.parse(msg.data).result
        if (result.data && result.data.type === 'tendermint/event/NewBlock') {
            this.emit('newblock', JSON.parse(msg.data).result)
        }
    }
}

function createIgnite({ env }: IgniteParams): Ignite {
    return new Ignite({
        env
    })
}

export { createIgnite, Environment, Ignite, registry, WebSocketClient }
