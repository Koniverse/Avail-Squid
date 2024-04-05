import assert from "assert"
import * as marshal from "./marshal"

export class Amount {
    private _amount!: bigint | undefined | null
    private _symbol!: string
    private _decimal!: number

    constructor(props?: Partial<Omit<Amount, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._amount = json.amount == null ? undefined : marshal.bigint.fromJSON(json.amount)
            this._symbol = marshal.string.fromJSON(json.symbol)
            this._decimal = marshal.int.fromJSON(json.decimal)
        }
    }

    get amount(): bigint | undefined | null {
        return this._amount
    }

    set amount(value: bigint | undefined | null) {
        this._amount = value
    }

    get symbol(): string {
        assert(this._symbol != null, 'uninitialized access')
        return this._symbol
    }

    set symbol(value: string) {
        this._symbol = value
    }

    get decimal(): number {
        assert(this._decimal != null, 'uninitialized access')
        return this._decimal
    }

    set decimal(value: number) {
        this._decimal = value
    }

    toJSON(): object {
        return {
            amount: this.amount == null ? undefined : marshal.bigint.toJSON(this.amount),
            symbol: this.symbol,
            decimal: this.decimal,
        }
    }
}
