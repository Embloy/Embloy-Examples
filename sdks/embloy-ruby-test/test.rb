# Make sure to install the embloy gem first
# gem install embloy --pre

# In your Rails application or script
require 'embloy'

session = {
    mode: "job",
    job_slug: "your-job-slug",
    success_url: "mypage.com/success",
    cancel_url: "mypage.com/failure"
}

client_token = "your-client-token"
client = Embloy::Client.new(client_token, session)
redirect_url = client.make_request
puts "redirect_url: #{redirect_url}"