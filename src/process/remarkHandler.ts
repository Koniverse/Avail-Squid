import { Call } from "@subsquid/substrate-processor";
import { Remark, Amount } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class RemarkHandler implements IHandler {
    remarkData: Map<string, Remark> = new Map();
    async process(call: Call<Fields>, accountInstance: AccountQuerier){
        let addressHex = (call.extrinsic!.signature!.address as DataRawAddress).value;

        let fee = {
            amount: call.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        const idExist = this.remarkData.get(call.id);

        if(!idExist){
         this.remarkData.set(call.id, new Remark({
            id: call.id,
            action: call.name,
            extrinsicHash: call.extrinsic!.hash,
            timestamp: new Date(call.block.timestamp!),
            blockNumber: call.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            fee:new Amount(fee),
            dataRaw: call.args.remark,
            dataValue: call.args.remark,
         }));
        }
    }

    async save(){
            await ctx.store.save([...this.remarkData.values()]);
    }
}