import { AminoMsg } from "@cosmjs/amino";
import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";

export class AminoAdapter extends AminoTypes {
  private readonly registry: Registry;

  constructor(registry: Registry) {
    super({});
    this.registry = registry;
  }

  toAmino({ typeUrl, value }: EncodeObject): AminoMsg {
    console.log(value);
    const genType: any = this.registry.lookupType(typeUrl)!;
    return {
      type: typeUrl,
      value: JSON.parse(
        JSON.stringify(genType.toJSON(value), (_, value) =>
          typeof value === "number" ? value.toString() : value,
        ),
      ),
    };
  }

  fromAmino({ type, value }: AminoMsg): EncodeObject {
    const genType: any = this.registry.lookupType(type)!;
    return {
      typeUrl: type,
      value: genType.fromJSON(value),
    };
  }
}
