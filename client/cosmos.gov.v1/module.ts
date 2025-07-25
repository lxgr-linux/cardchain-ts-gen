// Generated by Ignite ignite.com/cli

import { AminoAdapter } from "../amino_adapter"

import { SigningStargateClient, DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgSubmitProposal } from "../types/cosmos/gov/v1/tx";
import { MsgExecLegacyContent } from "../types/cosmos/gov/v1/tx";
import { MsgVote } from "../types/cosmos/gov/v1/tx";
import { MsgVoteWeighted } from "../types/cosmos/gov/v1/tx";
import { MsgDeposit } from "../types/cosmos/gov/v1/tx";
import { MsgUpdateParams } from "../types/cosmos/gov/v1/tx";
import { MsgCancelProposal } from "../types/cosmos/gov/v1/tx";

import { WeightedVoteOption as typeWeightedVoteOption} from "./types"
import { Deposit as typeDeposit} from "./types"
import { Proposal as typeProposal} from "./types"
import { TallyResult as typeTallyResult} from "./types"
import { Vote as typeVote} from "./types"
import { DepositParams as typeDepositParams} from "./types"
import { VotingParams as typeVotingParams} from "./types"
import { TallyParams as typeTallyParams} from "./types"
import { Params as typeParams} from "./types"

export { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal };

type sendMsgSubmitProposalParams = {
  value: MsgSubmitProposal,
  fee?: StdFee,
  memo?: string
};

type sendMsgExecLegacyContentParams = {
  value: MsgExecLegacyContent,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteParams = {
  value: MsgVote,
  fee?: StdFee,
  memo?: string
};

type sendMsgVoteWeightedParams = {
  value: MsgVoteWeighted,
  fee?: StdFee,
  memo?: string
};

type sendMsgDepositParams = {
  value: MsgDeposit,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateParamsParams = {
  value: MsgUpdateParams,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelProposalParams = {
  value: MsgCancelProposal,
  fee?: StdFee,
  memo?: string
};


type msgSubmitProposalParams = {
  value: MsgSubmitProposal,
};

type msgExecLegacyContentParams = {
  value: MsgExecLegacyContent,
};

type msgVoteParams = {
  value: MsgVote,
};

type msgVoteWeightedParams = {
  value: MsgVoteWeighted,
};

type msgDepositParams = {
  value: MsgDeposit,
};

type msgUpdateParamsParams = {
  value: MsgUpdateParams,
};

type msgCancelProposalParams = {
  value: MsgCancelProposal,
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
		
		async sendMsgSubmitProposal({ value, fee, memo }: sendMsgSubmitProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSubmitProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgSubmitProposal({ value: MsgSubmitProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSubmitProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgExecLegacyContent({ value, fee, memo }: sendMsgExecLegacyContentParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgExecLegacyContent: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgExecLegacyContent({ value: MsgExecLegacyContent.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgExecLegacyContent: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgVote({ value, fee, memo }: sendMsgVoteParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgVote: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgVote({ value: MsgVote.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgVote: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgVoteWeighted({ value, fee, memo }: sendMsgVoteWeightedParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgVoteWeighted: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgVoteWeighted({ value: MsgVoteWeighted.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgVoteWeighted: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeposit({ value, fee, memo }: sendMsgDepositParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeposit: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgDeposit({ value: MsgDeposit.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeposit: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCancelProposal({ value, fee, memo }: sendMsgCancelProposalParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelProposal: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, aminoTypes: new AminoAdapter(registry)});
				let msg = this.msgCancelProposal({ value: MsgCancelProposal.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelProposal: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgSubmitProposal({ value }: msgSubmitProposalParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSubmitProposal: Could not create message: ' + e.message)
			}
		},
		
		msgExecLegacyContent({ value }: msgExecLegacyContentParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent", value: MsgExecLegacyContent.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgExecLegacyContent: Could not create message: ' + e.message)
			}
		},
		
		msgVote({ value }: msgVoteParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgVote", value: MsgVote.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgVote: Could not create message: ' + e.message)
			}
		},
		
		msgVoteWeighted({ value }: msgVoteWeightedParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgVoteWeighted", value: MsgVoteWeighted.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgVoteWeighted: Could not create message: ' + e.message)
			}
		},
		
		msgDeposit({ value }: msgDepositParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgDeposit", value: MsgDeposit.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeposit: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgUpdateParams", value: MsgUpdateParams.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message)
			}
		},
		
		msgCancelProposal({ value }: msgCancelProposalParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.gov.v1.MsgCancelProposal", value: MsgCancelProposal.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelProposal: Could not create message: ' + e.message)
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
						WeightedVoteOption: getStructure(typeWeightedVoteOption.fromPartial({})),
						Deposit: getStructure(typeDeposit.fromPartial({})),
						Proposal: getStructure(typeProposal.fromPartial({})),
						TallyResult: getStructure(typeTallyResult.fromPartial({})),
						Vote: getStructure(typeVote.fromPartial({})),
						DepositParams: getStructure(typeDepositParams.fromPartial({})),
						VotingParams: getStructure(typeVotingParams.fromPartial({})),
						TallyParams: getStructure(typeTallyParams.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						
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
			CosmosGovV_1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default IgntModule;