import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v13 from '../v13'

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     * Transfer succeeded.
     */
    v13: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: v13.AccountId32,
            to: v13.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
