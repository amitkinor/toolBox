import winston from 'winston';
import expressWinston from 'express-winston';

const topLevelConfig = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
};

/*
 * Import these to infrastructure level and app.use(appLogger & appErrorLogger)
 */
export const appLogger = expressWinston.logger(topLevelConfig);

export const appErrorLogger = expressWinston.errorLogger(topLevelConfig);


/**
 *  import these for app level logging 
 */
export const createLogger = (name: string): winston.Logger =>
  winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    defaultMeta: {
      name,
    },
  });
