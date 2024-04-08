module.exports = class Data1712572240134 {
    name = 'Data1712572240134'

    async up(db) {
        await db.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_e7acd505cd305d7f64a490b2f20"`)
        await db.query(`DROP INDEX "public"."IDX_e7acd505cd305d7f64a490b2f2"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "validators_id"`)
        await db.query(`ALTER TABLE "staking_nominate" ADD "targets" text array`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_e7acd505cd305d7f64a490b2f20" FOREIGN KEY ("validators_id") REFERENCES "staking_nominate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`CREATE INDEX "IDX_e7acd505cd305d7f64a490b2f2" ON "account" ("validators_id") `)
        await db.query(`ALTER TABLE "account" ADD "validators_id" character varying`)
        await db.query(`ALTER TABLE "staking_nominate" DROP COLUMN "targets"`)
    }
}
