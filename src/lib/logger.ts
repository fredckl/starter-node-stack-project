import winston, { format, transports } from 'winston';
import { getRootDir } from './getEnv';
import path from 'path'
const { combine, timestamp, splat, simple, colorize } = format;

const getLogPath = (directory: string) => path.join(getRootDir(), 'log', directory);

export const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    splat(),
    colorize(),
    simple()
  ),
  defaultMeta: { service: 'espa-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: getLogPath('error.log'), level: 'error' }),
    new winston.transports.File({ filename: getLogPath('combined.log') }),
    new transports.Console()
  ],
});