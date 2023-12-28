require 'net/http'
require 'uri'

class WelcomeController < ApplicationController
  def index

  end

  def make_request2
    url = URI("http://localhost:3000/api/v0/sdk/request/auth/token")
    http = Net::HTTP.new(url.host, url.port)
    request = Net::HTTP::Post.new(url)
    request["HTTP_CLIENT_TOKEN"] = ENV.fetch('CLIENT_TOKEN')
  
    response = http.request(request)
  
    case response
    when Net::HTTPSuccess
      request_token = JSON.parse(response.body)['request_token']
      redirect_to "https://google.com"
    when Net::HTTPRedirection
      redirect_to response['location']
    when Net::HTTPClientError
      render plain: "Client error: #{response.message}", status: :bad_request
    when   Net::HTTPServerError
      render plain: "Server error: #{response.message}", status: :internal_server_error
    else
      render plain: "Unknown error: #{response.message}", status: :internal_server_error
    end
  end

  def make_request
    url = URI("http://localhost:3000/api/v0/sdk/request/auth/token")

    http = Net::HTTP.new(url.host, url.port);
    request = Net::HTTP::Post.new(url)
    request["client_token"] = ENV.fetch('CLIENT_TOKEN')

    response = http.request(request)
    puts response.read_body    
    request_token = JSON.parse(response.body)['request_token']
    redirect_to "http://localhost:3000/sdk/apply?token=#{request_token}"
  end
end