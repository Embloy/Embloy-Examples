# Embloy Example (RubyOnRails)

> An example implementation of Embloy Quicklink, integrated in a Ruby on Rails web service.

## How To Use

1. Fetch your personal client_token [here](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) and update the `.env` file accordingly

2. install necessary dependencies:

    ```bash
    bundle install
    ```

3. Run the development server:

    ```bash
    rails s
    ```

4. Visit [localhost:3000](http://localhost:3000), press "_apply with embloy_" and follow the instructions

> The Rails server will be running on [http://127.0.0.1:3000](http://127.0.0.1:3000) – feel free to change the port in `config/puma.rb`.

## Version Details
- Rails 7.0.8
- Puma version: 5.6.7 (ruby 3.2.2-p53) ("Birdie's Version")
- Listening on http://127.0.0.1:3000
