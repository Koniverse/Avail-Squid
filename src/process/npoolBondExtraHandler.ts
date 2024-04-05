import { Event } from "@subsquid/substrate-processor";
import { Amount, NominationPoolBondExtra, Account } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";
import importAccount from "./accountManager";

export class NpoolBondExtraHandler {
    npoolBondExtraData: Map<string, NominationPoolBondExtra> = new Map();
    async process(event: Event<Fields>){
        let addressHex = "";
        if (event.extrinsic?.signature?.address){
            addressHex = (event.extrinsic!.signature!.address as DataRawAddress).value;
            importAccount(addressHex);
        }

        let amount = {
            amount: event.args.bonded,
            symbol: "AVL",
            decimal: 18,
        };

        let fee = {
            amount: event.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        if(event.args.member){
            importAccount(event.args.member);
        }
        let signature = event.extrinsic?.signature?.signature as {value: string};

        const idExist = await ctx.store.findOne(NominationPoolBondExtra,
            {
                where: 
                {id: event.id}
            });

        if(idExist == undefined){
         this.npoolBondExtraData.set(event.id, new NominationPoolBondExtra({
            id: event.id,
            action: "NominationPools.Bond_extra",
            extrinsicHash: event.extrinsic!.hash,
            extrinsicIndex: event.extrinsicIndex || 0,
            timestamp: new Date(event.block.timestamp!),
            blockNumber: event.extrinsic!.block.height,
            sender: await ctx.store.findOne(Account, {
                where: {
                    address: hexToNativeAddress(addressHex)
                }
            }),
            from: await ctx.store.findOne(Account, {
                where: {
                    address: hexToNativeAddress(event.args.member)
                }
            }),
            signature: signature.value,
            success: event.extrinsic!.success,
            params: event.call!.args,
            bondMethod: event.call!.args.extra.__kind,
            amount: new Amount(amount),
            fee:new Amount(fee),
            joined: event.args.joined,
            poolId: event.args.poolId
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.npoolBondExtraData.values()]);
    }
}