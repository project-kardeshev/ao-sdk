'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createAoSigner = createAoSigner;
const arbundles_1 = require('@dha-team/arbundles');
const aoconnect_1 = require('@permaweb/aoconnect');
const ao_js_1 = require('../../utils/ao.js');
function createAoSigner(signer) {
  if ((0, ao_js_1.isAoSigner)(signer)) {
    return signer;
  }
  if (!('publicKey' in signer)) {
    return (0, aoconnect_1.createDataItemSigner)(signer);
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
    const dataItem = (0, arbundles_1.createData)(data, signer, {
      tags,
      target,
      anchor,
    });
    const signedData = dataItem.sign(signer).then(async () => ({
      id: dataItem.id,
      raw: dataItem.getRaw(),
    }));
    return signedData;
  };
  return aoSigner;
}
