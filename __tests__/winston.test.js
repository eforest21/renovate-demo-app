import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console({ silent: true })],
});

logger.info('Testmeldung');
