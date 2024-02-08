# Embloy Example (React+Laravel)

> An example implementation of Embloy Quicklink, integrated in a React+Laravel web service.

## Introduction

This is a hybrid React+Laravel app that uses React as the frontend and Laravel as the API backend.

## Installation

```bash
composer require laravel/breeze --dev
```

```bash
php artisan breeze:install
 
php artisan migrate
npm install
npm run dev
```

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    npm install
    ```

3. Start the Vite development server that provides Hot Module Replacement for your Laravel application:

    ```bash
    npm run dev
    ```

4. Run the development server:

    ```bash
    php artisan serve
    ```

5. Visit [localhost:8000](http://localhost:8000), press "_apply with embloy_" and follow the instructions

> The Laravel server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Version

Laravel v10.43.0 (PHP v8.2.14)

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
