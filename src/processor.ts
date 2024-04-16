import { assertNotNull } from "@subsquid/util-internal";
import { KnownArchives, lookupArchive } from "@subsquid/archive-registry";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import {
  Block,
  DataHandlerContext,
  SubstrateBatchProcessor,
  Event as _Event,
  Call as _Call,
  Extrinsic as _Extrinsic,
} from "@subsquid/substrate-processor";
import { AccountQuerier } from "./process/accountHandler";
import { CallArr, HandlerMap } from "./constants/handler";

export type Event = _Event<Fields>;
export type Call = _Call<Fields>;
export type Extrinsic = _Extrinsic<Fields>;

const network = process.env.NETWORK;
if (!network) {
  throw new Error("Network not set in environment.");
}

const ARCHIVE = process.env[
  `ARCHIVE_LOOKUP_NAME_${network.toUpperCase()}`
] as KnownArchives;
const USE_ONLY_RPC = process.env.USE_ONLY_RPC === "true";
export const SUPPORT_HOT_BLOCKS = process.env.SUPPORT_HOT_BLOCKS === "true";
const START_BLOCK = parseInt(process.env.START_BLOCK || "0");
const BATCH_SIZE = parseInt(process.env.PROCESSOR_BATCH_SIZE || "1000");

console.log(`
    Network: ${network}
    RPC URL: ${process.env.RPC_ENDPOINT}
    Archive: ${USE_ONLY_RPC ? "None" : ARCHIVE}
    Support hot blocks: ${SUPPORT_HOT_BLOCKS}
    Start block: ${START_BLOCK}
    Batch size: ${BATCH_SIZE}
`);

const database = new TypeormDatabase({ supportHotBlocks: SUPPORT_HOT_BLOCKS });
const fields = {
  event: {
    phase: true,
  },
  extrinsic: {
    signature: true,
    success: true,
    error: true,
    hash: true,
    version: true,
    fee: true,
  },
  call: {
    name: true,
    args: true,
  },
  block: {
    timestamp: true,
    stateRoot: true,
    extrinsicsRoot: true,
    validator: true,
  },
};

export type Fields = typeof fields;
export const processor = new SubstrateBatchProcessor()
  .setGateway(lookupArchive(ARCHIVE, { release: "ArrowSquid" }))
  .setRpcEndpoint({
    url: assertNotNull(process.env.RPC_ENDPOINT),
    rateLimit: 10,
  })
  .setBlockRange({ from: START_BLOCK })
  .addCall({
    name: CallArr,
    events: true,
    extrinsic: true,
  })
  .addEvent({
    name: Object.keys(HandlerMap)
  })
  .setFields(fields);

export let ctx: DataHandlerContext<Store, Fields>;
const accountInstance = AccountQuerier.getInstance();

processor.run(database, async (ctx_) => {
  ctx = ctx_;
  for (let i = 0; i < ctx.blocks.length; i += BATCH_SIZE) {
    const batch = ctx.blocks.slice(i, i + BATCH_SIZE);
    await processBatch(batch);
  }
});

const processBatch = async (batch: Block<Fields>[]) => {
  if (batch.length > 1) ctx.log.debug(`Batch size: ${batch.length}`);
  accountInstance.startRecord();
  for (const block of batch) {
    ctx.log.debug(`Processing block ${block.header.height}`);
    for (const call of block.calls) {
      if (call.name === "Balances.transfer") {
        call.extrinsic?.events
          .filter((event) => event.name === "Balances.Transfer")
          .forEach(async (event) => {
            await HandlerMap[event.name].process(event, accountInstance);
          });
      }

      if (call.name.startsWith("Staking")) {
        if (call.name === "Staking.bond") {
          call.extrinsic?.events
            .filter((event) => event.name === "Staking.Bonded")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        if (call.name === "Staking.unbond") {
          call.extrinsic?.events
            .filter((event) => event.name === "Staking.Unbonded")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        if (call.name === "Staking.rebond") {
          call.extrinsic?.events
            .filter((event) => event.name === "Staking.Bonded")
            .forEach(async (event) => {
              await HandlerMap["Staking.Rebonded"].process(event, accountInstance);
            });
        }

        if (call.name === "Staking.nominate") {
          await HandlerMap["Staking.nominate"].process(call, accountInstance);
        }

        if (call.name === "Staking.chill") {
          call.extrinsic?.events
            .filter((event) => event.name === "Staking.Chilled")
            .forEach( async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        if (call.name === "Staking.withdraw_unbonded") {
          call.extrinsic?.events
            .filter((event) => event.name === "Staking.Withdrawn")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        if (call.name === "Staking.payout_stakers") {
          call.extrinsic?.events
            .filter((event) => event.name === "Staking.Rewarded")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }
      }

      if (call.name.startsWith("NominationPools")) {
        if (call.name == "NominationPools.join") {
          call.extrinsic?.events
            .filter((event) => event.name === "NominationPools.Bonded")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        if (call.name == "NominationPools.unbond") {
          call.extrinsic?.events
            .filter((event) => event.name === "NominationPools.Unbonded")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        if (call.name == "NominationPools.bond_extra") {
          call.extrinsic?.events
            .filter((event) => event.name === "NominationPools.Bonded")
            .forEach(async (event) => {
              await HandlerMap["Npool.BondExtra"].process(event, accountInstance);
            });
        }

        if (call.name == "NominationPools.withdraw_unbonded") {
          call.extrinsic?.events
            .filter((event) => event.name === "NominationPools.Withdrawn")
            .forEach(async (event) => {
              await HandlerMap[event.name].process(event, accountInstance);
            });
        }

        call.extrinsic?.events
          .filter((event) => event.name === "NominationPools.PaidOut")
          .forEach(async (event) => {
            await HandlerMap[event.name].process(event, accountInstance);
          });
      }
    }
  }
  ctx.log.info(
    `Saving blocks from ${batch[0].header.height} to ${
      batch[batch.length - 1].header.height
    }`
  );

  await accountInstance.stopRecord();
  for (let key of Object.keys(HandlerMap)) {
    await HandlerMap[key].save();
  }
};
