const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/make_request', async (req, res) => {
  try {
    const clientToken = process.env.CLIENT_TOKEN;
    if (!clientToken) {
      throw new Error('CLIENT_TOKEN is not set');
    }

    const response = await axios.post(
      'http://localhost:3000/api/v0/sdk/request/auth/token',
      {},
      {
        headers: {
          client_token: clientToken,
        },
      }
    );

    const requestToken = response.data.request_token;
    res.redirect(302, `http://localhost:3000/sdk/apply?token=${requestToken}`);
  } catch (error) {
    console.error(`Error making request: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
