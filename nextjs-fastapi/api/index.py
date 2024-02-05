from dotenv import load_dotenv
from fastapi import FastAPI, Response, HTTPException
from embloy_sdk import EmbloyClient, EmbloySession
from typing import Optional
import httpx
import os

load_dotenv()
app = FastAPI()

@app.get("/api/make_request")
async def make_request(job_slug: Optional[str] = None, success_url: Optional[str] = None, cancel_url: Optional[str] = None):
    client_token = os.getenv('CLIENT_TOKEN')
    assert client_token is not None, "CLIENT_TOKEN is not set"

    if not job_slug:
        raise HTTPException(status_code=400, detail="job_slug is required")

    session = EmbloySession("job", job_slug, success_url, cancel_url)

    try:
        url = EmbloyClient(client_token, session).make_request()
        return Response(status_code=302, headers={'Location': url})
    except Exception as error:
        print(f"Error making request: {error}")
        return {"error": str(error)}, 500
        
# Use this if you want to make the request manually without using our SDK
''' 
@app.get("/api/make_request")
async def make_request():
    try:
        client_token = os.getenv('CLIENT_TOKEN')
        assert client_token is not None, "CLIENT_TOKEN is not set"

        async with httpx.AsyncClient() as client:
            response = await client.post(
                'https://api.embloy.com/api/v0/sdk/request/auth/token',
                headers={'client_token': client_token}
            )
        response.raise_for_status()        
        request_token = response.json()['request_token']
        return Response(status_code=302, headers={'Location': f'https://embloy.com/sdk/apply?request_token={request_token}'})
    except httpx.HTTPStatusError as error:
        print(f"Error response {error.response.status_code} while making request to {error.request.url}: {error.response.text}")
        return {"error": "Internal Server Error"}, 500
''' 
