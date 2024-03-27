module.exports = class Data1711530268585 {
    name = 'Data1711530268585'

    async up(db) {
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "from"`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "to"`)
        await db.query(`ALTER TABLE "transfer" ADD "from_id" character varying`)
        await db.query(`ALTER TABLE "transfer" ADD "to_id" character varying`)
        await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "transfer" ADD "from" text NOT NULL`)
        await db.query(`ALTER TABLE "transfer" ADD "to" text NOT NULL`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "from_id"`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "to_id"`)
        await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
        await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
    }
}
