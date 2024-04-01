import assert from "assert"
import * as marshal from "./marshal"

export class CurrencyFee {
    private _fee!: bigint | undefined | null
    private _symbol!: string
    private _decimal!: number

    constructor(props?: Partial<Omit<CurrencyFee, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._fee = json.fee == null ? undefined : marshal.bigint.fromJSON(json.fee)
            this._symbol = marshal.string.fromJSON(json.symbol)
            this._decimal = marshal.int.fromJSON(json.decimal)
        }
    }

    get fee(): bigint | undefined | null {
        return this._fee
    }

    set fee(value: bigint | undefined | null) {
        this._fee = value
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
            fee: this.fee == null ? undefined : marshal.bigint.toJSON(this.fee),
            symbol: this.symbol,
            decimal: this.decimal,
        }
    }
}
