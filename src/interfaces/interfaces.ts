
export interface TransferData {
    id: string;
    extrinsicHash: string;
    extrinsicIndex: number;
    timestamp: Date;
    fromAddress: string;
    toAddress: string;
    amount: bigint;
    signature: string;
    blockNumber: number;
    fee: bigint;
    signer: string;
    success: boolean;
};