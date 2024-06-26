# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 8000

# Define environment variable
ENV CLIENT_TOKEN eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImV4cCI6MTc0ODUxODE0MiwidHlwIjoiZW50ZXJwcmlzZV8xIiwiaWF0IjoxNzE2OTgyMTU3LCJpc3MiOiJhcGkuZW1ibG95LmNvbSJ9.RLU0Dg3G_N6dHs4a9VbwLmHB_UdgwfO6-2HnK1B16UE

# Run app.py when the container launches
CMD ["uvicorn", "api.index:app", "--host", "0.0.0.0", "--port", "8000"]