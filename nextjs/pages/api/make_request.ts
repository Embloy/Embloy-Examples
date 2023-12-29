import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Make the request to the external API
    const response = await axios.post<{ request_token: string }>(
      'http://localhost:3000/api/v0/sdk/request/auth/token',
      {},
      {
        headers: {
          'client_token': process.env.CLIENT_TOKEN,
        },
      }
    );

    // Extract the request_token from the response
    const requestToken = response.data.request_token;

    // Redirect to the apply page with the request_token
    res.redirect(302, `http://localhost:3000/sdk/apply?token=${requestToken}`);
  } catch (error) {
    console.error('Error making request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}