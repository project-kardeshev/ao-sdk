'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Logger = void 0;
/**
 * Copyright (C) 2022-2024 Permanent Data Solutions, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bunyan_1 = require('bunyan');
const version_js_1 = require('../version.js');
class Logger {
  logger;
  silent = false;
  static default = new Logger();
  constructor({ level = 'info' } = {}) {
    if (level === 'none') {
      this.silent = true;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window !== 'undefined') {
      this.logger = console;
    } else {
      this.logger = (0, bunyan_1.createLogger)({
        level,
        silent: this.silent,
        defaultMeta: {
          name: 'ar-io-sdk',
          version: version_js_1.version,
        },
        format: bunyan_1.format.combine(
          bunyan_1.format.timestamp(),
          bunyan_1.format.json(),
        ),
        transports: [
          new bunyan_1.transports.Console({
            format: bunyan_1.format.combine(
              bunyan_1.format.timestamp(),
              bunyan_1.format.json(),
            ),
          }),
        ],
      });
    }
  }
  info(message, ...args) {
    if (this.silent) return;
    this.logger.info(message, ...args);
  }
  warn(message, ...args) {
    if (this.silent) return;
    this.logger.warn(message, ...args);
  }
  error(message, ...args) {
    if (this.silent) return;
    this.logger.error(message, ...args);
  }
  debug(message, ...args) {
    if (this.silent) return;
    this.logger.debug(message, ...args);
  }
  child(name) {
    if (this.silent) return this;
    return new Logger({ level: this.logger.level }).logger.child({ name });
  }
  setLogLevel(level) {
    this.silent = level === 'none';
    if ('silent' in this.logger) {
      this.logger.silent = level === 'none';
    }
    if ('level' in this.logger) {
      this.logger.level = level;
    }
  }
}
exports.Logger = Logger;