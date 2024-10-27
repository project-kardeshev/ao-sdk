'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProcessWritable = exports.ProcessReadable = exports.Process = void 0;
const ao_js_1 = require('../../types/ao.js');
const constants_js_1 = require('../constants.js');
const index_js_1 = require('../index.js');
const remote_mu_js_1 = require('../services/mu/remote-mu.js');
const remote_su_js_1 = require('../services/su/remote-su.js');
class Process {
  logger;
  ao;
  processId;
  constructor({ processId, ao, logger = constants_js_1.defaultLogger }) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }
  static init(config) {
    if ((0, ao_js_1.isWritableProcessConfig)(config)) {
      return new ProcessWritable(config);
    }
    return new ProcessReadable(config);
  }
  static async createRemoteProcess({
    processId,
    cuUrl,
    muUrl,
    suUrl,
    signer,
    logger,
  }) {
    return Process.init({
      processId,
      signer,
      logger,
      ao: new index_js_1.AO({
        cu: new index_js_1.RemoteCU({ cuUrl }),
        mu: new remote_mu_js_1.RemoteMU({ muUrl }),
        su: new remote_su_js_1.RemoteSU({ suUrl }),
      }),
    });
  }
}
exports.Process = Process;
class ProcessReadable {
  logger;
  ao;
  processId;
  constructor({ logger = constants_js_1.defaultLogger, ao, processId }) {
    this.logger = logger;
    this.ao = ao;
    this.processId = processId;
  }
  async read({ tags, data }, options) {
    try {
      this.logger.info('Dryrun', {
        tags,
        data,
        target: this.processId,
      });
      const result = await this.ao.dryrun(
        {
          message: {
            Tags: tags,
            Data: data,
            Target: this.processId,
          },
        },
        options,
      );
      this.logger.info('Dryrun result', result);
      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
exports.ProcessReadable = ProcessReadable;
class ProcessWritable extends ProcessReadable {
  signer;
  constructor({ signer, ...config }) {
    super(config);
    this.signer = signer;
  }
  async write({ tags, data }, options) {
    try {
      this.logger.info('Message', {
        tags,
        data,
        target: this.processId,
      });
      const messageId = await this.ao.message(
        {
          tags,
          data,
          processId: this.processId,
          signer: this.signer,
        },
        options,
      );
      this.logger.info('Message ID', messageId);
      const result = await this.ao.result(
        { messageId, processId: this.processId },
        options,
      );
      this.logger.info(`Result for ${messageId}`, result);
      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
exports.ProcessWritable = ProcessWritable;
