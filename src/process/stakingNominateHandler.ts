import { Call } from "@subsquid/substrate-processor";
import { StakingNominate, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class StakingNominateHandler implements IHandler {
    stakingNominateData: Map<string, StakingNominate> = new Map();
    async process(call: Call<Fields>, accountInstance: AccountQuerier){
        let addressHex = (call.extrinsic!.signature!.address as DataRawAddress).value;
        let fee = {
            amount: call.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }
        let targets = [];
        for (let i = 0; i < call.args.targets.length; i++) {
            targets.push(call.args.targets[i].value);
        }
        const idExist = this.stakingNominateData.get(call.id);

        if(!idExist){
         this.stakingNominateData.set(call.id, new StakingNominate({
            id: call.id,
            action: call.name,
            extrinsicHash: call.extrinsic!.hash,
            extrinsicIndex: call.extrinsicIndex || 0,
            timestamp: new Date(call.block.timestamp!),
            blockNumber: call.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            fee:new Amount(fee),
            success: call.extrinsic!.success,
            targets: targets,
            params: call.args,
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.stakingNominateData.values()]);
    }
}