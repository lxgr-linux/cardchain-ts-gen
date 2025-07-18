// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: cardchain/featureflag/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Flag } from "./flag";
import { Params } from "./params";

export const protobufPackage = "cardchain.featureflag";

/** GenesisState defines the featureflag module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params | undefined;
  flags: { [key: string]: Flag };
}

export interface GenesisState_FlagsEntry {
  key: string;
  value: Flag | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, flags: {} };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    Object.entries(message.flags).forEach(([key, value]) => {
      GenesisState_FlagsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          const entry2 = GenesisState_FlagsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.flags[entry2.key] = entry2.value;
          }
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

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      flags: isObject(object.flags)
        ? Object.entries(object.flags).reduce<{ [key: string]: Flag }>((acc, [key, value]) => {
          acc[key] = Flag.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.flags) {
      const entries = Object.entries(message.flags);
      if (entries.length > 0) {
        obj.flags = {};
        entries.forEach(([k, v]) => {
          obj.flags[k] = Flag.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.flags = Object.entries(object.flags ?? {}).reduce<{ [key: string]: Flag }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Flag.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGenesisState_FlagsEntry(): GenesisState_FlagsEntry {
  return { key: "", value: undefined };
}

export const GenesisState_FlagsEntry: MessageFns<GenesisState_FlagsEntry> = {
  encode(message: GenesisState_FlagsEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Flag.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_FlagsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_FlagsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.value = Flag.decode(reader, reader.uint32());
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

  fromJSON(object: any): GenesisState_FlagsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Flag.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GenesisState_FlagsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Flag.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState_FlagsEntry>, I>>(base?: I): GenesisState_FlagsEntry {
    return GenesisState_FlagsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState_FlagsEntry>, I>>(object: I): GenesisState_FlagsEntry {
    const message = createBaseGenesisState_FlagsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Flag.fromPartial(object.value) : undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
