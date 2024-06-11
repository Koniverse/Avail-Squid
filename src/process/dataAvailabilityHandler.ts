import { Call } from "@subsquid/substrate-processor";
import { DataAvailability, Amount } from "../model";
import { Fields, ctx } from "../processor";
import { DataRawAddress,  } from "../util/interfaces";
import { AccountQuerier } from "./accountHandler";
import { IHandler } from "../interfaces/interfaces";
import { Buffer } from 'buffer';

export class DataAvailabilityHandler implements IHandler {
    availabilityData: Map<string, DataAvailability> = new Map();
    async process(call: Call<Fields>, accountInstance: AccountQuerier){
        let addressHex = (call.extrinsic!.signature!.address as DataRawAddress).value;

        let fee = {
            amount: call.extrinsic!.fee || BigInt(0),
            symbol: "AVL",
            decimal: 18
        }
        const idExist = this.availabilityData.get(call.id);
        const dataValue = decodeData(call.args.data);
        if(!idExist){
         this.availabilityData.set(call.id, new DataAvailability({
            id: call.id,
            action: call.name,
            extrinsicHash: call.extrinsic!.hash,
            timestamp: new Date(call.block.timestamp!),
            blockNumber: call.extrinsic!.block.height,
            sender: accountInstance.getAccountId(addressHex),
            fee: new Amount(fee),
            dataRaw: call.args.data,
            dataValue: dataValue,
            isJson: isJson(dataValue) ? true : false
         }));
        }
    }

    async save(){
        await ctx.store.save([...this.availabilityData.values()]);
    }
}

function isJson(str:string):boolean {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

function decodeData(str:string):string {
    let strInput = str.slice(2, str.length);
    const bytesData:Buffer = Buffer.from(strInput, 'hex');
    let res = bytesData.toString().replace(/<Buffer |>/g, '');
    if (isValidHexString(res)) return res;
    else if (isJson(res)) return res;
    else if (isValidString(res)) return res;
    else return str;
}

function isValidHexString(str:string):boolean {
    const hexRegex = /^0x[0-9A-Fa-f]+$/;
    return hexRegex.test(str);
}

function isValidString(str: string): boolean {
    const regex = /^[\x20-\x7E]*$/;
    return regex.test(str);
}
