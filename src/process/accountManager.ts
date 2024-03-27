import { Account } from "../model";
import { ctx } from "../processor";
import { In, Like, DataSource } from 'typeorm'
import { TransferData } from "../interfaces/interfaces";

export class AccountManager {
    accountIds = new Set<string>()
    accountsData: Map<string, Account> = new Map();
    async process(transferData: TransferData[]){
        for (let transfer of transferData) {
            this.accountIds.add(transfer.fromAddress);
            this.accountIds.add(transfer.toAddress);
        }
        for (let id of this.accountIds) {
            const idExist = await ctx.store.findOne(Account,
                {
                    where: 
                    {id: id}
                });
            if(idExist == undefined){
                updateAccounts(id, this.accountsData)
            }
        }
    
        function updateAccounts(id: string, accounts: Map<string, Account>): void {
            const acc = accounts.get(id)
            if (acc == null) {
                accounts.set(id, new Account({id}))
            }
        }

        return this.accountsData;
    }

    async save(): Promise<Map<string, Account>>{
        console.log(...this.accountsData.values());
        await ctx.store.insert([... this.accountsData.values()]);
        return this.accountsData;
    }
}