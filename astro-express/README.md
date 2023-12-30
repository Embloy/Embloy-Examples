# Embloy Example (Astro+Express)

> An example implementation of Embloy Quicklink, integrated in a Astro+Express web service.

## Introduction

This is a hybrid Astro+Express app that uses AStro as the frontend and Express as the API backend.

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    pnpm install
    ```

3. Start the client:

    ```bash
    pnpm run dev
    ```

4. Start the server on port 5000:

    ```bash
    node server.js
    ```

5. Visit [localhost:3000](http://localhost:3000), press "_apply with embloy_" and follow the instructions

    > The Express server will be running on [http://127.0.0.1:5000](http://127.0.0.1:5000) – feel free to change the port in `server.js`.

## Project Structure

Astro looks for `.astro`, `.md`, or `.js` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run start`       | Starts a production dev server at  `localhost:3000`     |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |
