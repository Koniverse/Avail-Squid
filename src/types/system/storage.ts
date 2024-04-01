import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v13 from '../v13'
import * as v20 from '../v20'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v13: new StorageType('System.Account', 'Default', [v13.AccountId32], v13.AccountInfo) as AccountV13,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.AccountInfo
    get(block: Block, key: v13.AccountId32): Promise<(v13.AccountInfo | undefined)>
    getMany(block: Block, keys: v13.AccountId32[]): Promise<(v13.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v13.AccountId32[]>
    getKeys(block: Block, key: v13.AccountId32): Promise<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<v13.AccountId32[]>
    getPairs(block: Block): Promise<[k: v13.AccountId32, v: (v13.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v13.AccountId32): Promise<[k: v13.AccountId32, v: (v13.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.AccountId32, v: (v13.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.AccountId32): AsyncIterable<[k: v13.AccountId32, v: (v13.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    v13: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountV13,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    v13: new StorageType('System.BlockWeight', 'Default', [], v13.PerDispatchClass) as BlockWeightV13,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.PerDispatchClass
    get(block: Block): Promise<(v13.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    v13: new StorageType('System.AllExtrinsicsLen', 'Optional', [], v13.ExtrinsicLen) as AllExtrinsicsLenV13,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v13.ExtrinsicLen | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v13: new StorageType('System.BlockHash', 'Default', [sts.number()], v13.H256) as BlockHashV13,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.H256
    get(block: Block, key: number): Promise<(v13.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v13.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v13.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v13.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v13.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v13.H256 | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    v13: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataV13,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataV13  {
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

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    v13: new StorageType('System.Number', 'Default', [], sts.number()) as NumberV13,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    v13: new StorageType('System.ParentHash', 'Default', [], v13.H256) as ParentHashV13,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.H256
    get(block: Block): Promise<(v13.H256 | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    v13: new StorageType('System.Digest', 'Default', [], v13.Digest) as DigestV13,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.Digest
    get(block: Block): Promise<(v13.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v13: new StorageType('System.Events', 'Default', [], sts.array(() => v13.EventRecord)) as EventsV13,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v20: new StorageType('System.Events', 'Default', [], sts.array(() => v20.EventRecord)) as EventsV20,
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.EventRecord[]
    get(block: Block): Promise<(v13.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV20  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v20.EventRecord[]
    get(block: Block): Promise<(v20.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    v13: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountV13,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    v13: new StorageType('System.EventTopics', 'Default', [v13.H256], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as EventTopicsV13,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: v13.H256): Promise<([number, number][] | undefined)>
    getMany(block: Block, keys: v13.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<v13.H256[]>
    getKeys(block: Block, key: v13.H256): Promise<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v13.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<v13.H256[]>
    getPairs(block: Block): Promise<[k: v13.H256, v: ([number, number][] | undefined)][]>
    getPairs(block: Block, key: v13.H256): Promise<[k: v13.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v13.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v13.H256): AsyncIterable<[k: v13.H256, v: ([number, number][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    v13: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], v13.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeV13,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v13.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    v13: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountV13,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    v13: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountV13,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    v13: new StorageType('System.ExecutionPhase', 'Optional', [], v13.Type_98) as ExecutionPhaseV13,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseV13  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v13.Type_98 | undefined)>
}

export const dynamicBlockLength =  {
    /**
     *  The dynamic block length
     */
    v13: new StorageType('System.DynamicBlockLength', 'Default', [], v13.BlockLength) as DynamicBlockLengthV13,
}

/**
 *  The dynamic block length
 */
export interface DynamicBlockLengthV13  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v13.BlockLength
    get(block: Block): Promise<(v13.BlockLength | undefined)>
}

export const bridgeNonce =  {
    /**
     *  Total number of messages bridged to other chains
     */
    v20: new StorageType('System.BridgeNonce', 'Default', [], sts.bigint()) as BridgeNonceV20,
}

/**
 *  Total number of messages bridged to other chains
 */
export interface BridgeNonceV20  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const failedExtrinsicIndices =  {
    /**
     *  List of failed indices in the current block
     */
    v20: new StorageType('System.FailedExtrinsicIndices', 'Default', [], sts.array(() => sts.number())) as FailedExtrinsicIndicesV20,
}

/**
 *  List of failed indices in the current block
 */
export interface FailedExtrinsicIndicesV20  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}
