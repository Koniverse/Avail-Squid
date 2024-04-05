import { Amount, NominationPoolPaidOut, Account } from "../model";
import { Fields, ctx } from "../processor";
import { hexToNativeAddress } from "../util/util";
import importAccount from "./accountManager";
import { balances, staking } from "../types/storage";

import { BlockHeader, Event } from "@subsquid/substrate-processor";

export class NpoolPaidOutHandler {
    npoolPaidOutData: Map<string, NominationPoolPaidOut> = new Map();
    async process(event: Event<Fields>){
        
        let amount = {
            amount: event.args.payout,
            symbol: "AVL",
            decimal: 18,
        };

        if(event.args.member){
            importAccount(event.args.member);
        }

        let currentEra = await this.getCurrentEra(event.block);
        let signature = event.extrinsic?.signature?.signature as {value: string};

        const idExist = await ctx.store.findOne(NominationPoolPaidOut,
            {
                where: 
                {id: event.id}
            });

        if(idExist == undefined){
         this.npoolPaidOutData.set(event.id, new NominationPoolPaidOut({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            signature: signature.value,
            success: event.extrinsic!.success,
            to: await ctx.store.findOne(Account, {
                where: {
                    address: hexToNativeAddress(event.args.member)
                }
            }),
            amount: new Amount(amount),
            poolId: event.args.poolId,
            era: currentEra?.index,
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.npoolPaidOutData.values()]);
    }

    private async getCurrentEra(blockHeader: BlockHeader<Fields>) {
        const storageCurrentEraV13 = staking.activeEra.v13;
        if (!storageCurrentEraV13.is(blockHeader)) return undefined;

        return await storageCurrentEraV13.get(blockHeader);
    }

}