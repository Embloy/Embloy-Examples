# Embloy Example (React+Express)

> An example implementation of Embloy Quicklink, integrated in a React+Express web service.

## Introduction

This is a hybrid React+Express app that uses React as the frontend and Express as the API backend.

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    npm i
    ```

3. Start the client:

    ```bash
    npm start
    ```

4. Start the server on port 5000:

    ```bash
    node server.js
    ```

5. Visit [localhost:3000](http://localhost:3000), press "_apply with embloy_" and follow the instructions

    > The Express server will be running on [http://127.0.0.1:5000](http://127.0.0.1:5000) – feel free to change the port in `server.js`.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.