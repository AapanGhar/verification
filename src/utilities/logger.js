import pino from 'pino'
import {createStream} from 'rotating-file-stream'



const logFileStream = createStream(`${new Date().toDateString()}.log`, {
    size: '10M',          // rotate every 10 MegaBytes written
    interval: '1d',       // rotate daily
    compress: 'gzip',     // compress rotated files
    path: '../logs',
  
  });

const logger = pino({ level: 'debug',timestamp:pino.stdTimeFunctions.isoTime }, logFileStream);

export const __logger = logger