import { Currency, Account } from "../model"

export interface TransferData {
    id: string;
    extrinsicHash: string;
    extrinsicIndex: number;
    timestamp: Date;
    fromAddress: string;
    toAddress: string;
    amount: bigint;
    currency: Currency | null;
    signature: string;
    blockNumber: number;
    fee: bigint;
    currencyFee: Currency | null;
    signer: string;
    success: boolean;
};

export interface CurrencyInfo {
    id: string;
    assetsID: number;
    symbol: string
    decimals: number 
}