import {
  ArweaveSigner,
  DataItem,
  EthereumSigner,
  Signer,
  createData,
} from '@dha-team/arbundles';

import { AoSigner, DataItemSignatureProvider } from '../../types/ao.js';
import { isArweaveWalletApi, isJwkInterface } from '../../types/arweave.js';
import { isEthereumPrivateKey } from '../../types/ethereum.js';
import { isAoSigner } from '../../utils/ao.js';
import { InvalidSignerError } from '../errors.js';

/**
 * A function that builds a signer using a Signer interface from arbundles
 * commonly used in node-based dApps
 *
 * This is provided as a convenience for consumers of the SDK
 * to use, but consumers can also implement their own signer
 * @param {Signer} wallet - The arbundles Signer instance
 * @returns {AoSigner}
 * @example
 * ```ts
 * const signer = createArbundlesDataItemSigner(wallet)
 * ```
 */
export function createArbundlesDataItemSigner(wallet: Signer): AoSigner {
  const signer = async ({ data, tags, target, anchor }) => {
    const dataItem = createData(data, wallet, { tags, target, anchor });
    return dataItem.sign(wallet).then(async () => ({
      id: dataItem.id,
      raw: dataItem.getRaw(),
    }));
  };

  return signer;
}

/**
 * A function that builds a signer using the global arweaveWallet
 * commonly used in browser-based dApps
 *
 * This is provided as a convenience for consumers of the SDK
 * to use, but consumers can also implement their own signer
 *
 * @param {Window["arweaveWallet"]} arweaveWallet - The window.arweaveWallet object
 * @returns {AoSigner} - The signer function
 * @example
 * ```ts
 * const signer = createArweaveApiDataItemSigner(window.arweaveWallet)
 * ```
 *
 */
export function createArweaveApiDataItemSigner(
  arweaveWallet: Window['arweaveWallet'],
): AoSigner {
  /**
   * createDataItem can be passed here for the purposes of unit testing
   * with a stub
   */
  const signer = async ({
    data,
    tags,
    target,
    anchor,
    createDataItem = (buf: Buffer) => new DataItem(buf),
  }) => {
    // eslint-disable-next-line
    const view = await (arweaveWallet as any).signDataItem({
      data,
      tags,
      target,
      anchor,
    });
    const dataItem = createDataItem(Buffer.from(view));
    return {
      id: dataItem.id,
      raw: dataItem.getRaw(),
    };
  };

  return signer;
}

/**
 * A function that creates an AoSigner from a DataItemSignatureProvider
 * @param {DataItemSignatureProvider} signer - The signer to be converted
 * @returns {AoSigner} - The AoSigner
 * @example
 * ```ts
 * const signer = createAoSigner(wallet)
 * ```
 */
export function createAoSigner(signer: DataItemSignatureProvider): AoSigner {
  if (isAoSigner(signer)) {
    return signer;
  }

  if (isArweaveWalletApi(signer)) {
    return createArweaveApiDataItemSigner(signer);
  }
  if (typeof signer == 'string' && isEthereumPrivateKey(signer)) {
    return createArbundlesDataItemSigner(new EthereumSigner(signer));
  }

  if (isJwkInterface(signer)) {
    return createArbundlesDataItemSigner(new ArweaveSigner(signer));
  }

  if (signer instanceof Signer && !('publicKey' in signer)) {
    return createArbundlesDataItemSigner(signer);
  }
  throw new InvalidSignerError();
}
