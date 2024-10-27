import { ARWEAVE_TX_REGEX } from '../common/constants.js';

export const validateArweaveId = (id) => {
  return ARWEAVE_TX_REGEX.test(id);
};
