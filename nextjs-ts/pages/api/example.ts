import { NextApiRequest, NextApiResponse } from 'next';
import { EmbloyClient, EmbloySession } from 'embloy';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const clientToken = process.env.CLIENT_TOKEN;
    const jobSlug = req.query.job_slug as string;

    // Some input validation ...
    if (!clientToken) {
      res.status(400).json({ error: 'client_token is required' });
      return;
    }

    if (!jobSlug) {
      res.status(400).json({ error: 'job_slug is required' });
      return;
    }

    // Call the Embloy SDK to request a link to an application session which we then want to redirect the user to
    let url = '';
    try {
      const embloy = new EmbloyClient(clientToken, new EmbloySession("job", jobSlug));
      url = await embloy.makeRequest(); // ✨ Here's where the magic happens ✨
    } catch (error) {
      console.error('Error making request:', error);
      res.status(500).json({ error: 'Error making request' });
      return;
    }

    // Redirect the user to the obtained URL
    if (url) {
      res.redirect(url);
    } else {
      res.status(500).json({ error: 'URL is not available' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}