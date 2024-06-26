from dotenv import load_dotenv
from fastapi import FastAPI, Response, HTTPException
from embloy_sdk import EmbloyClient, EmbloySession, SessionOptions
from typing import Optional
import os
from requests.exceptions import HTTPError

load_dotenv()
app = FastAPI()

@app.get("/api/make_request")
def make_request(job_slug: Optional[str] = None, success_url: Optional[str] = None, cancel_url: Optional[str] = None):
    client_token = os.getenv('CLIENT_TOKEN')
    assert client_token is not None, "CLIENT_TOKEN is not set"

    if not job_slug:
        raise HTTPException(status_code=400, detail="job_slug is required")

    options = SessionOptions(success_url=success_url, cancel_url=cancel_url)
    session = EmbloySession("job", job_slug, options)

    try:
        url = EmbloyClient(client_token, session).make_request()
        print(f"Redirecting to {url}")
        return Response(status_code=302, headers={'Location': url})
    except HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")  # Python 3.6
        return {"error": "HTTP error occurred"}, 500
    except Exception as error:
        print(f"Error making request: {error}")
        return {"error": str(error)}, 500