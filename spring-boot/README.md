# Embloy Example (SpringBoot)

> An example implementation of Embloy Quicklink, integrated in a SpringBoot web service.

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    ./gradlew build
    ```

3. Run the development server:

    ```bash
    ./gradlew run
    ```

4. Visit [localhost:8080/make_request?job_slug=<insert-your-jobslug-here>](localhost:8080/make_request?job_slug=<insert-your-jobslug-here>), to automatically be redirected to the Embloy application portal.

## Version Details
- Spring Boot (v3.3.1)
- Java: 22
- Built with Gradle - Groovy 
- Listening on http://127.0.0.1:8080
