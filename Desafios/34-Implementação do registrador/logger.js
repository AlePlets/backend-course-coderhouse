import winston from 'winston';

const levels = {
  debug: 0,
  http: 1,
  info: 2,
  warning: 3,
  error: 4,
  fatal: 5,
};

const developmentFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.simple()
);

const productionFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'errors.log', level: 'error' }),
];

const logger = winston.createLogger({
  levels,
  format: process.env.NODE_ENV === 'development' ? developmentFormat : productionFormat,
  transports,
});

export default logger;
