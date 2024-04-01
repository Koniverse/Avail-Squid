import { Call } from "@subsquid/substrate-processor";
import { StakingNominate, CurrencyFee } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { hexToNativeAddress } from "../util/util";

export class StakingNominateHandler {
    stakingNominateData: Map<string, StakingNominate> = new Map();
    async process(call: Call<Fields>){
        let signer = "";
        if (call.extrinsic?.signature?.address){
            const addressHex = (call.extrinsic!.signature!.address as DataRawAddress).value;
            signer = hexToNativeAddress(addressHex);
        }

        let currencyFee = {
            fee: call.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }

        let targets = [];
        for (let i = 0; i < call.args.targets.length; i++) {
            targets.push(hexToNativeAddress(call.args.targets[i].value));
        }

        const idExist = await ctx.store.findOne(StakingNominate,
            {
                where: 
                {id: call.id}
            });
        if(idExist == undefined){
         this.stakingNominateData.set(call.id, new StakingNominate({
            id: call.id,
            action: call.name,
            extrinsicHash: call.extrinsic!.hash,
            extrinsicIndex: call.extrinsicIndex || 0,
            timestamp: new Date(call.block.timestamp!),
            blockNumber: call.extrinsic!.block.height,
            sender: signer,
            currencyFee:new CurrencyFee(currencyFee),
            success: call.extrinsic!.success,
            targets: targets,
            params: call.args
         }));
        }
    }

    async save(){
        await ctx.store.insert([...this.stakingNominateData.values()]);
    }
}