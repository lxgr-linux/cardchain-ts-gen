// Generated by Ignite ignite.com/cli
import { Registry } from '@cosmjs/proto-signing'
import { IgniteClient } from "./client";
import { MissingWalletError } from "./helpers";
import { IgntModule as CardchainCardchain, msgTypes as CardchainCardchainMsgTypes } from './cardchain.cardchain'
import { IgntModule as CardchainFeatureflag, msgTypes as CardchainFeatureflagMsgTypes } from './cardchain.featureflag'
import { IgntModule as CosmosAuthV_1Beta_1, msgTypes as CosmosAuthV_1Beta_1MsgTypes } from './cosmos.auth.v1beta1'
import { IgntModule as CosmosAuthzV_1Beta_1, msgTypes as CosmosAuthzV_1Beta_1MsgTypes } from './cosmos.authz.v1beta1'
import { IgntModule as CosmosBankV_1Beta_1, msgTypes as CosmosBankV_1Beta_1MsgTypes } from './cosmos.bank.v1beta1'
import { IgntModule as CosmosBaseNodeV_1Beta_1, msgTypes as CosmosBaseNodeV_1Beta_1MsgTypes } from './cosmos.base.node.v1beta1'
import { IgntModule as CosmosBaseTendermintV_1Beta_1, msgTypes as CosmosBaseTendermintV_1Beta_1MsgTypes } from './cosmos.base.tendermint.v1beta1'
import { IgntModule as CosmosConsensusV_1, msgTypes as CosmosConsensusV_1MsgTypes } from './cosmos.consensus.v1'
import { IgntModule as CosmosCrisisV_1Beta_1, msgTypes as CosmosCrisisV_1Beta_1MsgTypes } from './cosmos.crisis.v1beta1'
import { IgntModule as CosmosDistributionV_1Beta_1, msgTypes as CosmosDistributionV_1Beta_1MsgTypes } from './cosmos.distribution.v1beta1'
import { IgntModule as CosmosGovV_1, msgTypes as CosmosGovV_1MsgTypes } from './cosmos.gov.v1'
import { IgntModule as CosmosGovV_1Beta_1, msgTypes as CosmosGovV_1Beta_1MsgTypes } from './cosmos.gov.v1beta1'
import { IgntModule as CosmosGroupV_1, msgTypes as CosmosGroupV_1MsgTypes } from './cosmos.group.v1'
import { IgntModule as CosmosMintV_1Beta_1, msgTypes as CosmosMintV_1Beta_1MsgTypes } from './cosmos.mint.v1beta1'
import { IgntModule as CosmosParamsV_1Beta_1, msgTypes as CosmosParamsV_1Beta_1MsgTypes } from './cosmos.params.v1beta1'
import { IgntModule as CosmosSlashingV_1Beta_1, msgTypes as CosmosSlashingV_1Beta_1MsgTypes } from './cosmos.slashing.v1beta1'
import { IgntModule as CosmosStakingV_1Beta_1, msgTypes as CosmosStakingV_1Beta_1MsgTypes } from './cosmos.staking.v1beta1'
import { IgntModule as CosmosTxV_1Beta_1, msgTypes as CosmosTxV_1Beta_1MsgTypes } from './cosmos.tx.v1beta1'
import { IgntModule as CosmosVestingV_1Beta_1, msgTypes as CosmosVestingV_1Beta_1MsgTypes } from './cosmos.vesting.v1beta1'
import { IgntModule as CosmosNftV_1Beta_1, msgTypes as CosmosNftV_1Beta_1MsgTypes } from './cosmos.nft.v1beta1'
import { IgntModule as IbcApplicationsFeeV_1, msgTypes as IbcApplicationsFeeV_1MsgTypes } from './ibc.applications.fee.v1'
import { IgntModule as IbcApplicationsInterchainAccountsControllerV_1, msgTypes as IbcApplicationsInterchainAccountsControllerV_1MsgTypes } from './ibc.applications.interchain_accounts.controller.v1'
import { IgntModule as IbcApplicationsInterchainAccountsHostV_1, msgTypes as IbcApplicationsInterchainAccountsHostV_1MsgTypes } from './ibc.applications.interchain_accounts.host.v1'
import { IgntModule as IbcApplicationsTransferV_1, msgTypes as IbcApplicationsTransferV_1MsgTypes } from './ibc.applications.transfer.v1'
import { IgntModule as IbcCoreChannelV_1, msgTypes as IbcCoreChannelV_1MsgTypes } from './ibc.core.channel.v1'
import { IgntModule as IbcCoreClientV_1, msgTypes as IbcCoreClientV_1MsgTypes } from './ibc.core.client.v1'
import { IgntModule as IbcCoreConnectionV_1, msgTypes as IbcCoreConnectionV_1MsgTypes } from './ibc.core.connection.v1'
import { IgntModule as CosmosFeegrantV_1Beta_1, msgTypes as CosmosFeegrantV_1Beta_1MsgTypes } from './cosmos.feegrant.v1beta1'
import { IgntModule as CosmosUpgradeV_1Beta_1, msgTypes as CosmosUpgradeV_1Beta_1MsgTypes } from './cosmos.upgrade.v1beta1'
import { IgntModule as CosmosCircuitV_1, msgTypes as CosmosCircuitV_1MsgTypes } from './cosmos.circuit.v1'
import { IgntModule as CosmosEvidenceV_1Beta_1, msgTypes as CosmosEvidenceV_1Beta_1MsgTypes } from './cosmos.evidence.v1beta1'


