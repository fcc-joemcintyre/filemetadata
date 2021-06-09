import { processCommand } from './cmd.js';
import { start } from './server.js';

/**
 * Process command line, and start server.
 * @returns {void}
 */
function main () {
  const command = processCommand (process.argv.slice (2));
  if (command.exit) {
    process.exit (command.code);
  }

  // use environment provided host/port if specified, otherwise provided host/port
  const port = Number (process.env.PORT) || command.port;
  const host = process.env.HOST || '0.0.0.0';
  start (host, port);
}

main ();
