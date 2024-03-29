from flask import Flask, redirect, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

@app.route('/api/make_request', methods=['GET'])
def make_request():
    try:
        client_token = os.getenv('CLIENT_TOKEN')
        assert client_token is not None, "CLIENT_TOKEN is not set"

        response = requests.post(
            'https://api.embloy.com/api/v0/sdk/request/auth/token',
            headers={'client_token': client_token}
        )
        response.raise_for_status()        
        request_token = response.json()['request_token']
        return redirect(f'https://embloy.com/sdk/apply?request_token={request_token}', code=302)
    except requests.HTTPError as error:
        print(f"Error response {error.response.status_code} while making request to {error.request.url}: {error.response.text}")
        return jsonify({"error": "Internal Server Error"}), 500