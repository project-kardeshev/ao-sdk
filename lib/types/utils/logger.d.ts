export interface ILogger {
  setLogLevel: (level: 'info' | 'debug' | 'error' | 'warn' | 'none') => void;
  info: (message: string, ...args: unknown[]) => void;
  warn: (message: string, ...args: unknown[]) => void;
  error: (message: string, ...args: unknown[]) => void;
  debug: (message: string, ...args: unknown[]) => void;
  child: (name: string) => ILogger;
}
export declare class Logger implements ILogger {
  private logger;
  private silent;
  static default: Logger;
  constructor({
    level,
  }?: {
    level?: 'info' | 'debug' | 'error' | 'warn' | 'none';
  });
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
  debug(message: string, ...args: unknown[]): void;
  child(name: string): any;
  setLogLevel(level: 'info' | 'debug' | 'error' | 'warn' | 'none'): void;
}
