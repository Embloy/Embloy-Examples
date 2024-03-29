# Embloy Example (Vue.js+GinGonic)

> An example implementation of Embloy Quicklink, integrated in a Vue.js+GinGonic web service.

## Introduction

This is a hybrid Vue.js+GinGonic app that uses [Vue.js](https://vuejs.org/) as the frontend and GinGonic as the API backend.

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    yarn install
    ```

3. Start the client:

    ```bash
    yarn serve
    ```

4. Start the server on port 8081:

    ```bash
    go run main.go
    ```

5. Visit [localhost:8080](http://localhost:8080), press "_apply with embloy_" and follow the instructions

    > The GinGonic server will be running on [http://127.0.0.1:8081](http://127.0.0.1:8081) – feel free to change the port in `main.go`.


## Available Scripts

In the project directory, you can run:

#### Compile and hot-reload for development

```bash
yarn serve
```

#### Compile and minify for production

```bash
yarn build
```

#### Lint and fix files

```bash
yarn lint
```

## Docker

Build the image

```bash
docker build -t vuegin .
```

Start the container

```bash
docker run -p 8080:8080 -p 8081:8081 -d vuegin
```