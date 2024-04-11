import { Event } from "@subsquid/substrate-processor";
import { Transfer, Amount, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class TransferBalance implements IHandler{
    transfersData: Map<string, Transfer> = new Map();

    async process(event: Event<Fields>, accountInstance: AccountQuerier) {
        let addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
        let signature = event.extrinsic?.signature?.signature as {value: string};

        let amount = {
            amount: event.args.amount,
            symbol: "AVL",
            decimal: 18,
        };

        let fee = {
            amount: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        const idExist = this.transfersData.get(event.id);

        if(!idExist){
         this.transfersData.set(event.id, new Transfer({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            from: accountInstance.getAccountId(event.args.from),
            to: accountInstance.getAccountId(event.args.to),
            sender: accountInstance.getAccountId(addressHex),
            amount: new Amount(amount),
            fee: new Amount(fee),
            signature: signature.value,
            blockNumber: event.extrinsic!.block.height,
            success: event.extrinsic!.success,
            params: event.call!.args,
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.transfersData.values()]);
    }
}