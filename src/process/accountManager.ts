import { Account } from "../model";
import { ctx } from "../processor";
import { hexToNativeAddress } from "../util/util";

const importAccount = async (publicKey: string) => {
  const idExist = await ctx.store.findOne(Account, {
    where:{
      id: publicKey
    }
  })
  if(idExist == undefined){
    await ctx.store.save(
      new Account({ id: publicKey, address: hexToNativeAddress(publicKey) })
    );
  }
};

export default importAccount;