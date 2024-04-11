module.exports = class Data1712812857458 {
    name = 'Data1712812857458'

    async up(db) {
        await db.query(`ALTER TABLE "staking_unbond" RENAME COLUMN "stash" TO "stash_id"`)
        await db.query(`ALTER TABLE "staking_rebond" RENAME COLUMN "stash" TO "stash_id"`)
        await db.query(`ALTER TABLE "staking_chill" RENAME COLUMN "stash" TO "stash_id"`)
        await db.query(`ALTER TABLE "staking_withdraw" RENAME COLUMN "stash" TO "stash_id"`)
        await db.query(`ALTER TABLE "staking_unbond" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_unbond" ADD "stash_id" character varying`)
        await db.query(`ALTER TABLE "staking_rebond" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_rebond" ADD "stash_id" character varying`)
        await db.query(`ALTER TABLE "staking_chill" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_chill" ADD "stash_id" character varying`)
        await db.query(`ALTER TABLE "staking_withdraw" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_withdraw" ADD "stash_id" character varying`)
        await db.query(`CREATE INDEX "IDX_c8f52b11312583edccac4772ee" ON "staking_unbond" ("stash_id") `)
        await db.query(`CREATE INDEX "IDX_ad6576a94593f8752fdb1c950c" ON "staking_rebond" ("stash_id") `)
        await db.query(`CREATE INDEX "IDX_c80662fcc315e4916586f177b7" ON "staking_chill" ("stash_id") `)
        await db.query(`CREATE INDEX "IDX_b2af4868d5363e714223bbc777" ON "staking_withdraw" ("stash_id") `)
        await db.query(`ALTER TABLE "staking_unbond" ADD CONSTRAINT "FK_c8f52b11312583edccac4772ee1" FOREIGN KEY ("stash_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_rebond" ADD CONSTRAINT "FK_ad6576a94593f8752fdb1c950c3" FOREIGN KEY ("stash_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_chill" ADD CONSTRAINT "FK_c80662fcc315e4916586f177b7f" FOREIGN KEY ("stash_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_withdraw" ADD CONSTRAINT "FK_b2af4868d5363e714223bbc7772" FOREIGN KEY ("stash_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_unbond" RENAME COLUMN "stash_id" TO "stash"`)
        await db.query(`ALTER TABLE "staking_rebond" RENAME COLUMN "stash_id" TO "stash"`)
        await db.query(`ALTER TABLE "staking_chill" RENAME COLUMN "stash_id" TO "stash"`)
        await db.query(`ALTER TABLE "staking_withdraw" RENAME COLUMN "stash_id" TO "stash"`)
        await db.query(`ALTER TABLE "staking_unbond" ADD "stash_id" text`)
        await db.query(`ALTER TABLE "staking_unbond" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_rebond" ADD "stash_id" text`)
        await db.query(`ALTER TABLE "staking_rebond" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_chill" ADD "stash_id" text`)
        await db.query(`ALTER TABLE "staking_chill" DROP COLUMN "stash_id"`)
        await db.query(`ALTER TABLE "staking_withdraw" ADD "stash_id" text`)
        await db.query(`ALTER TABLE "staking_withdraw" DROP COLUMN "stash_id"`)
        await db.query(`DROP INDEX "public"."IDX_c8f52b11312583edccac4772ee"`)
        await db.query(`DROP INDEX "public"."IDX_ad6576a94593f8752fdb1c950c"`)
        await db.query(`DROP INDEX "public"."IDX_c80662fcc315e4916586f177b7"`)
        await db.query(`DROP INDEX "public"."IDX_b2af4868d5363e714223bbc777"`)
        await db.query(`ALTER TABLE "staking_unbond" DROP CONSTRAINT "FK_c8f52b11312583edccac4772ee1"`)
        await db.query(`ALTER TABLE "staking_rebond" DROP CONSTRAINT "FK_ad6576a94593f8752fdb1c950c3"`)
        await db.query(`ALTER TABLE "staking_chill" DROP CONSTRAINT "FK_c80662fcc315e4916586f177b7f"`)
        await db.query(`ALTER TABLE "staking_withdraw" DROP CONSTRAINT "FK_b2af4868d5363e714223bbc7772"`)
    }
}
