import { Event } from "@subsquid/substrate-processor";
import { StakingWithdraw, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { IHandler } from "../interfaces/interfaces";
import { AccountQuerier } from "./accountHandler";

export class StakingWithdrawHandler implements IHandler {
    stakingWithdrawData: Map<string, StakingWithdraw> = new Map();
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

        const idExist = this.stakingWithdrawData.get(event.id);

        if(!idExist){
         this.stakingWithdrawData.set(event.id, new StakingWithdraw({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            stash: accountInstance.getAccountId(event.args.stash),
            amount: new Amount(amount),
            fee: new Amount(fee),
            success: event.extrinsic!.success,
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.stakingWithdrawData.values()]);
    }
}