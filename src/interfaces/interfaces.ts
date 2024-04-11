import {
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic,
  } from "@subsquid/substrate-processor";

export interface IHandler {
    process(event: any, accountInstance: any, prop?: any): void;
    save(): void;
}