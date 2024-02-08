# Embloy-Examples
Example implementations of Embloy-Quicklink in different frameworks &amp; languages

## Introduction

To facilitate use of Embloy's Quicklink API, we generously provided possible (simple) integrations of Embloy's Quicklink, implemented using the most popular languages and frameworks. In most cases, all it takes is not more than ~10 LOC to integrate Embloy Quicklink into your own job posting service.
E.g.:

_In your backend add a **make_request** endpoint:_

```Javascript
const clientToken = process.env.CLIENT_TOKEN;
const response = await axios.post(
    'https://api.embloy.com/api/v0/sdk/request/auth/token',
    {},
    {
    headers: {
        client_token: clientToken,
    },
    }
);
const requestToken = response.data.request_token;
res.redirect(302, `https://embloy.com/sdk/apply?request_token=${requestToken}`);
```  

_In your frontend call this endpoint whereever you want:_

```HTML
<a className="App-link" href="https://<your-web-sevice>/api/make_request">Apply with EMBLOY</a>
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

## Fully tested frameworks

- [ ] Angular
- [ ] Astro + Express
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

- Plain (HTML)
    
    ![image](https://github.com/Embloy/Embloy-Examples/assets/106114526/92f6823b-8118-4704-9824-11f2a6d256d3)

    ```HTML
    <a className="Embloy-Button" href="https://<your-web-sevice>/api/make_request">Apply with EMBLOY</a>
    ```

- Modern-Dark (TypeScript+TailwindCSS) 

    ![Modern-Dark](https://github.com/Embloy/Embloy-Examples/assets/106114526/c2ab132b-05f4-484c-8cc1-435e2b9a4090)

    ```TypeScript
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
    </div>
    ```

- Logo-Only-Monochrome-Dark (HTML+TailwindCSS)
    
    ![Logo-Only-Monochrome-Dark](https://github.com/Embloy/Embloy-Examples/assets/106114526/243285cb-a6f5-4ff5-8662-9a5ba6b51561)

    ```TypeScript
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
    </div>
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
