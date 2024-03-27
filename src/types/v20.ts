import {sts, Result, Option, Bytes, BitSequence} from './support'

export interface EventRecord {
    phase: Type_105
    event: Event
    topics: H256[]
}

export type H256 = Bytes

export type Event = Event_Balances | Event_Bounties | Event_DataAvailability | Event_ElectionProviderMultiPhase | Event_Grandpa | Event_Identity | Event_ImOnline | Event_Indices | Event_Mandate | Event_Multisig | Event_NomadDABridge | Event_NomadHome | Event_NomadUpdaterManager | Event_NominationPools | Event_Offences | Event_Preimage | Event_Proxy | Event_Scheduler | Event_Session | Event_Staking | Event_Succinct | Event_Sudo | Event_System | Event_TechnicalCommittee | Event_TechnicalMembership | Event_Tips | Event_TransactionPayment | Event_Treasury | Event_Utility | Event_VoterList

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_DataAvailability {
    __kind: 'DataAvailability'
    value: DataAvailabilityEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_Indices {
    __kind: 'Indices'
    value: IndicesEvent
}

export interface Event_Mandate {
    __kind: 'Mandate'
    value: MandateEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_NomadDABridge {
    __kind: 'NomadDABridge'
    value: NomadDABridgeEvent
}

export interface Event_NomadHome {
    __kind: 'NomadHome'
    value: NomadHomeEvent
}

export interface Event_NomadUpdaterManager {
    __kind: 'NomadUpdaterManager'
    value: NomadUpdaterManagerEvent
}

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Proxy {
    __kind: 'Proxy'
    value: ProxyEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Succinct {
    __kind: 'Succinct'
    value: SuccinctEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Tips {
    __kind: 'Tips'
    value: TipsEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

/**
 * The `Event` enum of this pallet
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: AccountId32
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: AccountId32
    newScore: bigint
}

export type AccountId32 = Bytes

/**
 * The `Event` enum of this pallet
 */
export type UtilityEvent = UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_BatchInterrupted | UtilityEvent_DispatchedAs | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Result<null, DispatchError>
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

export type DispatchError = DispatchError_Arithmetic | DispatchError_BadOrigin | DispatchError_CannotLookup | DispatchError_ConsumerRemaining | DispatchError_Corruption | DispatchError_Exhausted | DispatchError_Module | DispatchError_NoProviders | DispatchError_Other | DispatchError_RootNotAllowed | DispatchError_Token | DispatchError_TooManyConsumers | DispatchError_Transactional | DispatchError_Unavailable

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export type TokenError = TokenError_BelowMinimum | TokenError_Blocked | TokenError_CannotCreate | TokenError_CannotCreateHold | TokenError_Frozen | TokenError_FundsUnavailable | TokenError_NotExpendable | TokenError_OnlyProvider | TokenError_UnknownAsset | TokenError_Unsupported

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface ModuleError {
    index: number
    error: Bytes
}

export type ArithmeticError = ArithmeticError_DivisionByZero | ArithmeticError_Overflow | ArithmeticError_Underflow

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

/**
 * The `Event` enum of this pallet
 */
export type TreasuryEvent = TreasuryEvent_Awarded | TreasuryEvent_Burnt | TreasuryEvent_Deposit | TreasuryEvent_Proposed | TreasuryEvent_Rejected | TreasuryEvent_Rollover | TreasuryEvent_SpendApproved | TreasuryEvent_Spending | TreasuryEvent_UpdatedInactive

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: AccountId32
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: AccountId32
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface TreasuryEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: AccountId32
    actualFee: bigint
    tip: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosed | TipsEvent_TipClosing | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened.
 */
export interface TipsEvent_NewTip {
    __kind: 'NewTip'
    tipHash: H256
}

/**
 * A tip suggestion has been closed.
 */
export interface TipsEvent_TipClosed {
    __kind: 'TipClosed'
    tipHash: H256
    who: AccountId32
    payout: bigint
}

/**
 * A tip suggestion has reached threshold and is closing.
 */
export interface TipsEvent_TipClosing {
    __kind: 'TipClosing'
    tipHash: H256
}

/**
 * A tip suggestion has been retracted.
 */
export interface TipsEvent_TipRetracted {
    __kind: 'TipRetracted'
    tipHash: H256
}

/**
 * A tip suggestion has been slashed.
 */
export interface TipsEvent_TipSlashed {
    __kind: 'TipSlashed'
    tipHash: H256
    finder: AccountId32
    deposit: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_Dummy | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_MembersSwapped

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * The `Event` enum of this pallet
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Closed | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: H256
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: H256
    yes: number
    no: number
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: H256
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: H256
    result: Result<null, DispatchError>
}

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: AccountId32
    proposalIndex: number
    proposalHash: H256
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: AccountId32
    proposalHash: H256
    voted: boolean
    yes: number
    no: number
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_CodeUpdated | SystemEvent_ExtrinsicFailed | SystemEvent_ExtrinsicSuccess | SystemEvent_KilledAccount | SystemEvent_NewAccount | SystemEvent_Remarked | SystemEvent_RemarkedByRoot

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: AccountId32
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: AccountId32
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: AccountId32
    hash: H256
}

/**
 * On on-chain remark happend called by Root.
 */
export interface SystemEvent_RemarkedByRoot {
    __kind: 'RemarkedByRoot'
    hash: H256
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type Pays = Pays_No | Pays_Yes

export interface Pays_No {
    __kind: 'No'
}

export interface Pays_Yes {
    __kind: 'Yes'
}

export type DispatchClass = DispatchClass_Mandatory | DispatchClass_Normal | DispatchClass_Operational

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type SudoEvent = SudoEvent_KeyChanged | SudoEvent_Sudid | SudoEvent_SudoAsDone

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer?: (AccountId32 | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Result<null, DispatchError>
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Result<null, DispatchError>
}

/**
 * The `Event` enum of this pallet
 */
export type SuccinctEvent = SuccinctEvent_BroadcasterUpdate | SuccinctEvent_ConfigurationUpdated | SuccinctEvent_ExecutedMessage | SuccinctEvent_HeaderUpdate | SuccinctEvent_MessageSubmitted | SuccinctEvent_SourceChainFrozen | SuccinctEvent_SyncCommitteeUpdate | SuccinctEvent_WhitelistedDomainsUpdated

/**
 * emit when new updater is set
 */
export interface SuccinctEvent_BroadcasterUpdate {
    __kind: 'BroadcasterUpdate'
    old: H256
    new: H256
    domain: number
}

/**
 * Configuration was updated.
 */
export interface SuccinctEvent_ConfigurationUpdated {
    __kind: 'ConfigurationUpdated'
    slotsPerPeriod: bigint
    finalityThreshold: number
}

/**
 * emit when message gets executed.
 */
export interface SuccinctEvent_ExecutedMessage {
    __kind: 'ExecutedMessage'
    from: H256
    to: H256
    messageId: bigint
    messageRoot: H256
}

/**
 * emit event once the head is updated.
 */
export interface SuccinctEvent_HeaderUpdate {
    __kind: 'HeaderUpdate'
    slot: bigint
    finalizationRoot: H256
    executionStateRoot: H256
}

/**
 * emit when message is submitted.
 */
export interface SuccinctEvent_MessageSubmitted {
    __kind: 'MessageSubmitted'
    from: AccountId32
    to: H256
    messageType: MessageType
    destinationDomain: number
}

/**
 * emit if source chain gets frozen.
 */
export interface SuccinctEvent_SourceChainFrozen {
    __kind: 'SourceChainFrozen'
    sourceChainId: number
    frozen: boolean
}

/**
 * emit event once the sync committee updates.
 */
export interface SuccinctEvent_SyncCommitteeUpdate {
    __kind: 'SyncCommitteeUpdate'
    period: bigint
    root: bigint
}

/**
 * Whitelisted domains were updated.
 */
export interface SuccinctEvent_WhitelistedDomainsUpdated {
    __kind: 'WhitelistedDomainsUpdated'
}

export type MessageType = MessageType_ArbitraryMessage | MessageType_FungibleToken

export interface MessageType_ArbitraryMessage {
    __kind: 'ArbitraryMessage'
}

export interface MessageType_FungibleToken {
    __kind: 'FungibleToken'
}

/**
 * The `Event` enum of this pallet
 */
export type StakingEvent = StakingEvent_Bonded | StakingEvent_Chilled | StakingEvent_EraPaid | StakingEvent_ForceEra | StakingEvent_Kicked | StakingEvent_OldSlashingReportDiscarded | StakingEvent_PayoutStarted | StakingEvent_Rewarded | StakingEvent_SlashReported | StakingEvent_Slashed | StakingEvent_StakersElected | StakingEvent_StakingElectionFailed | StakingEvent_Unbonded | StakingEvent_ValidatorPrefsSet | StakingEvent_Withdrawn

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: AccountId32
    amount: bigint
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: AccountId32
}

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

/**
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: AccountId32
    stash: AccountId32
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: AccountId32
}

/**
 * The nominator has been rewarded by this amount.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: AccountId32
    amount: bigint
}

/**
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: AccountId32
    fraction: Perbill
    slashEra: number
}

/**
 * A staker (validator or nominator) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: AccountId32
    amount: bigint
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: AccountId32
    amount: bigint
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: AccountId32
    prefs: ValidatorPrefs
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: AccountId32
    amount: bigint
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type Perbill = number

export type Forcing = Forcing_ForceAlways | Forcing_ForceNew | Forcing_ForceNone | Forcing_NotForcing

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

/**
 * The `Event` enum of this pallet
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_CallUnavailable | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_PeriodicFailed | SchedulerEvent_PermanentlyOverweight | SchedulerEvent_Scheduled

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id?: (Bytes | undefined)
    result: Result<null, DispatchError>
}

/**
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id?: (Bytes | undefined)
}

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type ProxyEvent = ProxyEvent_Announced | ProxyEvent_ProxyAdded | ProxyEvent_ProxyExecuted | ProxyEvent_ProxyRemoved | ProxyEvent_PureCreated

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
    __kind: 'Announced'
    real: AccountId32
    proxy: AccountId32
    callHash: H256
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
    __kind: 'ProxyAdded'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
    __kind: 'ProxyExecuted'
    result: Result<null, DispatchError>
}

/**
 * A proxy was removed.
 */
export interface ProxyEvent_ProxyRemoved {
    __kind: 'ProxyRemoved'
    delegator: AccountId32
    delegatee: AccountId32
    proxyType: ProxyType
    delay: number
}

/**
 * A pure account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_PureCreated {
    __kind: 'PureCreated'
    pure: AccountId32
    who: AccountId32
    proxyType: ProxyType
    disambiguationIndex: number
}

export type ProxyType = ProxyType_Any | ProxyType_Governance | ProxyType_NonTransfer | ProxyType_Staking

export interface ProxyType_Any {
    __kind: 'Any'
}

export interface ProxyType_Governance {
    __kind: 'Governance'
}

export interface ProxyType_NonTransfer {
    __kind: 'NonTransfer'
}

export interface ProxyType_Staking {
    __kind: 'Staking'
}

/**
 * The `Event` enum of this pallet
 */
export type PreimageEvent = PreimageEvent_Cleared | PreimageEvent_Noted | PreimageEvent_Requested

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: H256
}

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: H256
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: H256
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Bytes
    timeslot: Bytes
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent = NominationPoolsEvent_Bonded | NominationPoolsEvent_Created | NominationPoolsEvent_Destroyed | NominationPoolsEvent_MemberRemoved | NominationPoolsEvent_PaidOut | NominationPoolsEvent_PoolCommissionChangeRateUpdated | NominationPoolsEvent_PoolCommissionClaimed | NominationPoolsEvent_PoolCommissionUpdated | NominationPoolsEvent_PoolMaxCommissionUpdated | NominationPoolsEvent_PoolSlashed | NominationPoolsEvent_RolesUpdated | NominationPoolsEvent_StateChanged | NominationPoolsEvent_Unbonded | NominationPoolsEvent_UnbondingPoolSlashed | NominationPoolsEvent_Withdrawn

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: AccountId32
    poolId: number
    bonded: bigint
    joined: boolean
}

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    depositor: AccountId32
    poolId: number
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

/**
 * A member has been removed from a pool.
 * 
 * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
 */
export interface NominationPoolsEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    poolId: number
    member: AccountId32
}

/**
 * A payout has been made to a member.
 */
export interface NominationPoolsEvent_PaidOut {
    __kind: 'PaidOut'
    member: AccountId32
    poolId: number
    payout: bigint
}

/**
 * A pool's commission `change_rate` has been changed.
 */
export interface NominationPoolsEvent_PoolCommissionChangeRateUpdated {
    __kind: 'PoolCommissionChangeRateUpdated'
    poolId: number
    changeRate: CommissionChangeRate
}

/**
 * Pool commission has been claimed.
 */
export interface NominationPoolsEvent_PoolCommissionClaimed {
    __kind: 'PoolCommissionClaimed'
    poolId: number
    commission: bigint
}

/**
 * A pool's commission setting has been changed.
 */
export interface NominationPoolsEvent_PoolCommissionUpdated {
    __kind: 'PoolCommissionUpdated'
    poolId: number
    current?: ([Perbill, AccountId32] | undefined)
}

/**
 * A pool's maximum commission setting has been changed.
 */
export interface NominationPoolsEvent_PoolMaxCommissionUpdated {
    __kind: 'PoolMaxCommissionUpdated'
    poolId: number
    maxCommission: Perbill
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * The roles of a pool have been updated to the given new roles. Note that the depositor
 * can never change.
 */
export interface NominationPoolsEvent_RolesUpdated {
    __kind: 'RolesUpdated'
    root?: (AccountId32 | undefined)
    bouncer?: (AccountId32 | undefined)
    nominator?: (AccountId32 | undefined)
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * A member has unbonded from their pool.
 * 
 * - `balance` is the corresponding balance of the number of points that has been
 *   requested to be unbonded (the argument of the `unbond` transaction) from the bonded
 *   pool.
 * - `points` is the number of points that are issued as a result of `balance` being
 * dissolved into the corresponding unbonding pool.
 * - `era` is the era in which the balance will be unbonded.
 * In the absence of slashing, these values will match. In the presence of slashing, the
 * number of points that are issued in the unbonding pool will be less than the amount
 * requested to be unbonded.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
    era: number
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * A member has withdrawn from their pool.
 * 
 * The given number of `points` have been dissolved in return of `balance`.
 * 
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: AccountId32
    poolId: number
    balance: bigint
    points: bigint
}

export type PoolState = PoolState_Blocked | PoolState_Destroying | PoolState_Open

export interface PoolState_Blocked {
    __kind: 'Blocked'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface PoolState_Open {
    __kind: 'Open'
}

export interface CommissionChangeRate {
    maxIncrease: Perbill
    minDelay: number
}

/**
 * The `Event` enum of this pallet
 */
export type NomadUpdaterManagerEvent = NomadUpdaterManagerEvent_FakeSlashed | NomadUpdaterManagerEvent_NewUpdater

export interface NomadUpdaterManagerEvent_FakeSlashed {
    __kind: 'FakeSlashed'
    reporter: AccountId32
}

export interface NomadUpdaterManagerEvent_NewUpdater {
    __kind: 'NewUpdater'
    oldUpdater: H160
    newUpdater: H160
}

export type H160 = Bytes

/**
 * The `Event` enum of this pallet
 */
export type NomadHomeEvent = NomadHomeEvent_Dispatch | NomadHomeEvent_ImproperUpdate | NomadHomeEvent_Update | NomadHomeEvent_UpdaterSlashed

export interface NomadHomeEvent_Dispatch {
    __kind: 'Dispatch'
    messageHash: H256
    leafIndex: number
    destinationAndNonce: bigint
    committedRoot: H256
    message: Bytes
}

export interface NomadHomeEvent_ImproperUpdate {
    __kind: 'ImproperUpdate'
    previousRoot: H256
    newRoot: H256
    signature: Bytes
}

export interface NomadHomeEvent_Update {
    __kind: 'Update'
    homeDomain: number
    previousRoot: H256
    newRoot: H256
    signature: Bytes
}

export interface NomadHomeEvent_UpdaterSlashed {
    __kind: 'UpdaterSlashed'
    updater: H160
    reporter: AccountId32
}

/**
 * The `Event` enum of this pallet
 */
export type NomadDABridgeEvent = NomadDABridgeEvent_DataRootDispatched

export interface NomadDABridgeEvent_DataRootDispatched {
    __kind: 'DataRootDispatched'
    destinationDomain: number
    recipientAddress: H256
    blockNumber: number
    dataRoot: H256
}

/**
 * The `Event` enum of this pallet
 */
export type MultisigEvent = MultisigEvent_MultisigApproval | MultisigEvent_MultisigCancelled | MultisigEvent_MultisigExecuted | MultisigEvent_NewMultisig

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: AccountId32
    timepoint: Timepoint
    multisig: AccountId32
    callHash: Bytes
    result: Result<null, DispatchError>
}

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: AccountId32
    multisig: AccountId32
    callHash: Bytes
}

export interface Timepoint {
    height: number
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type MandateEvent = MandateEvent_RootOp

/**
 * A root operation was executed, show result
 */
export interface MandateEvent_RootOp {
    __kind: 'RootOp'
    result: Result<null, DispatchError>
}

/**
 * The `Event` enum of this pallet
 */
export type IndicesEvent = IndicesEvent_IndexAssigned | IndicesEvent_IndexFreed | IndicesEvent_IndexFrozen

/**
 * A account index was assigned.
 */
export interface IndicesEvent_IndexAssigned {
    __kind: 'IndexAssigned'
    who: AccountId32
    index: number
}

/**
 * A account index has been freed up (unassigned).
 */
export interface IndicesEvent_IndexFreed {
    __kind: 'IndexFreed'
    index: number
}

/**
 * A account index has been frozen to its current account ID.
 */
export interface IndicesEvent_IndexFrozen {
    __kind: 'IndexFrozen'
    index: number
    who: AccountId32
}

/**
 * The `Event` enum of this pallet
 */
export type ImOnlineEvent = ImOnlineEvent_AllGood | ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_SomeOffline

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Bytes
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [AccountId32, Exposure][]
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface IndividualExposure {
    who: AccountId32
    value: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type IdentityEvent = IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_IdentitySet | IdentityEvent_JudgementGiven | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: AccountId32
    deposit: bigint
}

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: AccountId32
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: AccountId32
    registrarIndex: number
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: AccountId32
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: AccountId32
    main: AccountId32
    deposit: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Public, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

export type Public = Bytes

/**
 * The `Event` enum of this pallet
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_ElectionFailed | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_PhaseTransitioned | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_SolutionStored

/**
 * An election failed.
 * 
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: AccountId32
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: AccountId32
    value: bigint
}

/**
 * A solution was stored with the given compute.
 * 
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin?: (AccountId32 | undefined)
    prevEjected: boolean
}

export type Phase = Phase_Emergency | Phase_Off | Phase_Signed | Phase_Unsigned

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export type ElectionCompute = ElectionCompute_Emergency | ElectionCompute_Fallback | ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

/**
 * Event for the pallet.
 */
export type DataAvailabilityEvent = DataAvailabilityEvent_ApplicationKeyCreated | DataAvailabilityEvent_BlockLengthProposalSubmitted | DataAvailabilityEvent_DataSubmitted

/**
 * A new application key was created.
 */
export interface DataAvailabilityEvent_ApplicationKeyCreated {
    __kind: 'ApplicationKeyCreated'
    key: BoundedVec
    owner: AccountId32
    id: AppId
}

export interface DataAvailabilityEvent_BlockLengthProposalSubmitted {
    __kind: 'BlockLengthProposalSubmitted'
    rows: BlockLengthRows
    cols: BlockLengthColumns
}

export interface DataAvailabilityEvent_DataSubmitted {
    __kind: 'DataSubmitted'
    who: AccountId32
    dataHash: H256
}

export type BlockLengthColumns = number

export type BlockLengthRows = number

export type AppId = number

export type BoundedVec = Bytes

/**
 * The `Event` enum of this pallet
 */
export type BountiesEvent = BountiesEvent_BountyAwarded | BountiesEvent_BountyBecameActive | BountiesEvent_BountyCanceled | BountiesEvent_BountyClaimed | BountiesEvent_BountyExtended | BountiesEvent_BountyProposed | BountiesEvent_BountyRejected

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    index: number
    beneficiary: AccountId32
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    index: number
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    index: number
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    index: number
    payout: bigint
    beneficiary: AccountId32
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    index: number
}

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    index: number
    bond: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type BalancesEvent = BalancesEvent_BalanceSet | BalancesEvent_Burned | BalancesEvent_Deposit | BalancesEvent_DustLost | BalancesEvent_Endowed | BalancesEvent_Frozen | BalancesEvent_Issued | BalancesEvent_Locked | BalancesEvent_Minted | BalancesEvent_Rescinded | BalancesEvent_ReserveRepatriated | BalancesEvent_Reserved | BalancesEvent_Restored | BalancesEvent_Slashed | BalancesEvent_Suspended | BalancesEvent_Thawed | BalancesEvent_Transfer | BalancesEvent_Unlocked | BalancesEvent_Unreserved | BalancesEvent_Upgraded | BalancesEvent_Withdraw

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: AccountId32
    free: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: AccountId32
    amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: AccountId32
    amount: bigint
}

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: AccountId32
    freeBalance: bigint
}

