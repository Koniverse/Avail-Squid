import { Event } from "@subsquid/substrate-processor";
import { CurrencyAmount, Transfer, CurrencyFee } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";

export class TransferBalance {
    transfersData: Map<string, Transfer> = new Map();
    async process(event: Event<Fields>){
        let signer = "";
        if (event.extrinsic?.signature?.address){
            const addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
            signer = hexToNativeAddress(addressHex);
        }

        let signature = event.extrinsic?.signature?.signature as {value: string};
        let currencyAmount = {
            amount: event.args.amount,
            symbol: "AVL",
            decimal: 18,
        };

        let currencyFee = {
            fee: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        const idExist = await ctx.store.findOne(Transfer,
            {
                where: 
                {id: event.id}
            });
        if(idExist == undefined){
    
         this.transfersData.set(event.id, new Transfer({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            from: hexToNativeAddress(event.args.from), 
            to: hexToNativeAddress(event.args.to),
            currencyAmmount: new CurrencyAmount(currencyAmount),
            currencyFee:new CurrencyFee(currencyFee),
            signer: signer,
            signature: signature.value,
            blockNumber: event.extrinsic!.block.height,
            success: event.extrinsic!.success,
            params: event.call!.args,
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.transfersData.values()]);
    }
}