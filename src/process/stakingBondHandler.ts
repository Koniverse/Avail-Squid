import { Event } from "@subsquid/substrate-processor";
import { StakingBond, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";
import importAccount from "./accountManager";

export class StakingBondHandler {
    stakingBondData: Map<string, StakingBond> = new Map();
    async process(event: Event<Fields>){
        let addressHex = "";
        if (event.extrinsic?.signature?.address){
            addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
            importAccount(addressHex);
        }

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

        const idExist = await ctx.store.findOne(StakingBond,
            {
                where: 
                {id: event.id}
            });

        if(idExist == undefined){
         this.stakingBondData.set(event.id, new StakingBond({
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
            amount: new Amount(amount),
            fee:new Amount(fee),
            success: event.extrinsic!.success,
            params: event.call!.args,
            stash: await ctx.store.findOne(Account, {
                where: {
                    address: event.args.stash
                }
            })
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.stakingBondData.values()]);
    }
}