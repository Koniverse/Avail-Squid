import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v13 from '../v13'

export const minJoinBond =  {
    /**
     *  Minimum amount to bond to join a pool.
     */
    v13: new StorageType('NominationPools.MinJoinBond', 'Default', [], sts.bigint()) as MinJoinBondV13,
}

/**
 *  Minimum amount to bond to join a pool.
 */
export interface MinJoinBondV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const minCreateBond =  {
    /**
     *  Minimum bond required to create a pool.
     * 
     *  This is the amount that the depositor must put as their initial stake in the pool, as an
     *  indication of "skin in the game".
     * 
     *  This is the value that will always exist in the staking ledger of the pool bonded account
     *  while all other accounts leave.
     */
    v13: new StorageType('NominationPools.MinCreateBond', 'Default', [], sts.bigint()) as MinCreateBondV13,
}

/**
 *  Minimum bond required to create a pool.
 * 
 *  This is the amount that the depositor must put as their initial stake in the pool, as an
 *  indication of "skin in the game".
 * 
 *  This is the value that will always exist in the staking ledger of the pool bonded account
 *  while all other accounts leave.
 */
export interface MinCreateBondV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const maxPools =  {
    /**
     *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
     *  pools can exist.
     */
    v13: new StorageType('NominationPools.MaxPools', 'Optional', [], sts.number()) as MaxPoolsV13,
}

/**
 *  Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 *  pools can exist.
 */
export interface MaxPoolsV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembers =  {
    /**
     *  Maximum number of members that can exist in the system. If `None`, then the count
     *  members are not bound on a system wide basis.
     */
    v13: new StorageType('NominationPools.MaxPoolMembers', 'Optional', [], sts.number()) as MaxPoolMembersV13,
}

/**
 *  Maximum number of members that can exist in the system. If `None`, then the count
 *  members are not bound on a system wide basis.
 */
export interface MaxPoolMembersV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const maxPoolMembersPerPool =  {
    /**
     *  Maximum number of members that may belong to pool. If `None`, then the count of
     *  members is not bound on a per pool basis.
     */
    v13: new StorageType('NominationPools.MaxPoolMembersPerPool', 'Optional', [], sts.number()) as MaxPoolMembersPerPoolV13,
}

/**
 *  Maximum number of members that may belong to pool. If `None`, then the count of
 *  members is not bound on a per pool basis.
 */
export interface MaxPoolMembersPerPoolV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const globalMaxCommission =  {
    /**
     *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
     *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
     *  `GlobalMaxCommission` is lower than some current pool commissions.
     */
    v13: new StorageType('NominationPools.GlobalMaxCommission', 'Optional', [], v13.Perbill) as GlobalMaxCommissionV13,
}

/**
 *  The maximum commission that can be charged by a pool. Used on commission payouts to bound
 *  pool commissions that are > `GlobalMaxCommission`, necessary if a future
 *  `GlobalMaxCommission` is lower than some current pool commissions.
 */
export interface GlobalMaxCommissionV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v13.Perbill | undefined)>
}

export const poolMembers =  {
    /**
     *  Active members.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    v13: new StorageType('NominationPools.PoolMembers', 'Optional', [v13.AccountId32], v13.PoolMember) as PoolMembersV13,
}

/**
 *  Active members.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface PoolMembersV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.AccountId32): Promise<(v13.PoolMember | undefined)>
    getMany(block: Block, keys: v13.AccountId32[]): Promise<(v13.PoolMember | undefined)[]>
    getKeys(block: Block): Promise<v13.AccountId32[]>
    getKeys(block: Block, key: v13.AccountId32): Promise<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<v13.AccountId32[]>
    getPairs(block: Block): Promise<[k: v13.AccountId32, v: (v13.PoolMember | undefined)][]>
    getPairs(block: Block, key: v13.AccountId32): Promise<[k: v13.AccountId32, v: (v13.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.AccountId32, v: (v13.PoolMember | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<[k: v13.AccountId32, v: (v13.PoolMember | undefined)][]>
}

export const counterForPoolMembers =  {
    /**
     * Counter for the related counted storage map
     */
    v13: new StorageType('NominationPools.CounterForPoolMembers', 'Default', [], sts.number()) as CounterForPoolMembersV13,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForPoolMembersV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const bondedPools =  {
    /**
     *  Storage for bonded pools.
     */
    v13: new StorageType('NominationPools.BondedPools', 'Optional', [sts.number()], v13.BondedPoolInner) as BondedPoolsV13,
}

/**
 *  Storage for bonded pools.
 */
export interface BondedPoolsV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v13.BondedPoolInner | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v13.BondedPoolInner | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v13.BondedPoolInner | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v13.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v13.BondedPoolInner | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v13.BondedPoolInner | undefined)][]>
}

