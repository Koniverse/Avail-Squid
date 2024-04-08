import { Event } from "@subsquid/substrate-processor";
import { StakingChill, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";
import importAccount from "./accountManager";

export class StakingChillHandler {
    stakingChillData: Map<string, StakingChill> = new Map();
    async process(event: Event<Fields>){
        let addressHex = "";
        if (event.extrinsic?.signature?.address){
            addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
            importAccount(addressHex);
        }

        let fee = {
            amount: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }
        const idExist = await ctx.store.findOne(StakingChill,
            {
                where: 
                {id: event.id}
            });

        if(idExist == undefined){
         this.stakingChillData.set(event.id, new StakingChill({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: await ctx.store.findOne(Account, {
                where: {
                    address: hexToNativeAddress(addressHex)
                }
            }),
            stash: hexToNativeAddress(event.args.stash),
            fee:new Amount(fee),
            success: event.extrinsic!.success,
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.stakingChillData.values()]);
    }
}