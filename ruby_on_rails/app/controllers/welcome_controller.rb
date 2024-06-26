require 'net/http'
require 'uri'
require 'embloy'

class WelcomeController < ApplicationController
  def index
  end

  # Call our API and request application session
  def make_request
    puts "Starting make_request method"

    session = {
      mode: "job",
      job_slug: params[:job_slug],
      success_url: params[:success_url],
      cancel_url: params[:cancel_url]
    }
    puts "Session data prepared: #{session.inspect}"

    client = Embloy::Client.new(ENV.fetch('CLIENT_TOKEN'), session)
    puts "Embloy client initialized with session data"

    redirect_url = client.make_request
    puts "Received redirect URL from Embloy client: #{redirect_url}"

    redirect_to(redirect_url, allow_other_host: true)
    puts "Redirecting to: #{redirect_url}"
  end
end