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
                'https://api.embloy.com/api/v0/sdk/request/auth/token',
                headers={'client_token': client_token}
            )
            response.raise_for_status()        
            request_token = response.json()['request_token']
            return HttpResponseRedirect(redirect_to=f'https://embloy.com/sdk/apply?request_token={request_token}')
        except requests.HTTPError as error:
            print(f"Error response {error.response.status_code} while making request to {error.request.url}: {error.response.text}")
            return JsonResponse({"error": "Internal Server Error"}, status=500)