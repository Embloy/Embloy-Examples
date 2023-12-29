export async function get() {
  try {
    const url = 'http://localhost:3000/api/v0/sdk/request/auth/token';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'client_token': import.meta.env.CLIENT_TOKEN,
      },
    });

    const data = await response.json();
    const requestToken = data.request_token;

    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=10, stale-while-revalidate',
      },
      body: JSON.stringify({ requestToken }),
    };
  } catch (error) {
    console.error('Error making request:', error);
    return {
      status: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}