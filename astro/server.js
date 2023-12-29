// server.js
const express = require('express');
const axios = require('axios');

const app = express();

app.post('/api/make_request', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v0/sdk/request/auth/token', {}, {
      headers: {
        'client_token': process.env.CLIENT_TOKEN,
      },
    });

    const requestToken = response.data.request_token;
    res.json({ requestToken });
  } catch (error) {
    console.error('Error making request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});