/**
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: AccountId32
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: AccountId32
    to: AccountId32
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: AccountId32
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
    who: AccountId32
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: AccountId32
    to: AccountId32
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: AccountId32
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: AccountId32
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: AccountId32
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: AccountId32
    amount: bigint
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type Type_105 = Type_105_ApplyExtrinsic | Type_105_Finalization | Type_105_Initialization

export interface Type_105_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_105_Finalization {
    __kind: 'Finalization'
}

export interface Type_105_Initialization {
    __kind: 'Initialization'
}

export const EventRecord: sts.Type<EventRecord> = sts.struct(() => {
    return  {
        phase: Type_105,
        event: Event,
        topics: sts.array(() => H256),
    }
})

export const H256 = sts.bytes()

export const Event: sts.Type<Event> = sts.closedEnum(() => {
    return  {
        Balances: BalancesEvent,
        Bounties: BountiesEvent,
        DataAvailability: DataAvailabilityEvent,
        ElectionProviderMultiPhase: ElectionProviderMultiPhaseEvent,
        Grandpa: GrandpaEvent,
        Identity: IdentityEvent,
        ImOnline: ImOnlineEvent,
        Indices: IndicesEvent,
        Mandate: MandateEvent,
        Multisig: MultisigEvent,
        NomadDABridge: NomadDABridgeEvent,
        NomadHome: NomadHomeEvent,
        NomadUpdaterManager: NomadUpdaterManagerEvent,
        NominationPools: NominationPoolsEvent,
        Offences: OffencesEvent,
        Preimage: PreimageEvent,
        Proxy: ProxyEvent,
        Scheduler: SchedulerEvent,
        Session: SessionEvent,
        Staking: StakingEvent,
        Succinct: SuccinctEvent,
        Sudo: SudoEvent,
        System: SystemEvent,
        TechnicalCommittee: TechnicalCommitteeEvent,
        TechnicalMembership: TechnicalMembershipEvent,
        Tips: TipsEvent,
        TransactionPayment: TransactionPaymentEvent,
        Treasury: TreasuryEvent,
        Utility: UtilityEvent,
        VoterList: VoterListEvent,
    }
})

/**
 * The `Event` enum of this pallet
 */
