import { Event } from "@subsquid/substrate-processor";
import { StakingReward, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { IHandler } from "../interfaces/interfaces";
import { AccountQuerier } from "./accountHandler";

export class StakingRewardHandler implements IHandler {
    stakingRewardData: Map<string, StakingReward> = new Map();
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

        const idExist = this.stakingRewardData.get(event.id);

        if(!idExist){
         this.stakingRewardData.set(event.id, new StakingReward({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            fee: new Amount(fee),
            success: event.extrinsic!.success,
            params: event.call!.args,
            era: event.call!.args.era,
            nominator: accountInstance.getAccountId(event.args.stash),
            amount: new Amount(amount)
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.stakingRewardData.values()]);
    }
}