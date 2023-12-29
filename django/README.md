# Embloy Example (Django)

> An example implementation of Embloy Quicklink, integrated in a Django web service.

## Introduction

This example shows how to use Embloy's Quicklink with Django 4 using the [Python Runtime](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python).

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. Run the development server:

 
    ```bash
    python manage.py runserver
    ```

    > Your Django application is now available at `http://localhost:8000`.

3. Visit [localhost:3000](http://localhost:3000), press "_apply with embloy_" and follow the instructions

## How it Works

Our Django application, `example` is configured as an installed application in `embloy_app/settings.py`:

```python
# embloy_app/settings.py
INSTALLED_APPS = [
    # ...
    'example',
]
```

We allow "\*.embloy.app" subdomains in `ALLOWED_HOSTS`, in addition to 127.0.0.1:

```python
# embloy/settings.py
ALLOWED_HOSTS = ['127.0.0.1', '.embloy.app']
```

The `wsgi` module must use a public variable named `app` to expose the WSGI application:

```python
# embloy_app/wsgi.py
app = get_wsgi_application()
```

The corresponding `WSGI_APPLICATION` setting is configured to use the `app` variable from the `embloy_app.wsgi` module:

```python
# embloy/settings.py
WSGI_APPLICATION = 'embloy_app.wsgi.app'
```

There is a single view which renders the current time in `example/views.py`:

```python
# example/views.py
from datetime import datetime

from django.http import HttpResponse


def index(request):
    now = datetime.now()
    html = f'''
    <html>
        <body>
            <h1>Hello from Embloy!</h1>
            <p>The current time is { now }.</p>
        </body>
    </html>
    '''
    return HttpResponse(html)
```

This view is exposed a URL through `example/urls.py`:

```python
# example/urls.py
from django.urls import path

from example.views import index


urlpatterns = [
    path('', index),
]
```

Finally, it's made accessible to the Django server inside `embloy_app/urls.py`:

```python
# embloy_app/urls.py
from django.urls import path, include

urlpatterns = [
    ...
    path('', include('example.urls')),
]
```

This example uses the Web Server Gateway Interface (WSGI) with Django to enable handling requests with Serverless Functions.