const Client = IgniteClient.plugin([
    CardchainCardchain, CardchainFeatureflag, CosmosAuthV_1Beta_1, CosmosAuthzV_1Beta_1, CosmosBankV_1Beta_1, CosmosBaseNodeV_1Beta_1, CosmosBaseTendermintV_1Beta_1, CosmosConsensusV_1, CosmosCrisisV_1Beta_1, CosmosDistributionV_1Beta_1, CosmosGovV_1, CosmosGovV_1Beta_1, CosmosGroupV_1, CosmosMintV_1Beta_1, CosmosParamsV_1Beta_1, CosmosSlashingV_1Beta_1, CosmosStakingV_1Beta_1, CosmosTxV_1Beta_1, CosmosVestingV_1Beta_1, CosmosNftV_1Beta_1, IbcApplicationsFeeV_1, IbcApplicationsInterchainAccountsControllerV_1, IbcApplicationsInterchainAccountsHostV_1, IbcApplicationsTransferV_1, IbcCoreChannelV_1, IbcCoreClientV_1, IbcCoreConnectionV_1, CosmosFeegrantV_1Beta_1, CosmosUpgradeV_1Beta_1, CosmosCircuitV_1, CosmosEvidenceV_1Beta_1
]);

const registry = new Registry([
  ...CardchainCardchainMsgTypes,
  ...CardchainFeatureflagMsgTypes,
  ...CosmosAuthV_1Beta_1MsgTypes,
  ...CosmosAuthzV_1Beta_1MsgTypes,
  ...CosmosBankV_1Beta_1MsgTypes,
  ...CosmosBaseNodeV_1Beta_1MsgTypes,
  ...CosmosBaseTendermintV_1Beta_1MsgTypes,
  ...CosmosConsensusV_1MsgTypes,
  ...CosmosCrisisV_1Beta_1MsgTypes,
  ...CosmosDistributionV_1Beta_1MsgTypes,
  ...CosmosGovV_1MsgTypes,
  ...CosmosGovV_1Beta_1MsgTypes,
  ...CosmosGroupV_1MsgTypes,
  ...CosmosMintV_1Beta_1MsgTypes,
  ...CosmosParamsV_1Beta_1MsgTypes,
  ...CosmosSlashingV_1Beta_1MsgTypes,
  ...CosmosStakingV_1Beta_1MsgTypes,
  ...CosmosTxV_1Beta_1MsgTypes,
  ...CosmosVestingV_1Beta_1MsgTypes,
  ...CosmosNftV_1Beta_1MsgTypes,
  ...IbcApplicationsFeeV_1MsgTypes,
  ...IbcApplicationsInterchainAccountsControllerV_1MsgTypes,
  ...IbcApplicationsInterchainAccountsHostV_1MsgTypes,
  ...IbcApplicationsTransferV_1MsgTypes,
  ...IbcCoreChannelV_1MsgTypes,
  ...IbcCoreClientV_1MsgTypes,
  ...IbcCoreConnectionV_1MsgTypes,
  ...CosmosFeegrantV_1Beta_1MsgTypes,
  ...CosmosUpgradeV_1Beta_1MsgTypes,
  ...CosmosCircuitV_1MsgTypes,
  ...CosmosEvidenceV_1Beta_1MsgTypes,
  
])

export {
    Client,
    registry,
    MissingWalletError
}
