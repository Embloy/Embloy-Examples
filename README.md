# Embloy-Examples
Example implementations of Embloy-Quicklink in different frameworks &amp; languages

## Introduction

To facilitate use of Embloy's Quicklink API, we generously provided possible (simple) integrations of Embloy's Quicklink, implemented using the most popular languages and frameworks. In most cases, all it takes is not more than ~10 LOC to integrate Embloy Quicklink into your own job posting service.
E.g.:

_In your backend:_

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

_In your frontend:_

```HTML
<a className="App-link" href="https://<your-web-sevice>/api/make_request">Apply with EMBLOY</a>
```  

## How To Use

Choose your framework and cd into the respective directory. There you will find detailed instructions on how to set up and start the clients and servers.

## Supported frameworks

- [ ] Angular
- [X] Astro + Express
- [X] Django
- [X] Next.js + FastAPI
- [X] Next.js + Flask
- [X] Next.js + TypeScript
- [X] React + Express
- [X] Ruby on Rails
- [X] SvelteKit + Express
- [ ] Vue

---

© Carlo Bortolan, Jan Hummel

> Carlo Bortolan &nbsp;&middot;&nbsp;
> GitHub [@carlobortolan](https://github.com/carlobortolan) &nbsp;&middot;&nbsp;
> contact via [bortolanoffice@embloy.com](mailto:bortolanoffice@embloy.com)
>
> Jan Hummel &nbsp;&middot;&nbsp;
> GitHub [@github4touchdouble](https://github.com/github4touchdouble) &nbsp;&middot;&nbsp;
> contact via [hummeloffice@embloy.com](mailto:hummeloffice@embloy.com)
