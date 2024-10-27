import { AoSigner } from '../types/ao.js';
import { AoEvent } from '../types/events.js';

export declare function isAoSigner(value: unknown): value is AoSigner;
export declare function isAoEvent(value: unknown): value is AoEvent;
