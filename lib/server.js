import fastify from 'fastify';
import multipart from 'fastify-multipart';
import { homepage } from './homepage.js';
import { upload } from './listener.js';

let server;

/**
 * Start the server.
 * @param {string} host HTTP host to listen to
 * @param {number} port HTTP port to listen to
 * @returns {void}
 */
export function start (host, port) {
  console.log ('Starting File Metadata server');

  // initialize and start server
  server = fastify ({ logger: false });
  server.register (multipart, {
    limits: {
      fieldNameSize: 100,
      fieldSize: 0,
      fields: 0,
      fileSize: 1024768,
      files: 1,
      headerPairs: 2000,
    },
  });

  server.get ('*', {}, (req, res) => { res.type ('text/html').send (homepage); });
  server.post ('/api/file', {}, upload);

  server.listen (port, host, () => {
    console.log (`File Metadata server listening on port ${port}`);
  });
}

/**
 * Stop the server
 * @returns {Promise<void>}
 */
export async function stop () {
  if (server) {
    await server.close ();
  }
}
