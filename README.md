# Embloy-Examples
Example implementations of Embloy-Quicklink in different frameworks &amp; languages

## Introduction

To facilitate use of Embloy's Quicklink API, we generously provided possible (simple) integrations of Embloy's Quicklink, implemented using the most popular languages and frameworks. In most cases, all it takes is not more than ~10 LOC to integrate Embloy Quicklink into your own job posting service.
E.g.:

_In your backend add a **make_request** endpoint:_

```Javascript
const clientToken = process.env.CLIENT_TOKEN;
const response = await axios.post(
    'http://localhost:3000/api/v0/sdk/request/auth/token',
    {},
    {
    headers: {
        client_token: clientToken,
    },
    }
);
const requestToken = response.data.request_token;
res.redirect(302, `https://embloy.com/sdk/apply?token=${requestToken}`);
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
- [ ] Gin-Gonic
- [X] Next.js + FastAPI
- [X] Next.js + Flask
- [X] Next.js + TypeScript
- [X] React + Express
- [X] Ruby on Rails
- [ ] Spring-Boot
- [X] SvelteKit + Express
- [ ] Vue

## Embloy-Button

You can customize the "_apply with embloy_" button however you want, but here are some default examples:

- Plain (HTML)
    ```HTML
    <a className="Embloy-Button" href="https://<your-web-sevice>/api/make_request">Apply with EMBLOY</a>
    ```

- Modern-Light (TypeScript+TailwindCSS)
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

- Modern-Dark (HTML+TailwindCSS)
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

- Logo-Only-Dark (HTML+TailwindCSS)
    ```HTML
    ```

    ```CSS
    ```

- Logo-Only-Light (HTML+TailwindCSS)

    ```CSS
    ```

    ```HTML
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
