import type { NextApiRequest, NextApiResponse } from 'next';
import { EmbloyClient, EmbloySession } from 'embloy';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const clientToken = req.headers.client_token;
    const jobSlug = req.query.job_slug;

    if (!clientToken || Array.isArray(clientToken)) {
      res.status(400).json({ error: 'client_token is required' });
      return;
    }

    if (!jobSlug) {
      res.status(400).json({ error: 'job_slug is required' });
      return;
    }

    let url = '';
    try {
      const embloy = new EmbloyClient(clientToken, new EmbloySession("job", jobSlug as string));
      url = await embloy.makeRequest();
    } catch (error) {
      console.error('Error making request:', error);
      res.status(500).json({ error: 'Error making request' });
      return;
    }

    if (url) {
      res.status(200).json({ url });
    } else {
      res.status(500).json({ error: 'URL is not available' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}