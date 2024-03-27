import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class Currency {
    constructor(props?: Partial<Currency>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: true})
    assetsID!: number | undefined | null

    @Column_("text", {nullable: false})
    symbol!: string

    @Column_("int4", {nullable: false})
    decimals!: number
}
