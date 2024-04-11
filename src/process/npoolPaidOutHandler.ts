import { Amount, NominationPoolPaidOut, Account } from "../model";
import { Fields, ctx } from "../processor";
import { staking } from "../types/storage";
import { BlockHeader, Event } from "@subsquid/substrate-processor";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";

export class NpoolPaidOutHandler implements IHandler {
    npoolPaidOutData: Map<string, NominationPoolPaidOut> = new Map();
    async process(event: Event<Fields>, accountInstance: AccountQuerier){
        
        let amount = {
            amount: event.args.payout,
            symbol: "AVL",
            decimal: 18,
        };

        let currentEra = await this.getCurrentEra(event.block);
        let signature = event.extrinsic?.signature?.signature as {value: string};

        const idExist = this.npoolPaidOutData.get(event.id);

        if(!idExist){
         this.npoolPaidOutData.set(event.id, new NominationPoolPaidOut({
            id: event.id,
            action: event.name,
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            signature: signature.value,
            success: event.extrinsic!.success,
            to: accountInstance.getAccountId(event.args.member),
            amount: new Amount(amount),
            poolId: event.args.poolId,
            era: currentEra?.index,
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.npoolPaidOutData.values()]);
    }

    private async getCurrentEra(blockHeader: BlockHeader<Fields>) {
        const storageCurrentEraV13 = staking.activeEra.v13;
        if (!storageCurrentEraV13.is(blockHeader)) return undefined;

        return await storageCurrentEraV13.get(blockHeader);
    }

}