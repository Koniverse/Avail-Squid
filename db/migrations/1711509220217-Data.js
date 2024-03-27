module.exports = class Data1711509220217 {
    name = 'Data1711509220217'

    async up(db) {
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_a8432edb9e2ac219da3c6bb7b55"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_bd2c36acacb2b52ea25e81f1f94"`)
        await db.query(`DROP INDEX "public"."IDX_a8432edb9e2ac219da3c6bb7b5"`)
        await db.query(`DROP INDEX "public"."IDX_bd2c36acacb2b52ea25e81f1f9"`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "currency_id"`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "currency_fee_id"`)
        await db.query(`ALTER TABLE "transfer" ADD "currency" text`)
        await db.query(`ALTER TABLE "transfer" ADD "currency_fee" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_a8432edb9e2ac219da3c6bb7b55" FOREIGN KEY ("currency_id") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_bd2c36acacb2b52ea25e81f1f94" FOREIGN KEY ("currency_fee_id") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`CREATE INDEX "IDX_a8432edb9e2ac219da3c6bb7b5" ON "transfer" ("currency_id") `)
        await db.query(`CREATE INDEX "IDX_bd2c36acacb2b52ea25e81f1f9" ON "transfer" ("currency_fee_id") `)
        await db.query(`ALTER TABLE "transfer" ADD "currency_id" character varying`)
        await db.query(`ALTER TABLE "transfer" ADD "currency_fee_id" character varying`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "currency"`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "currency_fee"`)
    }
}
