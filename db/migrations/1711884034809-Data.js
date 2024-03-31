module.exports = class Data1711884034809 {
    name = 'Data1711884034809'

    async up(db) {
        await db.query(`ALTER TABLE "staking_nominate" ADD "targets" text array`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "staking_nominate" DROP COLUMN "targets"`)
    }
}
