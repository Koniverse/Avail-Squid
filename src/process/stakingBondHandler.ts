import { Event } from "@subsquid/substrate-processor";
import { StakingBond, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class StakingBondHandler implements IHandler {
    stakingBondData: Map<string, StakingBond> = new Map();
    async process(event: Event<Fields>, accountInstance: AccountQuerier){
        let addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;

        let amount = {
            amount: event.args.amount || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        let fee = {
            amount: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        const idExist = this.stakingBondData.get(event.id);

        if(!idExist){
         this.stakingBondData.set(event.id, new StakingBond({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            amount: new Amount(amount),
            fee:new Amount(fee),
            success: event.extrinsic!.success,
            params: event.call!.args,
            stash: accountInstance.getAccountId(event.args.stash),
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.stakingBondData.values()]);
    }
}