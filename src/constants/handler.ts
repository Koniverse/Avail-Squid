import { TransferBalance } from "../process/transferBalance";
import { StakingBondHandler } from "../process/stakingBondHandler";
import { StakingUnbondHandler } from "../process/stakingUnbondHandler";
import { StakingRebondHandler } from "../process/stakingRebondHandler";
import { StakingNominateHandler } from "../process/stakingNominateHandler";
import { StakingChillHandler } from "../process/stakingChillHandler";
import { StakingWithdrawHandler } from "../process/stakingWithdrawHandler";
import { StakingRewardHandler } from "../process/stakingRewardHandler";
import { NpoolJoinHandler } from "../process/npoolJoinHandler";
import { NpoolUnbondHandler } from "../process/npoolUnbondHandler";
import { NpoolBondExtraHandler } from "../process/npoolBondExtraHandler";
import { NpoolWithdrawUnbondHandler } from "../process/npoolWithdrawHandler";
import { NpoolPaidOutHandler } from "../process/npoolPaidOutHandler";
import { StakingNominateUtilityHandler } from "../process/stakingNominateUtilityHandler";
import { IHandler } from "../interfaces/interfaces";

export const HandlerMap: Record<string, IHandler> = {
    "Balances.Transfer": new TransferBalance(),
    "Staking.Bonded": new StakingBondHandler(),
    "Staking.Unbonded": new StakingUnbondHandler(),
    "Staking.Rebonded": new StakingRebondHandler(),
    "Staking.nominate": new StakingNominateHandler(),
    "Staking.NominateUtility": new StakingNominateUtilityHandler(),
    "Staking.Chilled": new StakingChillHandler(),
    "Staking.Withdrawn": new StakingWithdrawHandler(),
    "Staking.Rewarded": new StakingRewardHandler(),
    "NominationPools.Bonded": new NpoolJoinHandler(),
    "NominationPools.Unbonded": new NpoolUnbondHandler(),
    "Npool.BondExtra": new NpoolBondExtraHandler(),
    "NominationPools.Withdrawn": new NpoolWithdrawUnbondHandler(),
    "NominationPools.PaidOut": new NpoolPaidOutHandler()
};

export const CallArr = [
    "Balances.transfer",
    "Staking.bond",
    "Staking.unbond",
    "Staking.rebond",
    "Staking.nominate",
    "Staking.chill",
    "Staking.withdraw_unbonded",
    "Staking.payout_stakers",
    "Utility.batch_all",
    "NominationPools.join",
    "NominationPools.unbond",
    "NominationPools.bond_extra",
    "NominationPools.withdraw_unbonded",
]