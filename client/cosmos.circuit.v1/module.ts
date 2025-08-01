// Generated by Ignite ignite.com/cli

import { AminoAdapter } from "../amino_adapter"

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgAuthorizeCircuitBreaker } from "../types/cosmos/circuit/v1/tx";
import { MsgTripCircuitBreaker } from "../types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreaker } from "../types/cosmos/circuit/v1/tx";

import { Permissions as typePermissions} from "./types"
import { GenesisAccountPermissions as typeGenesisAccountPermissions} from "./types"

export { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker };

type sendMsgAuthorizeCircuitBreakerParams = {
  value: MsgAuthorizeCircuitBreaker,
  fee?: StdFee,
  memo?: string
};

type sendMsgTripCircuitBreakerParams = {
  value: MsgTripCircuitBreaker,
  fee?: StdFee,
  memo?: string
};

type sendMsgResetCircuitBreakerParams = {
  value: MsgResetCircuitBreaker,
  fee?: StdFee,
  memo?: string
};


type msgAuthorizeCircuitBreakerParams = {
  value: MsgAuthorizeCircuitBreaker,
};

type msgTripCircuitBreakerParams = {
  value: MsgTripCircuitBreaker,
};

type msgResetCircuitBreakerParams = {
  value: MsgResetCircuitBreaker,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgAuthorizeCircuitBreaker({ value, fee, memo }: sendMsgAuthorizeCircuitBreakerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgAuthorizeCircuitBreaker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgAuthorizeCircuitBreaker({ value: MsgAuthorizeCircuitBreaker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgAuthorizeCircuitBreaker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgTripCircuitBreaker({ value, fee, memo }: sendMsgTripCircuitBreakerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgTripCircuitBreaker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgTripCircuitBreaker({ value: MsgTripCircuitBreaker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgTripCircuitBreaker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgResetCircuitBreaker({ value, fee, memo }: sendMsgResetCircuitBreakerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgResetCircuitBreaker: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgResetCircuitBreaker({ value: MsgResetCircuitBreaker.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgResetCircuitBreaker: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgAuthorizeCircuitBreaker({ value }: msgAuthorizeCircuitBreakerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", value: MsgAuthorizeCircuitBreaker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgAuthorizeCircuitBreaker: Could not create message: ' + e.message)
			}
		},
		
		msgTripCircuitBreaker({ value }: msgTripCircuitBreakerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker", value: MsgTripCircuitBreaker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgTripCircuitBreaker: Could not create message: ' + e.message)
			}
		},
		
		msgResetCircuitBreaker({ value }: msgResetCircuitBreakerParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker", value: MsgResetCircuitBreaker.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgResetCircuitBreaker: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Permissions: getStructure(typePermissions.fromPartial({})),
						GenesisAccountPermissions: getStructure(typeGenesisAccountPermissions.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const IgntModule = (test: IgniteClient) => {
	return {
		module: {
			CosmosCircuitV_1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;