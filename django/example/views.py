# example/views.py
from datetime import datetime

from django.http import HttpResponse

def index(request):
    now = datetime.now()
    html = f'''
    <html>
        <body>
            <h1>Welcome to Embloy Django Example!</h1>
            <p>The current time is { now }.</p>
            <button id="makeRequestButton">Make Request</button>
            <script>
                document.getElementById('makeRequestButton').addEventListener('click', function() {{
                    fetch('/api/make_request', {{ redirect: 'follow' }})
                        .then(response => {{
                            if (!response.ok) {{
                                throw new Error('Network response was not ok');
                            }}
                            window.location.href = response.url;
                        }})
                        .catch(error => console.error('Error:', error));
                }});
            </script>
        </body>
    </html>
    '''
    return HttpResponse(html)