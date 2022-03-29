/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "tendermint.spn.profile";

export interface Validator {
  address: string;
  operatorAddresses: string[];
  description: ValidatorDescription | undefined;
}

export interface ValidatorDescription {
  identity: string;
  moniker: string;
  website: string;
  securityContact: string;
  details: string;
}

export interface ValidatorByOperatorAddress {
  operatorAddress: string;
  validatorAddress: string;
}

const baseValidator: object = { address: "", operatorAddresses: "" };

export const Validator = {
  encode(message: Validator, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.operatorAddresses) {
      writer.uint32(18).string(v!);
    }
    if (message.description !== undefined) {
      ValidatorDescription.encode(
        message.description,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    message.operatorAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.operatorAddresses.push(reader.string());
          break;
        case 3:
          message.description = ValidatorDescription.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    message.operatorAddresses = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.operatorAddresses !== undefined &&
      object.operatorAddresses !== null
    ) {
      for (const e of object.operatorAddresses) {
        message.operatorAddresses.push(String(e));
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = ValidatorDescription.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.operatorAddresses) {
      obj.operatorAddresses = message.operatorAddresses.map((e) => e);
    } else {
      obj.operatorAddresses = [];
    }
    message.description !== undefined &&
      (obj.description = message.description
        ? ValidatorDescription.toJSON(message.description)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    message.operatorAddresses = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.operatorAddresses !== undefined &&
      object.operatorAddresses !== null
    ) {
      for (const e of object.operatorAddresses) {
        message.operatorAddresses.push(e);
      }
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = ValidatorDescription.fromPartial(
        object.description
      );
    } else {
      message.description = undefined;
    }
    return message;
  },
};

const baseValidatorDescription: object = {
  identity: "",
  moniker: "",
  website: "",
  securityContact: "",
  details: "",
};

export const ValidatorDescription = {
  encode(
    message: ValidatorDescription,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.identity !== "") {
      writer.uint32(10).string(message.identity);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ValidatorDescription {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorDescription } as ValidatorDescription;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identity = reader.string();
          break;
        case 2:
          message.moniker = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorDescription {
    const message = { ...baseValidatorDescription } as ValidatorDescription;
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity);
    } else {
      message.identity = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    if (
      object.securityContact !== undefined &&
      object.securityContact !== null
    ) {
      message.securityContact = String(object.securityContact);
    } else {
      message.securityContact = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = String(object.details);
    } else {
      message.details = "";
    }
    return message;
  },

  toJSON(message: ValidatorDescription): unknown {
    const obj: any = {};
    message.identity !== undefined && (obj.identity = message.identity);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined &&
      (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorDescription>): ValidatorDescription {
    const message = { ...baseValidatorDescription } as ValidatorDescription;
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    } else {
      message.identity = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    if (
      object.securityContact !== undefined &&
      object.securityContact !== null
    ) {
      message.securityContact = object.securityContact;
    } else {
      message.securityContact = "";
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    } else {
      message.details = "";
    }
    return message;
  },
};

const baseValidatorByOperatorAddress: object = {
  operatorAddress: "",
  validatorAddress: "",
};

export const ValidatorByOperatorAddress = {
  encode(
    message: ValidatorByOperatorAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ValidatorByOperatorAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseValidatorByOperatorAddress,
    } as ValidatorByOperatorAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorByOperatorAddress {
    const message = {
      ...baseValidatorByOperatorAddress,
    } as ValidatorByOperatorAddress;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },

  toJSON(message: ValidatorByOperatorAddress): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ValidatorByOperatorAddress>
  ): ValidatorByOperatorAddress {
    const message = {
      ...baseValidatorByOperatorAddress,
    } as ValidatorByOperatorAddress;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
