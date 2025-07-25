// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: ibc/applications/transfer/v1/transfer.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "ibc.applications.transfer.v1";

/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  baseDenom: string;
}

/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  sendEnabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receiveEnabled: boolean;
}

function createBaseDenomTrace(): DenomTrace {
  return { path: "", baseDenom: "" };
}

export const DenomTrace: MessageFns<DenomTrace> = {
  encode(message: DenomTrace, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.baseDenom = reader.string();
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

  fromJSON(object: any): DenomTrace {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      baseDenom: isSet(object.baseDenom) ? globalThis.String(object.baseDenom) : "",
    };
  },

  toJSON(message: DenomTrace): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.baseDenom !== "") {
      obj.baseDenom = message.baseDenom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DenomTrace>, I>>(base?: I): DenomTrace {
    return DenomTrace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DenomTrace>, I>>(object: I): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  },
};

function createBaseParams(): Params {
  return { sendEnabled: false, receiveEnabled: false };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sendEnabled !== false) {
      writer.uint32(8).bool(message.sendEnabled);
    }
    if (message.receiveEnabled !== false) {
      writer.uint32(16).bool(message.receiveEnabled);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.sendEnabled = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.receiveEnabled = reader.bool();
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

  fromJSON(object: any): Params {
    return {
      sendEnabled: isSet(object.sendEnabled) ? globalThis.Boolean(object.sendEnabled) : false,
      receiveEnabled: isSet(object.receiveEnabled) ? globalThis.Boolean(object.receiveEnabled) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.sendEnabled !== false) {
      obj.sendEnabled = message.sendEnabled;
    }
    if (message.receiveEnabled !== false) {
      obj.receiveEnabled = message.receiveEnabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.sendEnabled = object.sendEnabled ?? false;
    message.receiveEnabled = object.receiveEnabled ?? false;
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
