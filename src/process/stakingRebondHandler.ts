import { Event } from "@subsquid/substrate-processor";
import { CurrencyAmount, StakingRebond, CurrencyFee } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";

export class StakingRebondHandler {
    stakingRebondData: Map<string, StakingRebond> = new Map();
    async process(event: Event<Fields>){
        let signer = "";
        if (event.extrinsic?.signature?.address){
            const addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
            signer = hexToNativeAddress(addressHex);
        }

        let currencyAmount = {
            amount: event.args.amount,
            symbol: "AVL",
            decimal: 18
        };

        let currencyFee = {
            fee: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        const idExist = await ctx.store.findOne(StakingRebond,
            {
                where: 
                {id: event.id}
            });
        if(idExist == undefined){
         this.stakingRebondData.set(event.id, new StakingRebond({
            id: event.id,
            action: "Staking.Rebond",
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: signer,
            stash: hexToNativeAddress(event.args.stash),
            currencyAmmount: new CurrencyAmount(currencyAmount),
            currencyFee:new CurrencyFee(currencyFee),
            success: event.extrinsic!.success,
            params: event.call!.args,
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.stakingRebondData.values()]);
    }
}