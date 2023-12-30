# Embloy Example (SvelteKit+Express)

> An example implementation of Embloy Quicklink, integrated in a SvelteKit+Express web service.

## Introduction

This is an example project demonstrating the integration of Embloy Quicklink in a SvelteKit+Express web service. This project will guide you through the process of setting up Embloy Quicklink in a SvelteKit application.

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

3. Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development client:

    ```bash
    npm run dev

    # or start the server and open the app in a new browser tab
    npm run dev -- --open
    ```
    You can preview the production build with `npm run preview`.

4. Start the Express server on port 5000:

    ```bash
    node server.cjs
    ```

5. To create a production version of your app:

    ```bash
    npm run build
    ```

4. Visit [localhost:5173](http://localhost:5173), press "_apply with embloy_" and follow the instructions
