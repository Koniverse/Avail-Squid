import { Event } from "@subsquid/substrate-processor";
import { Amount, NominationPoolUnbond, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class NpoolUnbondHandler implements IHandler {
    npoolUnbondData: Map<string, NominationPoolUnbond> = new Map();
    async process(event: Event<Fields>, accountInstance: AccountQuerier){
        let addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;

        let amount = {
            amount: event.args.balance,
            symbol: "AVL",
            decimal: 18,
        };

        let fee = {
            amount: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        let unbondingPoints = {
            amount: event.args.points,
            symbol: "AVL",
            decimal: 18
        }

        let signature = event.extrinsic?.signature?.signature as {value: string};

        const idExist = await ctx.store.findOne(NominationPoolUnbond,
            {
                where: 
                {id: event.id}
            });

        if(idExist == undefined){
         this.npoolUnbondData.set(event.id, new NominationPoolUnbond({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            signature: signature.value,
            success: event.extrinsic!.success,
            params: event.call!.args,
            fee:new Amount(fee),
            amount: new Amount(amount),
            poolId: event.args.poolId,
            era:event.args.era,
            unbondingPoints: new Amount(unbondingPoints)
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.npoolUnbondData.values()]);
    }
}