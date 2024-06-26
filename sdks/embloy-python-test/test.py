from embloy_sdk import EmbloyClient, EmbloySession, SessionOptions

# Replace 'your_client_token' and 'your_session' with actual values
client_token = 'your-client-token'

# Replace with your actual values
# Optional todo: 
options = SessionOptions('your_success_url', 'your_cancel_url')

session = EmbloySession("your-mode", "your_job_slug", options)

# Create an instance of the EmbloyClient
embloy_client = EmbloyClient(client_token, session)

# Make a request to the Embloy API
redirect_url = EmbloyClient(client_token, session).make_request()

# Print or use the result as needed
print(redirect_url)
