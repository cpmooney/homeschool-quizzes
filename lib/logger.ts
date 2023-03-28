import { createLogger, transports, format } from "winston";
import { readFileSync } from 'fs'

const directory = 'logs/'
const filename = 'server.log'

export const logger = createLogger({
    transports: [
      new transports.Console(),
      new transports.File({
        dirname: directory,
        filename: filename
      }),
    ],
    format: format.combine(
      format.timestamp(),
      format.json()
    ),
  });

export default logger;

export const readLog = (): string => {
  const entries = readFileSync(`${directory}/${filename}`, 'utf8')
    .split('\n')
    .slice(0, -1);
  return `[${entries.join(',')}]`;
}
