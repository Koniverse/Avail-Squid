import { Call } from "@subsquid/substrate-processor";
import { StakingNominate, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";
import importAccount from "./accountManager";

export class StakingNominateHandler {
    stakingNominateData: Map<string, StakingNominate> = new Map();
    async process(call: Call<Fields>){
        let addressHex = "";
        if (call.extrinsic?.signature?.address){
            addressHex = (call.extrinsic!.signature!.address as DataRawAddress).value;
            importAccount(addressHex);
        }

        let fee = {
            amount: call.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }
        let targets = [];
        for (let i = 0; i < call.args.targets.length; i++) {
            targets.push(call.args.targets[i].value);
        }

        const idExist = await ctx.store.findOne(StakingNominate,
            {
                where: 
                {id: call.id}
            });
        if(idExist == undefined){
         this.stakingNominateData.set(call.id, new StakingNominate({
            id: call.id,
            action: call.name,
            extrinsicHash: call.extrinsic!.hash,
            extrinsicIndex: call.extrinsicIndex || 0,
            timestamp: new Date(call.block.timestamp!),
            blockNumber: call.extrinsic!.block.height,
            sender: await ctx.store.findOne(Account, {
                where: {
                    address: hexToNativeAddress(addressHex)
                }
            }),
            fee:new Amount(fee),
            success: call.extrinsic!.success,
            targets: targets,
            params: call.args
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.stakingNominateData.values()]);
    }
}