import {
  Logger as WinstonLogger,
  createLogger,
  format,
  transports,
} from 'winston';

import { version } from '../version.js';

export interface ILogger {
  setLogLevel: (level: 'info' | 'debug' | 'error' | 'warn' | 'none') => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
  debug: (message: string, ...args: unknown[]) => void;
  child: (name: string) => ILogger;
}

export class Logger implements ILogger {
  private logger: WinstonLogger | Console;
  private silent = false;

  static default = new Logger();

  constructor({
    level = 'info',
  }: {
    level?: 'info' | 'debug' | 'error' | 'warn' | 'none';
  } = {}) {
    if (level === 'none') {
      this.silent = true;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window !== 'undefined') {
      this.logger = console;
    } else {
      this.logger = createLogger({
        level,
        silent: this.silent,
        defaultMeta: {
          name: 'ar-io-sdk',
          version,
        },
        format: format.combine(format.timestamp(), format.json()),
        transports: [
          new transports.Console({
            format: format.combine(format.timestamp(), format.json()),
          }),
        ],
      });
    }
  }

  info(message: string, ...args: unknown[]) {
    if (this.silent) return;
    this.logger.info(message, ...args);
  }

  warn(message: string, ...args: unknown[]) {
    if (this.silent) return;
    this.logger.warn(message, ...args);
  }

  error(message: string, ...args: unknown[]) {
    if (this.silent) return;
    this.logger.error(message, ...args);
  }

  debug(message: string, ...args: unknown[]) {
    if (this.silent) return;
    this.logger.debug(message, ...args);
  }

  child(name: string) {
    if (this.silent) return this;
    if (this.logger instanceof WinstonLogger) {
      return this.logger.child(name);
    }
    return this as ILogger;
  }

  setLogLevel(level: 'info' | 'debug' | 'error' | 'warn' | 'none') {
    this.silent = level === 'none';
    if ('silent' in this.logger) {
      this.logger.silent = level === 'none';
    }

    if ('level' in this.logger) {
      this.logger.level = level;
    }
  }
}
