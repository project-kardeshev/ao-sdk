'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AO = void 0;
class AO {
  cu;
  mu;
  su;
  eventManager;
  memoryManager;
  txCache;
  constructor({ cu, mu, su, txCache, memoryManager, eventManager }) {
    this.cu = cu;
    this.mu = mu;
    this.su = su;
    this.txCache = txCache;
    this.memoryManager = memoryManager;
    this.eventManager = eventManager;
  }
  async dryrun(p, options) {
    return this.cu.dryrun(p, options);
  }
  async result(p, options) {
    return this.cu.result(p, options);
  }
  async state(p, options) {
    return this.cu.state(p, options);
  }
  async message(p, options) {
    return this.mu.message(p, options);
  }
  async monitor(p) {
    return this.mu.monitor(p);
  }
  async unmonitor(p) {
    return this.mu.unmonitor(p);
  }
  async getProcessMessages(p) {
    return this.su.getProcessMessages(p);
  }
  async getProcessMessage(p) {
    return this.su.getProcessMessage(p);
  }
  async getProcess(p) {
    return this.su.getProcess(p);
  }
}
exports.AO = AO;
