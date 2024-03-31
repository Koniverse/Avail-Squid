import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {CurrencyAmount} from "./_currencyAmount"
import {CurrencyFee} from "./_currencyFee"

@Entity_()
export class Transfer {
    constructor(props?: Partial<Transfer>) {
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

    @Column_("text", {nullable: true})
    from!: string | undefined | null

    @Column_("text", {nullable: true})
    to!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new CurrencyAmount(undefined, obj)}, nullable: true})
    currencyAmmount!: CurrencyAmount | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new CurrencyFee(undefined, obj)}, nullable: true})
    currencyFee!: CurrencyFee | undefined | null

    @Column_("text", {nullable: false})
    signer!: string

    @Column_("text", {nullable: true})
    signature!: string | undefined | null

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("bool", {nullable: true})
    success!: boolean | undefined | null

    @Column_("text", {nullable: true})
    params!: string | undefined | null
}
