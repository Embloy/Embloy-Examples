require 'net/http'
require 'uri'
require 'embloy'

class WelcomeController < ApplicationController
  def index
  end

  def make_request
    session = {
      mode: "job",
      job_slug: "job#1",
      success_url: "mypage.com/success",
      cancel_url: "mypage.com/failure"
    }
    client = Embloy::Client.new(ENV.fetch('CLIENT_TOKEN'), session)
    redirect_url = client.make_request

    redirect_to(redirect_url, allow_other_host: true)
  end
end