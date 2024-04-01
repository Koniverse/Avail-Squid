// import { Currency } from "../model/generated/currency.model";
// import { ctx } from "../processor";

// export class CurrencyManager {
//     currencyData: Map<string, Currency> = new Map();

//     process(){
//         const currencyData = new Currency({
//             id: "0x",
//             assetsID: 0,
//             symbol: "AVL",
//             decimals: 18
//         })

//         this.currencyData.set(currencyData.id, currencyData);
//     }

//     async save(): Promise<Map<string, Currency>>{
//         await ctx.store.insert([... this.currencyData.values()]);
//         return this.currencyData;
//     }
// }