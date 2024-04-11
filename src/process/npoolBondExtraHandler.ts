import { Event } from "@subsquid/substrate-processor";
import { Amount, NominationPoolBondExtra, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { IHandler } from "../interfaces/interfaces";
import { AccountQuerier } from "./accountHandler";

export class NpoolBondExtraHandler implements IHandler {
    npoolBondExtraData: Map<string, NominationPoolBondExtra> = new Map();
    async process(event: Event<Fields>, accountInstance: AccountQuerier){
        let addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;

        let amount = {
            amount: event.args.bonded,
            symbol: "AVL",
            decimal: 18,
        };

        let fee = {
            amount: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        let signature = event.extrinsic?.signature?.signature as {value: string};

        const idExist = this.npoolBondExtraData.get(event.id);

        if(!idExist){
         this.npoolBondExtraData.set(event.id, new NominationPoolBondExtra({
            id: event.id,
            action: "NominationPools.Bond_extra",
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            from: accountInstance.getAccountId(event.args.member),
            signature: signature.value,
            success: event.extrinsic!.success,
            params: event.call!.args,
            bondMethod: event.call!.args.extra.__kind,
            amount: new Amount(amount),
            fee:new Amount(fee),
            joined: event.args.joined,
            poolId: event.args.poolId
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.npoolBondExtraData.values()]);
    }
}