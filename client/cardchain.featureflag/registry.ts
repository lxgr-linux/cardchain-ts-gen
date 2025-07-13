import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "../types/cardchain/featureflag/tx";
import { MsgSet } from "../types/cardchain/featureflag/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cardchain.featureflag.MsgUpdateParams", MsgUpdateParams],
    ["/cardchain.featureflag.MsgSet", MsgSet],
    
];

export { msgTypes }