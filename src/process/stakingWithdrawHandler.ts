import { Event } from "@subsquid/substrate-processor";
import { CurrencyAmount, StakingWithdraw, CurrencyFee } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";

export class StakingWithdrawHandler {
    stakingWithdrawData: Map<string, StakingWithdraw> = new Map();
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
        const idExist = await ctx.store.findOne(StakingWithdraw,
            {
                where: 
                {id: event.id}
            });
        if(idExist == undefined){
         this.stakingWithdrawData.set(event.id, new StakingWithdraw({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: signer,
            stash: hexToNativeAddress(event.args.stash),
            currencyAmmount: new CurrencyAmount(currencyAmount),
            currencyFee:new CurrencyFee(currencyFee),
            success: event.extrinsic!.success,
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.stakingWithdrawData.values()]);
    }
}