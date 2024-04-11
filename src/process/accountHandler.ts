import { Account } from "../model";
import { ctx } from "../processor";
import { hexToNativeAddress } from "../util/util";
import { In } from "typeorm";

export class AccountQuerier {
  private AccountMap: Record<string, Account> = {};

  public startRecord() {
    this.AccountMap = {};
  }

  getAccountId(address: string): Account {
    if(!this.AccountMap[address]) {
      this.AccountMap[address] = new Account({id: address, address: hexToNativeAddress(address)});
    }

    return this.AccountMap[address];
  }

  public stopRecord = async () => {
  const accounts:Account[] = [];
  

  const existedAccount = await ctx.store.findBy(Account, {
    id: In(Object.keys(this.AccountMap))
  });

  const nonExistedIDs = Object.keys(this.AccountMap).filter(id => !existedAccount.some(account => account.id === id));
    nonExistedIDs.forEach(id => {
      accounts.push(new Account({id: id, address: hexToNativeAddress(id)}));
    })

    console.time('insert-account')
  await ctx.store.upsert(accounts);
  console.timeEnd('insert-account')

  }
  
  //singleton
  private static instance: AccountQuerier;
  private constructor() {}
  public static getInstance(): AccountQuerier {
    if (!AccountQuerier.instance) {
      AccountQuerier.instance = new AccountQuerier();
    }
    return AccountQuerier.instance;
  }
}