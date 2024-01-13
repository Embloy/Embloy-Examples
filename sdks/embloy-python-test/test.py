from embloy_sdk import EmbloyClient

# Replace 'your_client_token' and 'your_session' with actual values
client_token = 'your-client-token'

session = {
    'mode': 'job',
    'success_url': 'your_success_url',
    'cancel_url': 'your_cancel_url',
    'job_slug': 'your_job_slug'
}

# Create an instance of the EmbloyClient
embloy_client = EmbloyClient(client_token, session)

# Make a request to the Embloy API
result = embloy_client.make_request()

# Print or use the result as needed
print(result)
