require 'net/http'
require 'uri'
require 'embloy'

class WelcomeController < ApplicationController
  def index
  end

  # Call our API and request application session
  def make_request
    session = {
      mode: "job",
      job_slug: params[:job_slug],
      success_url: params[:success_url],
      cancel_url: params[:cancel_url]
    }
    client = Embloy::Client.new(ENV.fetch('CLIENT_TOKEN'), session)
    redirect_url = client.make_request

    redirect_to(redirect_url, allow_other_host: true)
  end
end