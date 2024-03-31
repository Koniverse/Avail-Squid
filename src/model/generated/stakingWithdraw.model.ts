import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {CurrencyAmount} from "./_currencyAmount"
import {CurrencyFee} from "./_currencyFee"

@Entity_()
export class StakingWithdraw {
    constructor(props?: Partial<StakingWithdraw>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    action!: string | undefined | null

    @Column_("text", {nullable: true})
    extrinsicHash!: string | undefined | null

    @Column_("int4", {nullable: true})
    extrinsicIndex!: number | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new CurrencyAmount(undefined, obj)}, nullable: true})
    currencyAmmount!: CurrencyAmount | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new CurrencyFee(undefined, obj)}, nullable: true})
    currencyFee!: CurrencyFee | undefined | null

    @Column_("text", {nullable: true})
    sender!: string | undefined | null

    @Column_("text", {nullable: true})
    stash!: string | undefined | null

    @Column_("bool", {nullable: true})
    success!: boolean | undefined | null
}
