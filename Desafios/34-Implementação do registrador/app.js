import express from 'express';
import logger from './logger.js';

const app = express();
const port = 3000;

app.get('/loggerTest', (req, res) => {
  logger.debug('Debug Log');
  logger.http('HTTP Log');
  logger.info('Info Log');
  logger.warning('Warning Log');
  logger.error('Error Log');
  logger.fatal('Fatal Log');
  res.send('Logger Test');
});

app.listen(port, () => {
  logger.info(`Server is running at port:${port}`);
});
