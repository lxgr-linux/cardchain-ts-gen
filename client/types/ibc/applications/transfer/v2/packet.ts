// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: ibc/applications/transfer/v2/packet.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "ibc.applications.transfer.v2";

/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
}

function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return { denom: "", amount: "", sender: "", receiver: "", memo: "" };
}

export const FungibleTokenPacketData: MessageFns<FungibleTokenPacketData> = {
  encode(message: FungibleTokenPacketData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.amount = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.sender = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.receiver = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.memo = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FungibleTokenPacketData {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      receiver: isSet(object.receiver) ? globalThis.String(object.receiver) : "",
      memo: isSet(object.memo) ? globalThis.String(object.memo) : "",
    };
  },

  toJSON(message: FungibleTokenPacketData): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.memo !== "") {
      obj.memo = message.memo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FungibleTokenPacketData>, I>>(base?: I): FungibleTokenPacketData {
    return FungibleTokenPacketData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FungibleTokenPacketData>, I>>(object: I): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.memo = object.memo ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
