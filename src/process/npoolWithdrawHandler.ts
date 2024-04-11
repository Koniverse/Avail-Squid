import { Event } from "@subsquid/substrate-processor";
import { Amount, NominationPoolWithdrawUnbonded, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class NpoolWithdrawUnbondHandler implements IHandler {
    npoolWithdrawUnbondData: Map<string, NominationPoolWithdrawUnbonded> = new Map();
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

        let withdrawnPoint = {
            amount: event.args.points,
            symbol: "AVL",
            decimal: 18
        }
   
        let signature = event.extrinsic?.signature?.signature as {value: string};

        const idExist = this.npoolWithdrawUnbondData.get(event.id);

        if(!idExist){
         this.npoolWithdrawUnbondData.set(event.id, new NominationPoolWithdrawUnbonded({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            from: accountInstance.getAccountId(event.args.member),
            signature: signature.value,
            success: event.extrinsic!.success,
            params: event.call!.args,
            amount: new Amount(amount),
            fee:new Amount(fee),
            poolId: event.args.poolId,
            withdrawnPoint: new Amount(withdrawnPoint)
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.npoolWithdrawUnbondData.values()]);
    }
}