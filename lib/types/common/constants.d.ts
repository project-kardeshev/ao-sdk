import { AoClient } from '../types/ao.js';
import { Logger } from '../utils/logger.js';
import { EventVacuum } from './events/event-vacuum.js';

export declare const defaultLogger: Logger;
export declare const defaultAo: AoClient;
export declare const defaultAoEventVacuum: EventVacuum;
export declare const ARWEAVE_TX_REGEX: RegExp;
/** FQDN regex that matches the one used in the ArNS contract. */
export declare const FQDN_REGEX: RegExp;
export declare const DEFAULT_SCHEDULER_ID =
  '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA';
