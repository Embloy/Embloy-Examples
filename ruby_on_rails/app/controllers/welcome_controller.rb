require 'net/http'
require 'uri'

class WelcomeController < ApplicationController
  def index
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