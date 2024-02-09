# Embloy-Examples
Example implementations of Embloy-Quicklink in different frameworks &amp; languages

## Introduction

To facilitate use of Embloy's Quicklink API, we generously provided possible (simple) integrations of Embloy's Quicklink, implemented using the most popular languages and frameworks. In most cases, all it takes is not more than ~10 LOC to integrate Embloy Quicklink into your own job posting service.
E.g.:

_In your backend add a **make_request** endpoint:_

```Javascript
// Call the Embloy SDK to request a link to an application session
const embloy = new EmbloyClient(
    process.env.CLIENT_TOKEN,
    new EmbloySession("job", jobSlug)
);
const url = await embloy.makeRequest();

// Return the URL to the client
res.status(200).json({ url: url });
```  

_In your frontend call this endpoint whereever you want:_

```TypeScript
// Call your endpoint
const response = await fetch("/api/example?job_slug=<your-job-slug>", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
});

// Redirect the user to the obtained URL from the response
window.location.href = await response.json().url;
```  

## How To Use

Choose your framework and cd into the respective directory. There you will find detailed instructions on how to set up and start the clients and servers.

> **Note:** _You will have to set your client_token in the directory's .env file, if you want to set all .env files at once, you can run:_
>
> ```bash
> ./config/env_setter -t <your-client-token>
> ```


## Supported frameworks

- [ ] Angular
- [X] Astro + Express
- [X] Blazor + ASP.NET Core using
- [X] Django
- [X] Next.js + FastAPI
- [X] Next.js + Flask
- [X] Next.js + TypeScript
- [X] React + Express
- [X] React + Laravel
- [X] Ruby on Rails
- [ ] Spring-Boot
- [X] SvelteKit + Express
- [X] Vue + Gin-Gonic

## Fully tested frameworks on remote servers and chromium & firefox clients

- [ ] Angular
- [ ] Astro + Express
- [ ] Blazor + ASP.NET Core using
- [X] Django
- [ ] Next.js + FastAPI
- [ ] Next.js + Flask
- [X] Next.js + TypeScript
- [ ] React + Express
- [ ] React + Laravel
- [X] Ruby on Rails
- [ ] Spring-Boot
- [ ] SvelteKit + Express
- [ ] Vue + Gin-Gonic

## Embloy-Button

You can customize the "_apply with embloy_" button however you want, but here are some default examples:

- Plain dark (HTML)
    
    ![button-black_large](https://embloy.com/images/button-black_large.svg)

    ```HTML
    <a href="<insert-your-redirect-url-here>" target="_blank" rel="noopener noreferrer">
        <img src="https://embloy.com/images/button-black_large.svg" style="width: 300px; height: auto;">
    </a>
    ```

- Plain light (HTML)
    
    ![button-white_large](https://embloy.com/images/button-white_large.svg)

    ```HTML
    <a href="<insert-your-redirect-url-here>" target="_blank" rel="noopener noreferrer">
        <img src="https://embloy.com/images/button-white_large.svg" style="width: 300px; height: auto;">
    </a>
    ```

- Plain colorful (HTML)
    
    ![button-purple_large](https://embloy.com/images/button-purple_large.svg)

    ```HTML
    <a href="<insert-your-redirect-url-here>" target="_blank" rel="noopener noreferrer">
        <img src="https://embloy.com/images/button-purple_large.svg" style="width: 300px; height: auto;">
    </a>
    ```

- Modern-Dark (TypeScript+TailwindCSS) 

    ![Modern-Dark](https://github.com/Embloy/Embloy-Examples/assets/106114526/c2ab132b-05f4-484c-8cc1-435e2b9a4090)

    ```TypeScript
    <a
    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    href="https://embloy.com"
    target="_blank"
    rel="noopener noreferrer"
    >
    Apply with {' '}
    <Image
        src="https://raw.githubusercontent.com/Embloy/Embloy-Examples/main/config/assets/embloy.svg"
        alt="Embloy logo"
        width={100}
        height={24}
        priority
    />
    </a>
    ```

- Logo-Only-Monochrome-Dark (HTML+TailwindCSS)
    
    ![Logo-Only-Monochrome-Dark](https://github.com/Embloy/Embloy-Examples/assets/106114526/243285cb-a6f5-4ff5-8662-9a5ba6b51561)

    ```TypeScript
    <a
    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    href="https://embloy.com"
    target="_blank"
    rel="noopener noreferrer"
    >
    Apply with {' '}
    <Image
        src="https://raw.githubusercontent.com/Embloy/Embloy-Examples/main/config/assets/logo_black_white.svg"
        alt="Embloy logo"
        width={50}
        height={50}
        priority
    />
    </a>
    ```

---

© Carlo Bortolan, Jan Hummel

> Carlo Bortolan &nbsp;&middot;&nbsp;
> GitHub [@carlobortolan](https://github.com/carlobortolan) &nbsp;&middot;&nbsp;
> contact via [bortolanoffice@embloy.com](mailto:bortolanoffice@embloy.com)
>
> Jan Hummel &nbsp;&middot;&nbsp;
> GitHub [@github4touchdouble](https://github.com/github4touchdouble) &nbsp;&middot;&nbsp;
> contact via [hummeloffice@embloy.com](mailto:hummeloffice@embloy.com)
