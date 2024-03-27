import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Currency} from "./currency.model"

@Entity_()
export class Transfer {
    constructor(props?: Partial<Transfer>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: true})
    extrinsicHash!: string | undefined | null

    @Column_("int4", {nullable: true})
    extrinsicIndex!: number | undefined | null

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    from!: Account

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    to!: Account

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Index_()
    @ManyToOne_(() => Currency, {nullable: true})
    currency!: Currency | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    fee!: bigint

    @Index_()
    @ManyToOne_(() => Currency, {nullable: true})
    currencyFee!: Currency | undefined | null

    @Column_("text", {nullable: false})
    signer!: string

    @Column_("text", {nullable: true})
    signature!: string | undefined | null

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Column_("bool", {nullable: true})
    success!: boolean | undefined | null
}
