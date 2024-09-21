import { TransactionInterface } from "arweave/node/lib/transaction.js";


export type AoMessage = {}

export type AoResult = {}

export interface AoProcess {
    memory: WebAssembly.Memory;
    txCache: Map<string, TransactionInterface>
}