export const VoterListEvent: sts.Type<VoterListEvent> = sts.closedEnum(() => {
    return  {
        Rebagged: sts.enumStruct({
            who: AccountId32,
            from: sts.bigint(),
            to: sts.bigint(),
        }),
        ScoreUpdated: sts.enumStruct({
            who: AccountId32,
            newScore: sts.bigint(),
        }),
    }
})

export const AccountId32 = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const UtilityEvent: sts.Type<UtilityEvent> = sts.closedEnum(() => {
    return  {
        BatchCompleted: sts.unit(),
        BatchCompletedWithErrors: sts.unit(),
        BatchInterrupted: sts.enumStruct({
            index: sts.number(),
            error: DispatchError,
        }),
        DispatchedAs: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ItemCompleted: sts.unit(),
        ItemFailed: sts.enumStruct({
            error: DispatchError,
        }),
    }
})

export const DispatchError: sts.Type<DispatchError> = sts.closedEnum(() => {
    return  {
        Arithmetic: ArithmeticError,
        BadOrigin: sts.unit(),
        CannotLookup: sts.unit(),
        ConsumerRemaining: sts.unit(),
        Corruption: sts.unit(),
        Exhausted: sts.unit(),
        Module: ModuleError,
        NoProviders: sts.unit(),
        Other: sts.unit(),
        RootNotAllowed: sts.unit(),
        Token: TokenError,
        TooManyConsumers: sts.unit(),
        Transactional: TransactionalError,
        Unavailable: sts.unit(),
    }
})

