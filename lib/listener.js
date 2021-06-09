/**
  @typedef {import ('fastify').FastifyRequest} Request
  @typedef {import ('fastify').FastifyReply} Response
 */

/**
 * Receive file and return size
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @returns {Promise<void>}
 */
export async function upload (req, res) {
  try {
    const file = await req.file ();
    const data = await file.toBuffer ();
    // @ts-ignore
    if (file.file.truncated === false) {
      res.code (200).send ({
        filename: file.filename,
        size: data.length,
      });
    } else {
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
