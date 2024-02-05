# Embloy Example (FastAPI)

> An example implementation of Embloy Quicklink, integrated in a FastAPI web service.

## Introduction

This is a hybrid Next.js + Python app that uses Next.js as the frontend and FastAPI as the API backend. One great use case of this is to write Next.js apps that use Python AI libraries on the backend.

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    npm i
    # or
    yarn
    # or
    pnpm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4. Visit [localhost:3000](http://localhost:3000), press "_apply with embloy_" and follow the instructions

5. FastAPI automatically builds a OpenAPI and Swagger API documentation at [localhost:3000/docs](http://localhost:3000/docs)  

> The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/`.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.