export const ARWEAVE_TX_REGEX = new RegExp('^[a-zA-Z0-9_-]{43}$');

/** FQDN regex that matches the one used in the ArNS contract. */
export const FQDN_REGEX = new RegExp(
  '^(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{1,63}$',
);

export const DEFAULT_SCHEDULER_ID =
  '_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA';