export const TransactionalError: sts.Type<TransactionalError> = sts.closedEnum(() => {
    return  {
        LimitReached: sts.unit(),
        NoLayer: sts.unit(),
    }
})

export const TokenError: sts.Type<TokenError> = sts.closedEnum(() => {
    return  {
        BelowMinimum: sts.unit(),
        Blocked: sts.unit(),
        CannotCreate: sts.unit(),
        CannotCreateHold: sts.unit(),
        Frozen: sts.unit(),
        FundsUnavailable: sts.unit(),
        NotExpendable: sts.unit(),
        OnlyProvider: sts.unit(),
        UnknownAsset: sts.unit(),
        Unsupported: sts.unit(),
    }
})

export const ModuleError: sts.Type<ModuleError> = sts.struct(() => {
    return  {
        index: sts.number(),
        error: sts.bytes(),
    }
})

export const ArithmeticError: sts.Type<ArithmeticError> = sts.closedEnum(() => {
    return  {
        DivisionByZero: sts.unit(),
        Overflow: sts.unit(),
        Underflow: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TreasuryEvent: sts.Type<TreasuryEvent> = sts.closedEnum(() => {
    return  {
        Awarded: sts.enumStruct({
            proposalIndex: sts.number(),
            award: sts.bigint(),
            account: AccountId32,
        }),
        Burnt: sts.enumStruct({
            burntFunds: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            value: sts.bigint(),
        }),
        Proposed: sts.enumStruct({
            proposalIndex: sts.number(),
        }),
        Rejected: sts.enumStruct({
            proposalIndex: sts.number(),
            slashed: sts.bigint(),
        }),
        Rollover: sts.enumStruct({
            rolloverBalance: sts.bigint(),
        }),
        SpendApproved: sts.enumStruct({
            proposalIndex: sts.number(),
            amount: sts.bigint(),
            beneficiary: AccountId32,
        }),
        Spending: sts.enumStruct({
            budgetRemaining: sts.bigint(),
        }),
        UpdatedInactive: sts.enumStruct({
            reactivated: sts.bigint(),
            deactivated: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TransactionPaymentEvent: sts.Type<TransactionPaymentEvent> = sts.closedEnum(() => {
    return  {
        TransactionFeePaid: sts.enumStruct({
            who: AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TipsEvent: sts.Type<TipsEvent> = sts.closedEnum(() => {
    return  {
        NewTip: sts.enumStruct({
            tipHash: H256,
        }),
        TipClosed: sts.enumStruct({
            tipHash: H256,
            who: AccountId32,
            payout: sts.bigint(),
        }),
        TipClosing: sts.enumStruct({
            tipHash: H256,
        }),
        TipRetracted: sts.enumStruct({
            tipHash: H256,
        }),
        TipSlashed: sts.enumStruct({
            tipHash: H256,
            finder: AccountId32,
            deposit: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TechnicalMembershipEvent: sts.Type<TechnicalMembershipEvent> = sts.closedEnum(() => {
    return  {
        Dummy: sts.unit(),
        KeyChanged: sts.unit(),
        MemberAdded: sts.unit(),
        MemberRemoved: sts.unit(),
        MembersReset: sts.unit(),
        MembersSwapped: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const TechnicalCommitteeEvent: sts.Type<TechnicalCommitteeEvent> = sts.closedEnum(() => {
    return  {
        Approved: sts.enumStruct({
            proposalHash: H256,
        }),
        Closed: sts.enumStruct({
            proposalHash: H256,
            yes: sts.number(),
            no: sts.number(),
        }),
        Disapproved: sts.enumStruct({
            proposalHash: H256,
        }),
        Executed: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        MemberExecuted: sts.enumStruct({
            proposalHash: H256,
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        Proposed: sts.enumStruct({
            account: AccountId32,
            proposalIndex: sts.number(),
            proposalHash: H256,
            threshold: sts.number(),
        }),
        Voted: sts.enumStruct({
            account: AccountId32,
            proposalHash: H256,
            voted: sts.boolean(),
            yes: sts.number(),
            no: sts.number(),
        }),
    }
})

/**
 * Event for the System pallet.
 */
export const SystemEvent: sts.Type<SystemEvent> = sts.closedEnum(() => {
    return  {
        CodeUpdated: sts.unit(),
        ExtrinsicFailed: sts.enumStruct({
            dispatchError: DispatchError,
            dispatchInfo: DispatchInfo,
        }),
        ExtrinsicSuccess: sts.enumStruct({
            dispatchInfo: DispatchInfo,
        }),
        KilledAccount: sts.enumStruct({
            account: AccountId32,
        }),
        NewAccount: sts.enumStruct({
            account: AccountId32,
        }),
        Remarked: sts.enumStruct({
            sender: AccountId32,
            hash: H256,
        }),
        RemarkedByRoot: sts.enumStruct({
            hash: H256,
        }),
    }
})

export const DispatchInfo: sts.Type<DispatchInfo> = sts.struct(() => {
    return  {
        weight: Weight,
        class: DispatchClass,
        paysFee: Pays,
    }
})

export const Pays: sts.Type<Pays> = sts.closedEnum(() => {
    return  {
        No: sts.unit(),
        Yes: sts.unit(),
    }
})

export const DispatchClass: sts.Type<DispatchClass> = sts.closedEnum(() => {
    return  {
        Mandatory: sts.unit(),
        Normal: sts.unit(),
        Operational: sts.unit(),
    }
})

export const Weight: sts.Type<Weight> = sts.struct(() => {
    return  {
        refTime: sts.bigint(),
        proofSize: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SudoEvent: sts.Type<SudoEvent> = sts.closedEnum(() => {
    return  {
        KeyChanged: sts.enumStruct({
            oldSudoer: sts.option(() => AccountId32),
        }),
        Sudid: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
        SudoAsDone: sts.enumStruct({
            sudoResult: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SuccinctEvent: sts.Type<SuccinctEvent> = sts.closedEnum(() => {
    return  {
        BroadcasterUpdate: sts.enumStruct({
            old: H256,
            new: H256,
            domain: sts.number(),
        }),
        ConfigurationUpdated: sts.enumStruct({
            slotsPerPeriod: sts.bigint(),
            finalityThreshold: sts.number(),
        }),
        ExecutedMessage: sts.enumStruct({
            from: H256,
            to: H256,
            messageId: sts.bigint(),
            messageRoot: H256,
        }),
        HeaderUpdate: sts.enumStruct({
            slot: sts.bigint(),
            finalizationRoot: H256,
            executionStateRoot: H256,
        }),
        MessageSubmitted: sts.enumStruct({
            from: AccountId32,
            to: H256,
            messageType: MessageType,
            destinationDomain: sts.number(),
        }),
        SourceChainFrozen: sts.enumStruct({
            sourceChainId: sts.number(),
            frozen: sts.boolean(),
        }),
        SyncCommitteeUpdate: sts.enumStruct({
            period: sts.bigint(),
            root: sts.bigint(),
        }),
        WhitelistedDomainsUpdated: sts.unit(),
    }
})

export const MessageType: sts.Type<MessageType> = sts.closedEnum(() => {
    return  {
        ArbitraryMessage: sts.unit(),
        FungibleToken: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const StakingEvent: sts.Type<StakingEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        Chilled: sts.enumStruct({
            stash: AccountId32,
        }),
        EraPaid: sts.enumStruct({
            eraIndex: sts.number(),
            validatorPayout: sts.bigint(),
            remainder: sts.bigint(),
        }),
        ForceEra: sts.enumStruct({
            mode: Forcing,
        }),
        Kicked: sts.enumStruct({
            nominator: AccountId32,
            stash: AccountId32,
        }),
        OldSlashingReportDiscarded: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
        PayoutStarted: sts.enumStruct({
            eraIndex: sts.number(),
            validatorStash: AccountId32,
        }),
        Rewarded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        SlashReported: sts.enumStruct({
            validator: AccountId32,
            fraction: Perbill,
            slashEra: sts.number(),
        }),
        Slashed: sts.enumStruct({
            staker: AccountId32,
            amount: sts.bigint(),
        }),
        StakersElected: sts.unit(),
        StakingElectionFailed: sts.unit(),
        Unbonded: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
        ValidatorPrefsSet: sts.enumStruct({
            stash: AccountId32,
            prefs: ValidatorPrefs,
        }),
        Withdrawn: sts.enumStruct({
            stash: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const ValidatorPrefs: sts.Type<ValidatorPrefs> = sts.struct(() => {
    return  {
        commission: sts.number(),
        blocked: sts.boolean(),
    }
})

export const Perbill = sts.number()

export const Forcing: sts.Type<Forcing> = sts.closedEnum(() => {
    return  {
        ForceAlways: sts.unit(),
        ForceNew: sts.unit(),
        ForceNone: sts.unit(),
        NotForcing: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const SessionEvent: sts.Type<SessionEvent> = sts.closedEnum(() => {
    return  {
        NewSession: sts.enumStruct({
            sessionIndex: sts.number(),
        }),
    }
})

/**
 * Events type.
 */
export const SchedulerEvent: sts.Type<SchedulerEvent> = sts.closedEnum(() => {
    return  {
        CallUnavailable: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Canceled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
        Dispatched: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        PeriodicFailed: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        PermanentlyOverweight: sts.enumStruct({
            task: sts.tuple(() => [sts.number(), sts.number()]),
            id: sts.option(() => sts.bytes()),
        }),
        Scheduled: sts.enumStruct({
            when: sts.number(),
            index: sts.number(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ProxyEvent: sts.Type<ProxyEvent> = sts.closedEnum(() => {
    return  {
        Announced: sts.enumStruct({
            real: AccountId32,
            proxy: AccountId32,
            callHash: H256,
        }),
        ProxyAdded: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        ProxyExecuted: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        ProxyRemoved: sts.enumStruct({
            delegator: AccountId32,
            delegatee: AccountId32,
            proxyType: ProxyType,
            delay: sts.number(),
        }),
        PureCreated: sts.enumStruct({
            pure: AccountId32,
            who: AccountId32,
            proxyType: ProxyType,
            disambiguationIndex: sts.number(),
        }),
    }
})

export const ProxyType: sts.Type<ProxyType> = sts.closedEnum(() => {
    return  {
        Any: sts.unit(),
        Governance: sts.unit(),
        NonTransfer: sts.unit(),
        Staking: sts.unit(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const PreimageEvent: sts.Type<PreimageEvent> = sts.closedEnum(() => {
    return  {
        Cleared: sts.enumStruct({
            hash: H256,
        }),
        Noted: sts.enumStruct({
            hash: H256,
        }),
        Requested: sts.enumStruct({
            hash: H256,
        }),
    }
})

/**
 * Events type.
 */
export const OffencesEvent: sts.Type<OffencesEvent> = sts.closedEnum(() => {
    return  {
        Offence: sts.enumStruct({
            kind: sts.bytes(),
            timeslot: sts.bytes(),
        }),
    }
})

/**
 * Events of this pallet.
 */
export const NominationPoolsEvent: sts.Type<NominationPoolsEvent> = sts.closedEnum(() => {
    return  {
        Bonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            bonded: sts.bigint(),
            joined: sts.boolean(),
        }),
        Created: sts.enumStruct({
            depositor: AccountId32,
            poolId: sts.number(),
        }),
        Destroyed: sts.enumStruct({
            poolId: sts.number(),
        }),
        MemberRemoved: sts.enumStruct({
            poolId: sts.number(),
            member: AccountId32,
        }),
        PaidOut: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            payout: sts.bigint(),
        }),
        PoolCommissionChangeRateUpdated: sts.enumStruct({
            poolId: sts.number(),
            changeRate: CommissionChangeRate,
        }),
        PoolCommissionClaimed: sts.enumStruct({
            poolId: sts.number(),
            commission: sts.bigint(),
        }),
        PoolCommissionUpdated: sts.enumStruct({
            poolId: sts.number(),
            current: sts.option(() => sts.tuple(() => [Perbill, AccountId32])),
        }),
        PoolMaxCommissionUpdated: sts.enumStruct({
            poolId: sts.number(),
            maxCommission: Perbill,
        }),
        PoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            balance: sts.bigint(),
        }),
        RolesUpdated: sts.enumStruct({
            root: sts.option(() => AccountId32),
            bouncer: sts.option(() => AccountId32),
            nominator: sts.option(() => AccountId32),
        }),
        StateChanged: sts.enumStruct({
            poolId: sts.number(),
            newState: PoolState,
        }),
        Unbonded: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
            era: sts.number(),
        }),
        UnbondingPoolSlashed: sts.enumStruct({
            poolId: sts.number(),
            era: sts.number(),
            balance: sts.bigint(),
        }),
        Withdrawn: sts.enumStruct({
            member: AccountId32,
            poolId: sts.number(),
            balance: sts.bigint(),
            points: sts.bigint(),
        }),
    }
})

export const PoolState: sts.Type<PoolState> = sts.closedEnum(() => {
    return  {
        Blocked: sts.unit(),
        Destroying: sts.unit(),
        Open: sts.unit(),
    }
})

export const CommissionChangeRate: sts.Type<CommissionChangeRate> = sts.struct(() => {
    return  {
        maxIncrease: Perbill,
        minDelay: sts.number(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const NomadUpdaterManagerEvent: sts.Type<NomadUpdaterManagerEvent> = sts.closedEnum(() => {
    return  {
        FakeSlashed: sts.enumStruct({
            reporter: AccountId32,
        }),
        NewUpdater: sts.enumStruct({
            oldUpdater: H160,
            newUpdater: H160,
        }),
    }
})

export const H160 = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const NomadHomeEvent: sts.Type<NomadHomeEvent> = sts.closedEnum(() => {
    return  {
        Dispatch: sts.enumStruct({
            messageHash: H256,
            leafIndex: sts.number(),
            destinationAndNonce: sts.bigint(),
            committedRoot: H256,
            message: sts.bytes(),
        }),
        ImproperUpdate: sts.enumStruct({
            previousRoot: H256,
            newRoot: H256,
            signature: sts.bytes(),
        }),
        Update: sts.enumStruct({
            homeDomain: sts.number(),
            previousRoot: H256,
            newRoot: H256,
            signature: sts.bytes(),
        }),
        UpdaterSlashed: sts.enumStruct({
            updater: H160,
            reporter: AccountId32,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const NomadDABridgeEvent: sts.Type<NomadDABridgeEvent> = sts.closedEnum(() => {
    return  {
        DataRootDispatched: sts.enumStruct({
            destinationDomain: sts.number(),
            recipientAddress: H256,
            blockNumber: sts.number(),
            dataRoot: H256,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MultisigEvent: sts.Type<MultisigEvent> = sts.closedEnum(() => {
    return  {
        MultisigApproval: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigCancelled: sts.enumStruct({
            cancelling: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
        MultisigExecuted: sts.enumStruct({
            approving: AccountId32,
            timepoint: Timepoint,
            multisig: AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
        NewMultisig: sts.enumStruct({
            approving: AccountId32,
            multisig: AccountId32,
            callHash: sts.bytes(),
        }),
    }
})

export const Timepoint: sts.Type<Timepoint> = sts.struct(() => {
    return  {
        height: sts.number(),
        index: sts.number(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const MandateEvent: sts.Type<MandateEvent> = sts.closedEnum(() => {
    return  {
        RootOp: sts.enumStruct({
            result: sts.result(() => sts.unit(), () => DispatchError),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const IndicesEvent: sts.Type<IndicesEvent> = sts.closedEnum(() => {
    return  {
        IndexAssigned: sts.enumStruct({
            who: AccountId32,
            index: sts.number(),
        }),
        IndexFreed: sts.enumStruct({
            index: sts.number(),
        }),
        IndexFrozen: sts.enumStruct({
            index: sts.number(),
            who: AccountId32,
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const ImOnlineEvent: sts.Type<ImOnlineEvent> = sts.closedEnum(() => {
    return  {
        AllGood: sts.unit(),
        HeartbeatReceived: sts.enumStruct({
            authorityId: sts.bytes(),
        }),
        SomeOffline: sts.enumStruct({
            offline: sts.array(() => sts.tuple(() => [AccountId32, Exposure])),
        }),
    }
})

export const Exposure: sts.Type<Exposure> = sts.struct(() => {
    return  {
        total: sts.bigint(),
        own: sts.bigint(),
        others: sts.array(() => IndividualExposure),
    }
})

export const IndividualExposure: sts.Type<IndividualExposure> = sts.struct(() => {
    return  {
        who: AccountId32,
        value: sts.bigint(),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const IdentityEvent: sts.Type<IdentityEvent> = sts.closedEnum(() => {
    return  {
        IdentityCleared: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentityKilled: sts.enumStruct({
            who: AccountId32,
            deposit: sts.bigint(),
        }),
        IdentitySet: sts.enumStruct({
            who: AccountId32,
        }),
        JudgementGiven: sts.enumStruct({
            target: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementRequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        JudgementUnrequested: sts.enumStruct({
            who: AccountId32,
            registrarIndex: sts.number(),
        }),
        RegistrarAdded: sts.enumStruct({
            registrarIndex: sts.number(),
        }),
        SubIdentityAdded: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRemoved: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
        SubIdentityRevoked: sts.enumStruct({
            sub: AccountId32,
            main: AccountId32,
            deposit: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const GrandpaEvent: sts.Type<GrandpaEvent> = sts.closedEnum(() => {
    return  {
        NewAuthorities: sts.enumStruct({
            authoritySet: sts.array(() => sts.tuple(() => [Public, sts.bigint()])),
        }),
        Paused: sts.unit(),
        Resumed: sts.unit(),
    }
})

export const Public = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const ElectionProviderMultiPhaseEvent: sts.Type<ElectionProviderMultiPhaseEvent> = sts.closedEnum(() => {
    return  {
        ElectionFailed: sts.unit(),
        ElectionFinalized: sts.enumStruct({
            compute: ElectionCompute,
            score: ElectionScore,
        }),
        PhaseTransitioned: sts.enumStruct({
            from: Phase,
            to: Phase,
            round: sts.number(),
        }),
        Rewarded: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            account: AccountId32,
            value: sts.bigint(),
        }),
        SolutionStored: sts.enumStruct({
            compute: ElectionCompute,
            origin: sts.option(() => AccountId32),
            prevEjected: sts.boolean(),
        }),
    }
})

export const Phase: sts.Type<Phase> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Off: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.tuple(() => [sts.boolean(), sts.number()]),
    }
})

export const ElectionScore: sts.Type<ElectionScore> = sts.struct(() => {
    return  {
        minimalStake: sts.bigint(),
        sumStake: sts.bigint(),
        sumStakeSquared: sts.bigint(),
    }
})

export const ElectionCompute: sts.Type<ElectionCompute> = sts.closedEnum(() => {
    return  {
        Emergency: sts.unit(),
        Fallback: sts.unit(),
        OnChain: sts.unit(),
        Signed: sts.unit(),
        Unsigned: sts.unit(),
    }
})

/**
 * Event for the pallet.
 */
export const DataAvailabilityEvent: sts.Type<DataAvailabilityEvent> = sts.closedEnum(() => {
    return  {
        ApplicationKeyCreated: sts.enumStruct({
            key: BoundedVec,
            owner: AccountId32,
            id: AppId,
        }),
        BlockLengthProposalSubmitted: sts.enumStruct({
            rows: BlockLengthRows,
            cols: BlockLengthColumns,
        }),
        DataSubmitted: sts.enumStruct({
            who: AccountId32,
            dataHash: H256,
        }),
    }
})

export const BlockLengthColumns = sts.number()

export const BlockLengthRows = sts.number()

export const AppId = sts.number()

export const BoundedVec = sts.bytes()

/**
 * The `Event` enum of this pallet
 */
export const BountiesEvent: sts.Type<BountiesEvent> = sts.closedEnum(() => {
    return  {
        BountyAwarded: sts.enumStruct({
            index: sts.number(),
            beneficiary: AccountId32,
        }),
        BountyBecameActive: sts.enumStruct({
            index: sts.number(),
        }),
        BountyCanceled: sts.enumStruct({
            index: sts.number(),
        }),
        BountyClaimed: sts.enumStruct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: AccountId32,
        }),
        BountyExtended: sts.enumStruct({
            index: sts.number(),
        }),
        BountyProposed: sts.enumStruct({
            index: sts.number(),
        }),
        BountyRejected: sts.enumStruct({
            index: sts.number(),
            bond: sts.bigint(),
        }),
    }
})

/**
 * The `Event` enum of this pallet
 */
export const BalancesEvent: sts.Type<BalancesEvent> = sts.closedEnum(() => {
    return  {
        BalanceSet: sts.enumStruct({
            who: AccountId32,
            free: sts.bigint(),
        }),
        Burned: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Deposit: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        DustLost: sts.enumStruct({
            account: AccountId32,
            amount: sts.bigint(),
        }),
        Endowed: sts.enumStruct({
            account: AccountId32,
            freeBalance: sts.bigint(),
        }),
        Frozen: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Issued: sts.enumStruct({
            amount: sts.bigint(),
        }),
        Locked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Minted: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Rescinded: sts.enumStruct({
            amount: sts.bigint(),
        }),
        ReserveRepatriated: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
            destinationStatus: BalanceStatus,
        }),
        Reserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Restored: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Slashed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Suspended: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Thawed: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Transfer: sts.enumStruct({
            from: AccountId32,
            to: AccountId32,
            amount: sts.bigint(),
        }),
        Unlocked: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Unreserved: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
        Upgraded: sts.enumStruct({
            who: AccountId32,
        }),
        Withdraw: sts.enumStruct({
            who: AccountId32,
            amount: sts.bigint(),
        }),
    }
})

export const BalanceStatus: sts.Type<BalanceStatus> = sts.closedEnum(() => {
    return  {
        Free: sts.unit(),
        Reserved: sts.unit(),
    }
})

export const Type_105: sts.Type<Type_105> = sts.closedEnum(() => {
    return  {
        ApplyExtrinsic: sts.number(),
        Finalization: sts.unit(),
        Initialization: sts.unit(),
    }
})
