# Embloy Example (Next.js)

> An example implementation of Embloy Quicklink, integrated in a Next.js web service.

## Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How To Use

0. Create an Embloy Account at [embloy.com/register](https://embloy.com/register)

1. Fetch your personal `client_token` [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and set it as a environment variable in your `.env` file

2. install necessary dependencies:

    ```bash
    npm i
    # or
    yarn
    # or
    pnpm install
    # or
    bun install
    ```

3. Optionally, you can set the `job_slug` in line 14 of `app/page.tsx` to one of your own jobs' `job_slug`. 

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Visit [localhost:3000](http://localhost:3000), press "_apply with embloy_" and follow the instructions

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `.next` folder.

Test your production build locally:

```bash
npm run start
```

The `.next` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `.next` folder **almost anywhere** easily, **for free** or very small cost.

## Deploy your site

Deploy this example using [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Embloy/Embloy-Examples/tree/main/nextjs-ts&project-name=create-embloy-nextjs-ts&repository-name=create-embloy-nextjs-ts)
