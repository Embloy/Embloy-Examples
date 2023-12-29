from django.http import JsonResponse, HttpResponseRedirect
from django.views import View
from dotenv import load_dotenv
import requests
import os
import os

load_dotenv()

class MakeRequestView(View):
    def get(self, request, *args, **kwargs):
        try:
            client_token = os.getenv('CLIENT_TOKEN')
            assert client_token is not None, "CLIENT_TOKEN is not set"

            response = requests.post(
                'http://localhost:3000/api/v0/sdk/request/auth/token',
                headers={'client_token': client_token}
            )
            response.raise_for_status()        
            request_token = response.json()['request_token']
            return HttpResponseRedirect(redirect_to=f'http://localhost:3000/sdk/apply?token={request_token}')
        except requests.HTTPError as error:
            print(f"Error response {error.response.status_code} while making request to {error.request.url}: {error.response.text}")
            return JsonResponse({"error": "Internal Server Error"}, status=500)