export const counterForBondedPools =  {
    /**
     * Counter for the related counted storage map
     */
    v13: new StorageType('NominationPools.CounterForBondedPools', 'Default', [], sts.number()) as CounterForBondedPoolsV13,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForBondedPoolsV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const rewardPools =  {
    /**
     *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
     *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
     */
    v13: new StorageType('NominationPools.RewardPools', 'Optional', [sts.number()], v13.RewardPool) as RewardPoolsV13,
}

/**
 *  Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 *  claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
 */
export interface RewardPoolsV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v13.RewardPool | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v13.RewardPool | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v13.RewardPool | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v13.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v13.RewardPool | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v13.RewardPool | undefined)][]>
}

export const counterForRewardPools =  {
    /**
     * Counter for the related counted storage map
     */
    v13: new StorageType('NominationPools.CounterForRewardPools', 'Default', [], sts.number()) as CounterForRewardPoolsV13,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForRewardPoolsV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const subPoolsStorage =  {
    /**
     *  Groups of unbonding pools. Each group of unbonding pools belongs to a
     *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
     */
    v13: new StorageType('NominationPools.SubPoolsStorage', 'Optional', [sts.number()], v13.SubPools) as SubPoolsStorageV13,
}

/**
 *  Groups of unbonding pools. Each group of unbonding pools belongs to a
 *  bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
 */
export interface SubPoolsStorageV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(v13.SubPools | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v13.SubPools | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v13.SubPools | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v13.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v13.SubPools | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v13.SubPools | undefined)][]>
}

export const counterForSubPoolsStorage =  {
    /**
     * Counter for the related counted storage map
     */
    v13: new StorageType('NominationPools.CounterForSubPoolsStorage', 'Default', [], sts.number()) as CounterForSubPoolsStorageV13,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForSubPoolsStorageV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const metadata =  {
    /**
     *  Metadata for the pool.
     */
    v13: new StorageType('NominationPools.Metadata', 'Default', [sts.number()], sts.bytes()) as MetadataV13,
}

/**
 *  Metadata for the pool.
 */
export interface MetadataV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const counterForMetadata =  {
    /**
     * Counter for the related counted storage map
     */
    v13: new StorageType('NominationPools.CounterForMetadata', 'Default', [], sts.number()) as CounterForMetadataV13,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForMetadataV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lastPoolId =  {
    /**
     *  Ever increasing number of all pools created so far.
     */
    v13: new StorageType('NominationPools.LastPoolId', 'Default', [], sts.number()) as LastPoolIdV13,
}

/**
 *  Ever increasing number of all pools created so far.
 */
export interface LastPoolIdV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const reversePoolIdLookup =  {
    /**
     *  A reverse lookup from the pool's account id to its id.
     * 
     *  This is only used for slashing. In all other instances, the pool id is used, and the
     *  accounts are deterministically derived from it.
     */
    v13: new StorageType('NominationPools.ReversePoolIdLookup', 'Optional', [v13.AccountId32], sts.number()) as ReversePoolIdLookupV13,
}

/**
 *  A reverse lookup from the pool's account id to its id.
 * 
 *  This is only used for slashing. In all other instances, the pool id is used, and the
 *  accounts are deterministically derived from it.
 */
export interface ReversePoolIdLookupV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v13.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: v13.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<v13.AccountId32[]>
    getKeys(block: Block, key: v13.AccountId32): Promise<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<v13.AccountId32[]>
    getPairs(block: Block): Promise<[k: v13.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: v13.AccountId32): Promise<[k: v13.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<[k: v13.AccountId32, v: (number | undefined)][]>
}

export const counterForReversePoolIdLookup =  {
    /**
     * Counter for the related counted storage map
     */
    v13: new StorageType('NominationPools.CounterForReversePoolIdLookup', 'Default', [], sts.number()) as CounterForReversePoolIdLookupV13,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForReversePoolIdLookupV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const claimPermissions =  {
    /**
     *  Map from a pool member account to their opted claim permission.
     */
    v13: new StorageType('NominationPools.ClaimPermissions', 'Default', [v13.AccountId32], v13.ClaimPermission) as ClaimPermissionsV13,
}

/**
 *  Map from a pool member account to their opted claim permission.
 */
export interface ClaimPermissionsV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.ClaimPermission
    get(block: Block, key: v13.AccountId32): Promise<(v13.ClaimPermission | undefined)>
    getMany(block: Block, keys: v13.AccountId32[]): Promise<(v13.ClaimPermission | undefined)[]>
    getKeys(block: Block): Promise<v13.AccountId32[]>
    getKeys(block: Block, key: v13.AccountId32): Promise<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<v13.AccountId32[]>
    getPairs(block: Block): Promise<[k: v13.AccountId32, v: (v13.ClaimPermission | undefined)][]>
    getPairs(block: Block, key: v13.AccountId32): Promise<[k: v13.AccountId32, v: (v13.ClaimPermission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.AccountId32, v: (v13.ClaimPermission | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<[k: v13.AccountId32, v: (v13.ClaimPermission | undefined)][]>
}
