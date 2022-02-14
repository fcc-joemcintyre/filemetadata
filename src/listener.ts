import { FastifyReply, FastifyRequest } from 'fastify';

/**
 * Receive file and return size
 * @param req HTTP request
 * @param res HTTP response
 */
export async function upload (req: FastifyRequest, res: FastifyReply) {
  try {
    const file = await req.file ();
    try {
      const data = await file.toBuffer ();
      res.code (200).send ({
        filename: file.filename,
        size: data.length,
      });
    } catch {
      res.code (400).send ({
        error: 'Submitted file too large (max 1 megabyte)',
      });
    }
  } catch (err) {
    res.code (400).send ({
      error: 'Invalid submission',
    });
  }
}
