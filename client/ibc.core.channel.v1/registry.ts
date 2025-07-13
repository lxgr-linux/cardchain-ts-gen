import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgChannelOpenInit } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelOpenTry } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelOpenAck } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelOpenConfirm } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelCloseInit } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelCloseConfirm } from "../types/ibc/core/channel/v1/tx";
import { MsgRecvPacket } from "../types/ibc/core/channel/v1/tx";
import { MsgTimeout } from "../types/ibc/core/channel/v1/tx";
import { MsgTimeoutOnClose } from "../types/ibc/core/channel/v1/tx";
import { MsgAcknowledgement } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeInit } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTry } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeAck } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeConfirm } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeOpen } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeTimeout } from "../types/ibc/core/channel/v1/tx";
import { MsgChannelUpgradeCancel } from "../types/ibc/core/channel/v1/tx";
import { MsgUpdateParams } from "../types/ibc/core/channel/v1/tx";
import { MsgPruneAcknowledgements } from "../types/ibc/core/channel/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit],
    ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry],
    ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck],
    ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm],
    ["/ibc.core.channel.v1.MsgChannelCloseInit", MsgChannelCloseInit],
    ["/ibc.core.channel.v1.MsgChannelCloseConfirm", MsgChannelCloseConfirm],
    ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket],
    ["/ibc.core.channel.v1.MsgTimeout", MsgTimeout],
    ["/ibc.core.channel.v1.MsgTimeoutOnClose", MsgTimeoutOnClose],
    ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement],
    ["/ibc.core.channel.v1.MsgChannelUpgradeInit", MsgChannelUpgradeInit],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTry", MsgChannelUpgradeTry],
    ["/ibc.core.channel.v1.MsgChannelUpgradeAck", MsgChannelUpgradeAck],
    ["/ibc.core.channel.v1.MsgChannelUpgradeConfirm", MsgChannelUpgradeConfirm],
    ["/ibc.core.channel.v1.MsgChannelUpgradeOpen", MsgChannelUpgradeOpen],
    ["/ibc.core.channel.v1.MsgChannelUpgradeTimeout", MsgChannelUpgradeTimeout],
    ["/ibc.core.channel.v1.MsgChannelUpgradeCancel", MsgChannelUpgradeCancel],
    ["/ibc.core.channel.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.core.channel.v1.MsgPruneAcknowledgements", MsgPruneAcknowledgements],
    
];

export { msgTypes }