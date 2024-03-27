import { Event } from "@subsquid/substrate-processor";
import { Currency, Transfer, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";
import { Like } from 'typeorm'
import { TransferData } from "../interfaces/interfaces";

export class TransferManager {
    transfersData: Map<string, TransferData> = new Map();
    async process(event: Event<Fields>):Promise<TransferData[]> {
        let signer = "";
        if (event.extrinsic?.signature?.address){
            const addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
            signer = hexToNativeAddress(addressHex);
        }

        let signature = event.extrinsic?.signature?.signature as {value: string};

        let currencyExtrinsic = await ctx.store.findBy(Currency,{
            id:Like('0x%'),
          });
        let currencyFee = await ctx.store.findBy(Currency,{
            id:Like('0x%'),
          });

         this.transfersData.set(event.id,{
            id: event.id,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            fromAddress: hexToNativeAddress(event.args.from), 
            toAddress: hexToNativeAddress(event.args.to),
            amount: event.args.amount,
            signature: signature.value,
            currency: currencyExtrinsic[0],
            currencyFee: currencyFee[0],
            blockNumber: event.extrinsic!.block.height,
            fee: event.extrinsic!.fee || BigInt(0),
            signer: signer,
            success: event.extrinsic!.success,
        }); 
        return [...this.transfersData.values()];
    }

    async save(accounts: Map<string, Account>){
        const transfers: Transfer[] = [];
        
        for(const transfer of this.transfersData.values()){
            let from = accounts.get(transfer.fromAddress);
            if (!from) {
                // If not found, query the database
                from = await ctx.store.get(Account, transfer.fromAddress);
                if (!from) {
                    ctx.log.error(`ERROR saving transfer: Account ${transfer.fromAddress} not found`);
                    continue;
                } 
            }
            let to = accounts.get(transfer.toAddress);
            if (!to) {
                // If not found, query the database
                to = await ctx.store.get(Account, transfer.toAddress);
                if (!to) {
                    ctx.log.error(`ERROR saving transfer: Account ${transfer.toAddress} not found`);
                    continue;
                }
            }
            // console.log("FROM, TO: ", from, to);
            transfers.push(new Transfer({
                ...transfer,
                from,
                to
            }));
        }

        await ctx.store.insert(transfers);
    }
}