import { Signer, createData } from '@dha-team/arbundles';
import { createDataItemSigner } from '@permaweb/aoconnect';

import { AoSigner } from '../../types/ao.js';
import { isAoSigner } from '../../utils/ao.js';

export function createAoSigner(signer: Signer): AoSigner {
  if (isAoSigner(signer)) {
    return signer;
  }

  if (!('publicKey' in signer)) {
    return createDataItemSigner(signer) as AoSigner;
  }

  const aoSigner = async ({ data, tags, target, anchor }) => {
    // ensure appropriate permissions are granted with injected signers.
    if (
      signer.publicKey === undefined &&
      'setPublicKey' in signer &&
      typeof signer.setPublicKey === 'function'
    ) {
      await signer.setPublicKey();
    }
    const dataItem = createData(data, signer, { tags, target, anchor });
    const signedData = dataItem.sign(signer).then(async () => ({
      id: dataItem.id,
      raw: dataItem.getRaw(),
    }));
    return signedData;
  };

  return aoSigner;
}
